"use client"
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import sections from '../../Data/sections.json';

interface ISideNavProps {
  visibleSection : string | undefined
}

export function Sidenav({visibleSection}: ISideNavProps) {

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
        <nav className={styles.sideNav}>
          <ul>
            {sections.map(s => <li key={s.id} className={visibleSection === s.id ? styles.active : styles.inactive}><a href={'#' + s.id}>{s.title}</a></li>)}
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className={styles.sideNav + ' ' + styles.invisible}>
          <ul>
            {sections.map(s => <li key={s.id}><a href={'#' + s.id}>{s.title}</a></li>)}
          </ul>
        </nav>
      );
    }
  }
  