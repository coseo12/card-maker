import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService, FileInput, cardRepository }) => {
  const {
    push,
    location: { state },
  } = useHistory();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(state && state.id);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthchange(user => {
      if (user) {
        setUserId(userId);
      } else {
        push('/');
      }
    });
  }, [authService, push, userId]);

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
