"use client"
import styles from "./page.module.css";
import { Topbar } from "./components/Topbar";
import { Sidenav } from "./components/Sidenav";
import sections from "./Data/sections.json";
import { useVisibleSection } from "./Hooks/index";

export default function Home() {
  const visibleSection = useVisibleSection([...sections, {id: "6", title: "test"}]);

  return (
    <div className={styles.page}>
      <Topbar  />
      <Sidenav visibleSection={visibleSection}></Sidenav>
      <main className={styles.main}>
        <section id="1" key="a propos de moi" className={styles.section}>
          <h2>Arnaud Le Bunze</h2>
          <p>Développeur web</p>
        </section>
        <section id="2" key="projets" className={styles.section}>
          <h2>Arnaud Le Bunze</h2>
          <p>Développeur web</p>
        </section>
        <section id="3" key="social" className={styles.section}>
          <h2>Arnaud Le Bunze</h2>
          <p>Développeur web</p>
        </section>
        <section id="4" key="contact" className={styles.section}>
          <h2>Arnaud Le Bunze</h2>
          <p>Développeur web</p>
        </section>
      </main>
    </div>
  );
}
