import React from "react";
import styles from "./Projects.module.css";
import globalstyle from "../Panel.module.css";
import "react-social-icons/behance";
import "react-social-icons/leetcode";
import "react-social-icons/medium";
import "react-social-icons/github";
import Typewriter from "typewriter-effect";

const Projects = () => {
  return (
    <section className={styles.cvSection}>
      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
              <h2
                className={`${styles.cvSecondaryHeading} ${styles.cvJobsHeading}`}
              >
                Projects and Works.
              </h2>
              <div className={globalstyle.pageSubtitle}>
                These are some of my
                <Typewriter
                  options={{
                    strings: ["Projects.", "Works."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    steam table analysis in Excel using VBA
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Under Prof. Snehangshu Mondal
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    September, 2023 - Present
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Designed an Excel tool with VBA for quick access to steam
                    properties using temperature and pressure inputs.
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    It displays the graph and all other property values.
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Developed an easy-to-use tool that instantly classifies and
                    displays steam properties in a user-friendly manner.
                  </li>
                </ul>
              </section>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    link management system
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    (Self-made)
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    October, 2023 - Present
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Coded using Javascript, HTML, CSS
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Uses Google spreadsheet as database
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Login and Dark Mode functionalities
                  </li>
                </ul>
              </section>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>Glider</span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Aerospace Club Jadavpur University
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    June, 2023 - September, 2023
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Coded using Javascript, HTML, CSS
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

export default Projects;
