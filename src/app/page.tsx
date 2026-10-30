"use client"
import styles from "./page.module.css";
import { Topbar } from "./components/Topbar";
import { Sidenav } from "./components/Sidenav";
import sections from "./Data/sections.json";
import { useVisibleSection } from "./Hooks/index";
import { createClient } from "./lib/supabase/client";
import { useState } from "react";
import pic from "../../public/photos/Arnaud.jpg";
import cv from "../../public/photos/cv_thumbnail.png";
import { redirect } from "next/navigation";

// async function SendMessage() {

//   const supabase = await createClient();
  
//   const { error } = supabase.from('messages').insert({
//     user_email: 
//   })
// }

async function submitForm(message: any) {
  const supabase = await createClient();
  const res = await supabase.from('messages').insert(message)
  console.log(res);
}

export default function Home() {
  const visibleSection = useVisibleSection([...sections, {id: "6", title: "test"}]);
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(e: any) {
    e.preventDefault();
    try {
      if (email.length > 0 && content.length > 0) {
        await submitForm({user_email: email, content: content});
      }
    } catch (err) {
    }
  }

  function handleEmailChange(e: any) {
    setEmail(e.target.value);
  }
  function handleContentChange(e: any) {
    setContent(e.target.value);
  }

  return (
    <div className={styles.page}>
      <Topbar  />
      <Sidenav visibleSection={visibleSection}></Sidenav>
      <main className={styles.main}>
        <section id="1" key="a propos de moi" className={styles.section}>
          <div className="flex gap-3">
            <img src={pic.src} className="w-[16rem] aspect-auto rounded-md" alt="me" />
            <div>
              <div className="p-2 w-[16rem] rounded-md bg-white/10 backdrop-blur-xs grid font-mono font-sans">
                <h2 className="text-2xl">Arnaud Le Bunze</h2>
                <p className="text-right">Développeur web</p>
              </div>
              <div className="mt-3 w-[16rem] h-[19rem] rounded-md bg-white/10 backdrop-blur-xs grid font-mono font-sans">
                <a href="/public/files/cv_arnaud_lebunze.pdf" download="cv-arnaudLeBunze">
                  <button type="button" className="w-full h-full grid justify-center items-center">
                    <img className=" rounded-md w-[13rem]" src={cv.src} alt="cv" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="2" key="projets" className={styles.section}>
          <h2 className="text-2xl">Quelques projets</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="p-2 rounded-md bg-white/10 backdrop-blur-xs font-mono font-sans">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">Wac puissance 4</h2>
                <a href="https://github.com/ArnaudLeBunze/wac-puissance4" className="underline cursor-pointer font-bold">Github</a>
              </div>
              <p>Le jeu iconique sur navigateur</p>
              <p>Un projet fait en html, css et js effectuer en solo</p>
            </div>
            <div className="p-2 rounded-md bg-white/10 backdrop-blur-xs font-mono font-sans">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">Wac cinema</h2>
                <a href="https://github.com/ArnaudLeBunze/wac-my_cinema" className="underline cursor-pointer font-bold">Github</a>
              </div>
              <p>Un site de gestion de cinema</p>
              <p>Un projet fait en html, php, css et js effectuer en solo</p>
            </div>
            <div className="p-2 rounded-md bg-white/10 backdrop-blur-xs font-mono font-sans">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">Wac snapchat</h2>
                <a href="https://github.com/ArnaudLeBunze/wac-snapchat" className="underline cursor-pointer font-bold">Github</a>
              </div>
              <p>Un recréation de l'application</p>
              <p>Un projet fait en react native et expo effectuer en groupe</p>
            </div>
            <div className="p-2 rounded-md bg-white/10 backdrop-blur-xs font-mono font-sans">
              <div className="flex justify-between">
                <h2 className="font-bold text-lg">Wac e-commerce</h2>
                <a href="https://github.com/ArnaudLeBunze/wac-e-commerce" className="underline cursor-pointer font-bold">Github</a>
              </div>
              <p>Un site de e-commerce de lego</p>
              <p>Un projet fait en symfony et reactjs effectuer en groupe</p>
            </div>
          </div>
        </section>
        <section id="3" key="social" className={styles.section}>
          <h2 className="text-2xl">Quelques endroits où vous pouvez me trouver</h2>
          <div className="mt-3 flex justify-around items-center w-full rounded-md bg-white/10 backdrop-blur-xs font-mono font-sans">
            <a href="https://www.linkedin.com/in/arnaud-le-bunze/">
              <svg className="w-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z"/></svg>
            </a>
            <a href="https://github.com/ArnaudLeBunze">
              <svg className="w-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z"/></svg>
            </a>
          </div>
        </section>
        <section id="4" key="contact" className={styles.section}>
          <h2 className="text-2xl">Contact</h2>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <input className="mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white" type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
            <textarea className="mt-3 block w-full h-32 resize-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white" name="content" placeholder="Entrez tout ce que vous avez à me dire ici..." id="content" value={content} onChange={handleContentChange} />
            <button className="mt-3 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white" type="submit">Envoyer</button>
          </form>
          <div className="flex w-full gap-3">
            <button className="w-full mt-3 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white" type="button" onClick={() => redirect('/auth/sign-up')}>
              S'inscrire
            </button>
            <button className="w-full mt-3 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white" type="button" onClick={() => redirect('/auth/login')}>
              Se connecter
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
