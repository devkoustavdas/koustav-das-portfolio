import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Heading.module.css";
import { getUrl } from "../../utils";

const Heading = ({ title }) => {
  const [audioName, setAudioName] = useState("");
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audio = useRef(new Audio());

  useEffect(() => {
    if (title.toUpperCase() == "ACTIVITIES") {
      setAudioName("activities-cv.m4a");
    }
    audio.current.src = getUrl(audioName);
  }, [title, audioName]);

  const toggleAudio = () => {
    const audioIcon = document.getElementById("describe");

    if (isAudioPlaying) {
      audio.current.pause();
      audioIcon.style.color = "var(--colour-primary)";
    } else {
      audio.current.play();
      audioIcon.style.color = "var(--colour-secondary)";
    }
    setIsAudioPlaying(!isAudioPlaying);

  };

  return (
    <header title={`Koustav Das - ${title}`}>
      <div>
        <hr
          style={{
            position: "relative",
            right: "-9ch",
            height: "3.6px",
          }}
        />
        <h1 className={styles.cvPageTitle}>{title}.</h1>
        <button
          type="button"
          className={styles.titleSpeaker}
          onClick={toggleAudio}
          id="describe"
          title={`I have described my ${title} in this audio. Click to listen to it.`}
          aria-label={`Koustav Das - ${title}`}
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
        <hr />
      </div>
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
