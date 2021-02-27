import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService,FileInput }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Seo1',
      company: 'Northstar',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'coseo12@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Seo2',
      company: 'Northstar',
      theme: 'light',
      title: 'Software Engineer',
      email: 'coseo12@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'Seo3',
      company: 'Northstar',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'coseo12@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: null,
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthchange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });

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
