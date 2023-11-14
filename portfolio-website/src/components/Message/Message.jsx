import React, { useState, useEffect } from "react";
import styles from "./Message.module.css";
import MessageData from "../../data/mssge.data"
import moment from "moment";

import { SocialIcon } from "react-social-icons";
import "react-social-icons/linkedin";
import "react-social-icons/email";
import "react-social-icons/x";

const Message = () => {
  const [day, setDay] = useState(moment().format("LL"));
  const [time, setTime] = useState(moment().format("LTS"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDay(moment().format("LL"));
      setTime(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  var [errorMessage, setErrorMessage] = useState({error: false, msg: ""});
const [reactionValues, setReactionValues] = useState(null);

  const handleReaction = async(code) => {
    try {
      const reactionData = await MessageData.getReactionValues();
      setReactionValues(reactionData);
    } catch (error) {
      console.error("Error fetching reaction values:", error);
    }
    console.log(reactionValues);
  }

  const handleSend = async(e) => {
    e.preventDefault();
    setErrorMessage((prevState) => {
      return { ...prevState, msg: "" };
    });

    const emailValue = email;
    var subjectValue = subject;
    const messageValue = message;
    console.log("Email:", emailValue);
    console.log("Subject:", subjectValue);
    console.log("Message:", messageValue);

    if (messageValue === "" || emailValue === "") {
      setErrorMessage({
        error: true,
        msg: "Message & Email ID is mandatory if you want to send!",
      });
      return;
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailValue.match(emailPattern)) {
      if (subjectValue === "") {
        subjectValue = "NO SUBJECT";
      }

      var timing = [day, time];
      const newMssge = {
        emailValue,
        subjectValue,
        messageValue,
        timing,
      };
      console.log(newMssge);
      try {
        await MessageData.sendMssge(newMssge);
        setErrorMessage({
        error: false,
        msg: "Message Sent Succesfully",
      });
      }
      catch {
        setErrorMessage({
          error: true,
          msg: "err.Message",
        });
      }
      setEmail("");
      setSubject("");
      setMessage("");
    }
    else {  
        setErrorMessage({
        error: true,
        msg: "Invalid Email ID!",
      });
      return;      
    }
  };

  const handleClear = async(e) => {
    e.preventDefault();
    setEmail("");
    setSubject("");
    setMessage("");
    document.getElementById("mssge-Email").textContent = "";
    document.getElementById("mssge-Subject").textContent = "";
    document.getElementById("mssge-Text").textContent = "";
  }

  return (
    <section className={styles.cvSection}>
      <h2 className={`${styles.cvSecondaryHeading} ${styles.cvJobsHeading}`}>
        Connect With Me.
      </h2>
      <br />
      <h3 className={styles.cvTimelineHeading}>
        <span className={styles.cvTimelineHeadingTitle}>Message on</span>
      </h3>
      <div className="styles.myIcons">
        <SocialIcon
          network="linkedin"
          aria-label="Linkedin Account"
          url="https://www.linkedin.com/in/koustav-das-in/"
          bgColor="var(--colour-secondary)"
          className={styles.linkedinIcon}
          style={{
            boxShadow: "0 5px 4px var(--colour-shadow)",
            borderRadius: "50%",
            marginRight: "15px",
          }}
        />
        <SocialIcon
          network="email"
          aria-label="Email ID"
          url="mailto:itskoustavdas@example.com"
          bgColor="var(--colour-secondary)"
          className={`${styles.emailIcon} ${styles.animate__animated} ${styles.animate__bounce}`}
          style={{
            boxShadow: "0 5px 4px var(--colour-shadow)",
            borderRadius: "50%",
            marginLeft: "15px",
          }}
        />
      </div>

      <center className={styles.centerCircle}>OR</center>
      <h3 className={styles.cvTimelineHeading}>
        <span className={styles.cvTimelineHeadingTitle}>Send a Reaction!</span>
      </h3>
      <br />
      <div className={styles.reaction}>
        <div onClick={() => handleReaction("LOVE")}>❤️</div>
        <div onClick={() => handleReaction("LIKE")}>👍🏻</div>
        <div onClick={() => handleReaction("PARTY")}>🥳</div>
        <div onClick={() => handleReaction("CELEBRATE")}>👏🏻</div>
        <div onClick={() => handleReaction("FUNNY")}>😆</div>
        <div onClick={() => handleReaction("IDEA")}>💡</div>
      </div>
      <br />
      <center className={styles.centerCircle}>OR</center>
      <h3 className={styles.cvTimelineHeading}>
        <span className={styles.cvTimelineHeadingTitle}>Type your Message</span>
      </h3>
      <p className={styles.dateTime}>
        {" "}
        Message on {day} at {time}{" "}
      </p>
      <textarea
        id="mssge-Email"
        className={styles.messageEmail}
        placeholder="Type your email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        id="mssge-Subject"
        className={styles.messageSubject}
        placeholder="Type your message subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        id="mssge-Text"
        className={styles.messageText}
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className={styles.sendButton} onClick={handleSend}>
        Send
      </button>
      <button
        type="submit"
        className={styles.clearButton}
        onClick={handleClear}
      >
        Clear All
      </button>
    </section>
  );
};

export default Message;
