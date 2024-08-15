"use client";
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../components/components.module.css';

const Item = ({ itemName }) => {
  const dispatch = useDispatch();
  
  function handleClick() {
    dispatch({ type: 'ADD_COMPONENT', payload: itemName });
  }

  return (
    <div className={styles.item} onClick={handleClick}>
      {itemName}
    </div>
  );
};

const Components = () => {
  const items = [
    "Input", "InputGrp", "Select", "Button","Radio", "Checkbox",
    "FileUpload", "Hcaptcha", "Recaptcha", 
    "Btn group", "Start Condition", "End Condition",
    "Title", "Paragraph", "HTML","Textarea"
  ];

  return (
    <div>
      <div className={styles.heading}>
        Components
      </div>
      <div className={styles.componentContainer}>
        {items.map((val, ind) => (
          <Item itemName={val} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Components;
