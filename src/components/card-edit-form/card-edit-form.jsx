import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card-edit-form.module.css';

const CardEditForm = ({ card, updateCard, deleteCard, FileInput }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const { name, company, title, email, message, theme } = card;
  const onSubmit = event => {
    event.preventDefault();
    deleteCard(card);
  };
  const onChange = event => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={card.fileName} onFileChange={onFileChange} />
      </div>
      <Button name={'Delete'} onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
