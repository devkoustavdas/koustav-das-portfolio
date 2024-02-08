import styles from "./Skills.module.css";
import style from "./Skills.module.scss";
import globalstyle from "../Panel.module.css";
import Typewriter from "typewriter-effect";

import Meta from "../Elements/Meta";
import Heading from "../Elements/Heading";
import Navigate from "../Elements/Navigate";

const Skills = () => {
  return (
    <section className={styles.cvSection}>
      <Meta
        title={"Skills and Expertise"}
        description={"Check Koustav's Skills and Expertise over the years."}
        keyword={"koustav, das, dataanalysis, koustavdas, developer, skills, expertise"}
        link={"skills"}
      />
      <Heading title={"Skills and Expertise"} />
      <div className={globalstyle.pageSubtitle}>
        These are some of my
        <Typewriter
          options={{
            strings: ["Skills.", "Expertise."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Navigate previous={"PROJECTS"} next={"COMPETITIONS"} />
      <ol className={style.wtree}>
        <li>
          <span
            className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__fast}`}
          >
            Microsoft 365/Google Workspace
          </span>
          <ol>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                MS Word/Google Doc
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Tables and Charts
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Document Formatting
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Bookkeeping
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                MS Excel/Google Speadsheet
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    VBA and Macro
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Tables and Charts
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Data Analysis and Visualization
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                MS PowerPoint/Google Slides/Canva
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Meeting and Presentation handling
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Data Visualization
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                Microsoft Power BI
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Data cleansing, transformation, modeling, and Visualization
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Data Management
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Business Intelligence (BI) Concepts
                  </span>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <span
            className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__fast}`}
          >
            Programming Languages
          </span>
          <ol>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                Python
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Data manipulation, analysis, and visualization using Python
                    libraries like Pandas, NumPy, and Matplotlib or tools like
                    Jupyter
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    MySQL database management
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Data Structures and Algorithms
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                JavaScript
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Proficiency in HTML, CSS and Babel JavaScript
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Experiance with front-end JavaScript frameworks like React
                    and Databases like Firestore
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    UI Libraries like SASS, Tailwind CSS, Semantic UI, Material
                    UI, Animate.style
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                C
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Numerical Analysis of Problems
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Data Structures and Algorithms
                  </span>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <span
            className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__fast}`}
          >
            General Skills
          </span>
          <ol>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                Content Development and Management
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Experiance in using Content Management Systems like Wix,
                    WordPress
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Softwares like Grammarly, Notion, QuillBot, ChatGpt
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Efficient in written and spoken English
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                Design
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Making social media posts, presentations, etc in Canva
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Doing 2D orthographic and isometric drawings of machines in
                    AutoCAD
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Making social media posts, website UI desin in Figma
                  </span>
                </li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <span
            className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__fast}`}
          >
            Soft Skills
          </span>
          <ol>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                Project Management
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Methodologies such as Agile (Scrum) and Kanban
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Software like Jira, Notion, Trello, Microsoft Project
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Research and Analysis of Market, Client and Competitors
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Team Management and ability to work in a team
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <span
                className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slow}`}
              >
                Communication
              </span>
              <ol>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Ability to build and maintain positive relationships with
                    colleagues, clients, and customers
                  </span>
                </li>
                <li>
                  <span
                    className={`${styles.animate__animated} ${styles.animate__backInRight} ${styles.animate__slower}`}
                  >
                    Proficiency in writing reports, emails, letters
                  </span>
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </section>
  );
}

export default Skills;
