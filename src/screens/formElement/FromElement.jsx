"use client";
import React from 'react';
import styles from './formElement.module.css';

const FormElement = React.memo(({ elementName }) => {
  return (
    <div className={styles.formElement}>
      <label className={styles.formLabel}>{elementName}</label>

      {elementName === 'Input' && <input type="text" className={styles.formInput} />}
      {elementName === 'Textarea' && (
        <textarea rows="4" cols="50" className={styles.formTextarea}></textarea>
      )}
      {elementName === 'Select' && (
        <select className={styles.formSelect}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      )}
      {elementName === 'Radio' && (
        <div className={styles.formRadio}>
          <input type="radio" id="radio1" name="radioGroup" value="option1" />
          <label htmlFor="radio1">Option 1</label>
          <input type="radio" id="radio2" name="radioGroup" value="option2" />
          <label htmlFor="radio2">Option 2</label>
        </div>
      )}
      {elementName === 'Checkbox' && <input type="checkbox" className={styles.formCheckbox} />}
      {elementName === 'FileUpload' && <input type="file" className={styles.formFile} />}
      {elementName === 'Hcaptcha' && (
        <div className={styles.formPlaceholder}>Hcaptcha Placeholder</div>
      )}
      {elementName === 'Recaptcha' && (
        <div className={styles.formPlaceholder}>Recaptcha Placeholder</div>
      )}
      {elementName === 'Button' && (
        <button type="button" className={styles.formButton}>
          {elementName}
        </button>
      )}
      {elementName === 'Btn group' && (
        <div className={styles.formButtonGroup}>
          <button type="button" className={styles.formButton}>Button 1</button>
          <button type="button" className={styles.formButton}>Button 2</button>
          <button type="button" className={styles.formButton}>Button 3</button>
        </div>
      )}
      {elementName === 'InputGrp' && (
        <div className={styles.formInputGroup}>
          <input type="text" className={`${styles.formInput} ${styles.formInputGroupItem}`} placeholder="Input 1" />
          <input type="text" className={`${styles.formInput} ${styles.formInputGroupItem}`} placeholder="Input 2" />
        </div>
      )}
      {elementName === 'Start Condition' && (
        <input type="text" placeholder="Start Condition" className={styles.formInput} />
      )}
      {elementName === 'End Condition' && (
        <input type="text" placeholder="End Condition" className={styles.formInput} />
      )}
      {elementName === 'Title' && <h1 className={styles.formTitle}>Title</h1>}
      {elementName === 'Paragraph' && <p className={styles.formParagraph}>This is a paragraph.</p>}
      {elementName === 'HTML' && (
        <div
          className={styles.formHtml}
          dangerouslySetInnerHTML={{ __html: '<strong>HTML Content</strong>' }}
        />
      )}
    </div>
  );
});

export default FormElement;
