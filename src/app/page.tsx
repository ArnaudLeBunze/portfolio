"use client"
import styles from "./page.module.css";
import { Topbar } from "./components/Topbar";
import { Sidenav } from "./components/Sidenav";
import sections from "./Data/sections.json";
import { useVisibleSection } from "./Hooks/index";

export default function Home() {
  const visibleSection = useVisibleSection(sections);

  return (
    <div className={styles.page}>
      <Topbar></Topbar>
      <Sidenav visibleSection={visibleSection}></Sidenav>
      <main className={styles.main}>
        {sections.map((sec) => (
          <section id={sec.id} key={sec.title} className={styles.section}>
            <h2>{sec.title}</h2>
            <p>{sec.content}</p>
          </section>
        ))}
      </main>
    </div>
  );
}
