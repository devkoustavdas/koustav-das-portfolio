import { useState } from "react";
import styles from "./Activities.module.css";
import {getUrl} from "../../utils";
import globalstyle from "../Panel.module.css";
import Typewriter from "typewriter-effect";

const Activities = () => {
const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const toggleAudio = () => {
    const audio = document.getElementById("audioElement"); // Get the audio element by its ID
    if (audio) {
      if (isAudioPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsAudioPlaying(!isAudioPlaying); // Toggle the state
    }
  };


  return (
    <section className={styles.cvSection}>
      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
              <h2
                className={`${styles.cvSecondaryHeading} ${styles.cvJobsHeading}`}
              >
                Activities.
                <button
                  type="button"
                  className={styles.iconspeaker}
                  onClick={toggleAudio}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-volume-up-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                    <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                    <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
                  </svg>
                </button>
              </h2>
              <audio id="audioElement" className={styles.speak} controls>
                <source src={getUrl("activities-cv.m4a")} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <div className={globalstyle.pageSubtitle}>
                These are some of my
                <Typewriter
                  options={{
                    strings: ["Activities I did during my College time."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    Organising Team Member
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Stratosphere, Jadavpur University Aerospace Club
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    May, 2023 - Present
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Managed and organized Guest Talks, Club events at Srijan,
                    the TechFest of JU, and Orientations of the club.
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Creating content and posts for the club&apos;s social media
                    platforms.
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Growing the club&apos;s member, audience and followers.
                  </li>
                </ul>
              </section>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    Coordinator
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    E-cell Jadavpur University
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    May, 2023 - Present
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Conducted orientations and events
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Creating content and posts for the club&apos;s social media
                    platforms.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Activities;
