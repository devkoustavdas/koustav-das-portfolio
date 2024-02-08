import styles from "./Competitions.module.css";
import globalstyle from "../Panel.module.css";
import Typewriter from "typewriter-effect";

import Meta from "../Elements/Meta";
import Heading from "../Elements/Heading";
import Navigate from "../Elements/Navigate";

const Competitions = () => {
  return (
    <section className={styles.cvSection}>
      <Meta
        title={"Competition and Awards"}
        description={"Check Koustav's Competition and Awards over the years."}
        keyword={"koustav, das, dataanalysis, koustavdas, developer, competition, awards"}
        link={"competition"}
      />
      <Navigate previous={"SKILLS"} next={"MESSAGE"} />
      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
              <Heading title={"Competition and Awards"} />
              <div className={globalstyle.pageSubtitle}>
                These are some of the
                <Typewriter
                  options={{
                    strings: ["Competitions I participated.", "Awards I won."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
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
