import styles from "./Projects.module.css";
import globalstyle from "../Panel.module.css";
import Typewriter from "typewriter-effect";

import Meta from "../Elements/Meta";
import Heading from "../Elements/Heading";
import Navigate from "../Elements/Navigate";

const Projects = () => {
  return (
    <section className={styles.cvSection}>
      <Meta
        title={"Projects"}
        description={"Check Koustav's Projects over the years."}
        keyword={"koustav, das, dataanalysis, koustavdas, developer, Projects"}
        link={"projects"}
      />
      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
              <Heading title={"Projects and Works"} />
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
                    <a
                      href="https://www.linkedin.com/company/aerospace-club-ju/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stratosphere, Jadavpur University Aerospace Club
                    </a>
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    June, 2023 - September, 2023
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Custom design in AutoCAD, SolidWorks
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Made with full team efforts
                  </li>
                </ul>
              </section>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    RC Plane
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    <a
                      href="https://kadss.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Team KADSS
                    </a>
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    September, 2023 - September, 2023
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Custom design in AutoCAD, SolidWorks
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Developed in minimal cost
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Made with full team efforts
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Navigate previous={"EDUCATION"} next={"SKILLS"} />
    </section>
  );
};

export default Projects;
