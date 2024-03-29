import { useState } from "react";
import styles from "./Hero.module.css";
import { getUrl } from "../../utils";
import { Link } from "react-router-dom";

import Meta from "../Elements/Meta";
import Navigate from "../Elements/Navigate";

const Hero = () => {

  const navigateTab = (char) => {
    localStorage.setItem("TAB", char);
  }

  const [audio, setaudio] = useState(false);
  const handleAudio = () => {
      if ("speechSynthesis" in window) {
        const synthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance("kous-taabh");

        synthesis.speak(utterance);
      }
    setaudio(true);
  };

  return (
    <section className={styles.heroSection}>
      <Meta
        title={"Koustav Das"}
        description={"Contact Koustav Das"}
        keyword={"koustav, das, dataanalysis, koustavdas, developer, skills, expertise"}
        link={""}
      />
      <Navigate previous={"MESSAGE"} next={"EXPERIENCE"} />
      <div className={styles.heroTitle}>
        <h1
          className={`${styles.heroTitleName} ${styles.animate__animated} ${styles.animate__backInLeft} ${styles.animate__1}`}
        >
          <span className={styles.blue}>
            Koustav<span className={styles.offside}>*</span>
          </span>
          <br />
          <span>Das.</span>
        </h1>
        <div
          className={`${styles.heroaudio} ${styles.offside} ${styles.animate__animated} ${styles.animate__backInLeft} ${styles.animate__2}`}
        >
          <span className={styles.blue}>*</span> [<b> kous-taabh </b>]
          <button
            type="button"
            className={styles.iconspeaker}
            onClick={handleAudio}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-volume-up-fill"
              viewBox="0 0 16 16"
              alt="Koustav Pronunciation"
            >
              <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
              <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
            </svg>
          </button>
        </div>
        <hr />
        <p>
          I&apos;m a student currently studying in
          <a
            href="https://jadavpuruniversity.in/"
            rel="noreferrer"
            target="_blank"
          >
            <em>&quot;Jadavpur University&quot;</em>
          </a>
        </p>
      </div>
      <div className={styles.topblur} />
      <img
        className={styles.heroImage}
        src={getUrl("koustav-hero-image.png")}
        alt="Koustav Das Image"
      />
    </section>
  );
}

export default Hero;
