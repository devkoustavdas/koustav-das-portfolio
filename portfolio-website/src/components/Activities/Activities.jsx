import styles from "./Activities.module.css";
import {getUrl} from "../../utils";
import globalstyle from "../Panel.module.css";
import Typewriter from "typewriter-effect";
import { Gallery } from "react-grid-gallery";

import Meta from "../Elements/Meta";
import Heading from "../Elements/Heading";
import Navigate from "../Elements/Navigate";

const Activities = () => {

    const images = [
      {
        src: getUrl("class12-award.jpg"),
        width: 600,
        height: 800,
        isSelected: false,
        tags: [{ value: "Class 12", title: "Class" }],
        caption:
          "Rewarded from school (Bethany Mission School, Raiganj) for getting 90%+ marks in 12th.",
        alt: "Rewarded from school (Bethany Mission School, Raiganj) for getting 90%+ marks in 12th.",
      },
      {
        src: getUrl("newsclass10.jpg"),
        width: 600,
        height: 700,
        isSelected: false,
        tags: [{ value: "Class 10 News", title: "Class" }],
        caption:
          "Rewarded from school (Bethany Mission School, Raiganj) for getting 90%+ marks in 12th.",
        alt: "Rewarded from school (Bethany Mission School, Raiganj) for getting 90%+ marks in 12th.",
      },
      {
        src: getUrl("reward-class10.jpg"),
        width: 1000,
        height: 600,
        isSelected: false,
        tags: [{ value: "Class 10 Award", title: "Class" }],
        caption:
          "Rewarded for being the highest ICSE scorer of Uttar Dinajpur District (West Bengal)",
        alt: "Rewarded for being the highest ICSE scorer of Uttar Dinajpur District (West Bengal)",
      },
    ];



  return (
    <section className={styles.cvSection}>
      <Meta
        title={"Activities"}
        description={"Check Koustav's Activities over the years."}
        keyword={"koustav, das, dataanalysis, koustavdas, developer"}
        link={"activities"}
      />
      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
            
              <Heading title={"Activities"}/>

              <div className={globalstyle.pageSubtitle}>
                These are some 
                <Typewriter
                  options={{
                    strings: ["Activities I did during my College time.", "Events thats I worked in to organise.", "Clubs I worked with in College.", "Positions I held in those Clubs"],
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
                    <a
                      href="https://www.linkedin.com/company/aerospace-club-ju/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Stratosphere, Jadavpur University Aerospace Club
                    </a>
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
                    Made Glider with the team (Was in-charge of the electronics
                    part of the glider).
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Creating content and posts for the club&apos;s social media
                    platforms on various occasions using{" "}
                    <strong>Canva, Figma</strong>.
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
                    <a
                      href="https://www.linkedin.com/school/juecell/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      E-cell Jadavpur University
                    </a>
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    May, 2023 - Present
                  </small>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Conducted events like <strong>E-Weekend 2023</strong>,{" "}
                    <strong>Hult Prize OnCampus JU 2024</strong>, etc.
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Conducted orientations and sessions like Eweekend{" "}
                    <strong>Intro To Pitching</strong>,{" "}
                    <strong>Hult Prize Orientation</strong>, Departmental
                    Campaigns.
                  </li>

                  <li className={styles.cvJobTimelineItem}>
                    Created content and posts for the club&apos;s social media
                    platforms and website on various occasions using{" "}
                    <strong>Canva, Figma</strong>.
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Growing the club&apos;s member, audience and followers.
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Navigate previous={"EXPERIENCE"} next={"EDUCATION"} />
      <Gallery images={images} />
      <div className={styles.space}></div>
    </section>
  );
};

export default Activities;
