import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navigate.module.css";

const Navigate = ({ previous, next }) => {
    const navigateTab = (char) => {
        localStorage.setItem("TAB", char);
    };
    return (
      <section className={styles.bottom} title='NAVIGATE THROUGH TABS'>
        <Link
          to={`/${previous!="HOME"?previous.toLowerCase():""}`}
          onClick={() => navigateTab(previous)}
        >
          <button
            type="button"
            className="button"
            title={`Move to ${previous} Tab`}
          >
            &lt; PREVIOUS
          </button>
        </Link>
        <Link
          to={`/${next.toLowerCase()}`}
          onClick={() => navigateTab(next)}
        >
          <button
            type="button"
            className="button"
            title={`Move to ${next} Tab`}
          >
            NEXT &gt;
          </button>
        </Link>
      </section>
    );
}

Navigate.propTypes = {
  previous: PropTypes.string,
  next: PropTypes.string,
};

export default Navigate;
