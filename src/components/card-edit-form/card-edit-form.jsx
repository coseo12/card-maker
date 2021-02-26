import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image-file-input/image-file-input';
import styles from './card-edit-form.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme } = card;
  const onSubmit = () => {};
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
      />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option defaultValue="light">Light</option>
        <option defaultValue="dark">Dark</option>
        <option defaultValue="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        defaultValue={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name={'Delete'} onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
