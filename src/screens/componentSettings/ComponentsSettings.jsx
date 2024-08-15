"use client";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './componentsSettings.module.css';

const Setting = React.memo(({ label, inputValue, name, handleChange }) => {
  const widthOptions = ['100%', '75%', '50%', '25%', 'auto'];

  return (
    <div className={styles.settingContainer}>
      <div className={styles.label}>{label}</div>
      {name === 'width' ? (
        <select 
          value={inputValue}
          onChange={handleChange}
          name={name}
          className={styles.select}
        >
          {widthOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input 
          type="text"
          value={inputValue}
          onChange={handleChange}
          name={name}
          className={styles.input}
        />
      )}
    </div>
  );
});

const ComponentsSettings = React.memo(() => {
  const dispatch = useDispatch();
  const componentsStore = useSelector((state) => state.components.componentsStore);
  const selectedComponentIndex = useSelector((state) => state.components.selectedComponentIndex);

  console.log(componentsStore);
  console.log('Selected Component Index:', selectedComponentIndex); 
  console.log(componentsStore[selectedComponentIndex]);

  const [settings, setSettings] = useState([]);

  useEffect(() => {
    if (selectedComponentIndex) {
      setSettings(componentsStore[selectedComponentIndex]);
    }
  }, [selectedComponentIndex, componentsStore]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    console.log(settings);
    const updatedSettings = settings.map((setting) =>
      setting.name === name
        ? {
            ...setting,
            inputValue: type === 'checkbox' ? checked : value,
          }
        : setting
    );
    setSettings(updatedSettings);
    dispatch({
      type: 'EDIT_SETTING',
      payload: {
        index: selectedComponentIndex,
        settings: updatedSettings,
      },
    });
  };

  // Only display the settings if a component is selected
  if (selectedComponentIndex === null) {
    return <div>Select a component to edit its settings</div>;
  }

  return (
    <div>
      <div className={styles.heading}>Components Settings</div>
      <div className={styles.componentSettingsContainer}>
        {settings.map(
          (setting, index) =>{
            console.log('====================================');
            console.log("selected component",setting.name);
            console.log('====================================');
            setting.name !== 'disabled' &&
            setting.name !== 'required' && (
              <Setting
                key={index}
                label={setting.label}
                inputValue={setting.inputValue}
                name={setting.name}
                handleChange={handleChange}
              />
            )
})}

        <div className={styles.checkboxContainer}>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="disabled"
              checked={settings.find((s) => s.name === 'disabled')?.inputValue || false}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span>Disabled</span>
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="required"
              checked={settings.find((s) => s.name === 'required')?.inputValue || false}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span>Required</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ComponentsSettings;
