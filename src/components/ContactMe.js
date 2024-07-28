import styles from "./ContactMe.module.css";
import SocialHandle from "./SocialHandle";

export default function ContactMe() {
  return (
    <div id="contact" className={styles.contactMe_box}>
      <h1>
        Contact<span style={{ color: "#88ce52" }}>.</span>
      </h1>
      <h4>Feel Free to Contact </h4>
      <div className={styles.contactMe_info}>
        <h4>Email Me 🚀</h4>
        <form
          target="_blank"
          action="https://formsubmit.co/4992d1651ec43cbd82f14e2a49c2b42e"
          method="POST"
        >
          <div className={styles.formBox}>
            <input
              type="text"
              name="name"
              className={styles.inputBox}
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              className={styles.inputBox}
              placeholder="Your Email Address"
              required
            />
            <input
              type="text"
              name="_subject"
              className={styles.inputBox}
              placeholder="Subject"
              required
            ></input>
            <textarea
              placeholder="Message"
              className={styles.inputBox}
              name="message"
              rows="7"
              required
            ></textarea>

            <button type="submit" className="btn">
              Send
            </button>
          </div>
        </form>
      </div>
      <SocialHandle />
    </div>
  );
}
