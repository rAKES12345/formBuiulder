"use client";
import React from 'react';
import Components from "@/screens/components/Components";
import ComponentsSettings from "@/screens/ComponentSettings/ComponentsSettings";
import Form from "@/screens/form/Form";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.columnOne}>
        <Components />
      </div>
      <div className={styles.column}>
        <Form />
      </div>
      <div className={styles.column}>
        <ComponentsSettings />
      </div>
    </div>
  );
}
