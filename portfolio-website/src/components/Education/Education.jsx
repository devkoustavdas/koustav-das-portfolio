import React from "react";
import styles from "./Education.module.css";
import { Gallery } from "react-grid-gallery";
import { getUrl } from "../../utils";
import { Link } from "react-router-dom";

import Meta from "../Elements/Meta";
import Heading from "../Elements/Heading";
import Navigate from "../Elements/Navigate";

const Education = () => {
  const navigateTab = (char) => {
        localStorage.setItem("TAB", char);
  };
  
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
        title={"Education"}
        description={"Check Koustav's Education over the years."}
        keyword={"koustav, das, dataanalysis, koustavdas, developer"}
        link={"education"}
      />

      <main className={styles.cvPage}>
        <div className={styles.cvGrid}>
          <div className={styles.cvGridColumn}>
            <div className={styles.cvJobs}>
              <Heading title={"Education"} />

              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    B.E. Mechanical Engineering
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Jadavpur University, Kolkata, India
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    2022 - 2026
                  </small>
                  <span className={styles.cvTimelineResult}>7.75</span>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>Fluid</li>
                  <li className={styles.cvJobTimelineItem}>Mechanics</li>
                  <li className={styles.cvJobTimelineItem}>Thermodynamics</li>
                  <li className={styles.cvJobTimelineItem}>
                    Computer Aided Design using <strong>AutoCAD</strong>
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Numerical Analysis in <strong>C</strong>
                  </li>
                  <li className={styles.cvJobTimelineItem}>Mathematics</li>
                </ul>
              </section>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    CBSE Class 12th
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Bethany Mission School, Raiganj, West Bengal, India
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    2020 - 2022
                  </small>
                  <span className={styles.cvTimelineResult}>92.4%</span>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>Mathematics</li>
                  <li className={styles.cvJobTimelineItem}>Physics</li>
                  <li className={styles.cvJobTimelineItem}>Chemistry</li>
                  <li className={styles.cvJobTimelineItem}>English</li>
                  <li className={styles.cvJobTimelineItem}>
                    Physical Education
                  </li>
                </ul>
              </section>
              <section className={`${styles.cvTimeline} ${styles.cvJob}`}>
                <h3 className={styles.cvTimelineHeading}>
                  <span className={styles.cvTimelineHeadingTitle}>
                    ICSE Class 10th
                  </span>
                  <span className={styles.cvTimelineHeadingLocation}>
                    Saint Xavier&apos;s School, Raiganj, West Bengal, India
                  </span>
                  <small className={styles.cvTimelineHeadingDuration}>
                    - 2020
                  </small>
                  <span className={styles.cvTimelineResult}>98.2%</span>
                </h3>
                <ul className={styles.cvTimelineDetails}>
                  <li className={styles.cvJobTimelineItem}>
                    Science (Physics, Chemistry, Biology)
                  </li>
                  <li className={styles.cvJobTimelineItem}>
                    Social Studies (History and Civics, Geography)
                  </li>
                  <li className={styles.cvJobTimelineItem}>Mathamatics</li>
                  <li className={styles.cvJobTimelineItem}>English</li>
                  <li className={styles.cvJobTimelineItem}>Bengali</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Navigate previous={"ACTIVITIES"} next={"PROJECTS"} />
      <Gallery images={images} />
      <div className={styles.space}></div>
    </section>
  );
};

export default Education;
