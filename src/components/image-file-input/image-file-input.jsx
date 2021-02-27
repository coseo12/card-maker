import React, { useRef } from 'react';
import styles from './image-file-input.module.css';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={`${styles.container}`}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button
        className={`${styles.button} ${name ? styles.uploaded : ''}`}
        onClick={onButtonClick}
      >
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
