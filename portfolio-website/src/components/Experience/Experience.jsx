import React from 'react';
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.cvSection}>
      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
              <h2
                className={`${styles.cvSecondaryHeading} ${styles.cvJobsHeading}`}
              >
                Work Experience.
              </h2>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    Content Writing Intern
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Storishh
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    April, 2023 - May, 2023
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Conducted thorough market research to identify industry
                    trends and target audience preferences
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Optimized content for SEO
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Created engaging content for Storishh&apos;s social media
                    handles and website.
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

export default Experience;
