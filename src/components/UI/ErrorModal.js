import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onCloseModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onCloseModal}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
