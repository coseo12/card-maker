import React from 'react';
import CardAddForm from '../card-add-form/card-add-form';
import CardEditForm from '../card-edit-form/card-edit-form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard,FileInput }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(cards).map(key => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
          FileInput={FileInput}
        />
      ))}
      <CardAddForm onSubmit={addCard} FileInput={FileInput} />
    </section>
  );
};

export default Editor;
