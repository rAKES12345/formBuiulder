"use client";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './form.module.css'; 
import FormElement from '../formElement/FromElement'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Form = React.memo(() => {
  const dispatch = useDispatch();
  const componentsStore = useSelector((state) => state.components.componentsStore);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const editSetting = (index) => {
    dispatch({
      type: 'SET_SELECTED_COMPONENT',
      payload: index, // Set the selected component index
    });
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleDelete = (index) => {
    dispatch({ type: 'DELETE_ITEM', payload: index });
  };

  return (
    <div>
      <div className={styles.heading}>Drop components here</div>
      <div className={styles.formContainer}>
        {componentsStore.map((val, index) => (
          <div
            key={index}
            className={styles.formElementWrapper}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => editSetting(index)} // Trigger settings display on click
          >
            <FormElement elementName={val} />
            {hoveredIndex === index && (
              <button
                style={{ position: 'absolute', top: '5px', right: '5px' }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the editSetting on click
                  handleDelete(index);
                }}
                className={styles.deleteButton}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Form;
