"use client"
import { useEffect, useState } from "react";
import styles from "./style.module.css";

export function Topbar() {
    const [visibility, setvisibility] = useState(false)
    useEffect(()=>{
      setInterval(()=>{
        if (window.scrollY >= 500) {
          setvisibility(true);
        } else {
          setvisibility(false);
        }
      })
    },[])
    if (visibility) {
      return (
        <section className={styles.topBar}>
          <div className={styles.subGroup}>
            <h1>Arnaud Le Bunze</h1>
            <hr />
            <h2>Developpeur Web</h2>
          </div>
        </section>
      );
    } else {
      return (
        <section className={styles.topBar+' '+styles.invisible}>
          <div className={styles.subGroup}>
            <h1>Arnaud Le Bunze</h1>
            <hr />
            <h2>Developpeur Web</h2>
          </div>
        </section>
      )
    }
  }
  