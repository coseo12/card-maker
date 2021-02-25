import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Seo1',
      company: 'Northstar',
      theme: 'light',
      title: 'Software Engineer',
      email: 'coseo12@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: 'test.png',
    },
    {
      id: '2',
      name: 'Seo2',
      company: 'Northstar',
      theme: 'light',
      title: 'Software Engineer',
      email: 'coseo12@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: 'test.png',
    },
    {
      id: '3',
      name: 'Seo3',
      company: 'Northstar',
      theme: 'light',
      title: 'Software Engineer',
      email: 'coseo12@gmail.com',
      message: 'go for it',
      fileName: 'test',
      fileURL: 'test.png',
    },
  ]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
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
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
