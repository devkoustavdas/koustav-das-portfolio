import React from 'react';
import styles from "./Competitions.module.css";

const Competitions = () => {
  return (
    <section className={styles.cvSection}>
      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
              <h2
                className={`${styles.cvSecondaryHeading} ${styles.cvJobsHeading}`}
              >
                Competitions and Awards.
              </h2>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    Eggsplosion
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Winner
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    April, 2023
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Issued by XLR8, Motorsports Club, Jadavpur University
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Won First Prize in a team called EggsPlosives
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Competitions;
