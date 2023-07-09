import classes from "./Contact.module.css";
import { postWithCredentials } from "../data/postWithCredentials";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const SubmitComment = async () => {
    var validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailValue.trim() == "" || message.trim() == "" || name.trim() == "") {
      setError("Fill the email and name and message..");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    if (emailValue.match(validEmail)) {
      setError("");
    } else {
      setTimeout(() => {
        setError("");
      }, 2000);
      setError("Fill the correct email..");
      return;
    }
    setError("");

    // const response = await postWithCredentials(
    //   `${import.meta.env.VITE_REACT_BACKEND_URL}/comment`,
    //   { name, emailValue, message }
    // );
    // const newGroupId = await response.json();
    const emailSubject = encodeURIComponent("Contact Form Submission");
    const emailBody = encodeURIComponent(
      `Name: ${name}%0D%0AEmail: ${emailValue}%0D%0AMessage: ${message}`
    );
    const mailtoUrl = `mailto:shivam6862mau@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.open(mailtoUrl);
    setEmailValue("");
    setName("");
    setMessage("");
  };

  return (
    <div className={classes.contact} id="contact">
      <div className={classes.container_fluid}>
        <div className={classes.rowall}>
          <div className={classes.col_1}>
            <div className={`${classes.items_wrapper} ${classes.row}`}>
              <div className={`${classes.floating_item} ${classes.first_item}`}>
                <div href="#" className={classes.text_light}>
                  <i
                    className={classes.link}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/shivam-kumar-14701b249/"
                      )
                    }
                  >
                    Connect by LinkedIn
                  </i>
                </div>
              </div>
              <div
                className={`${classes.floating_item} ${classes.second_item}`}
              >
                <div href="#" className={classes.text_light}>
                  <i
                    className={classes.link}
                    onClick={() =>
                      window.open("https://www.instagram.com/shivam_kr_634/")
                    }
                  >
                    Connect by Instagram
                  </i>
                </div>
              </div>
              <div className={`${classes.floating_item} ${classes.third_item}`}>
                <div className={classes.text_light}>
                  <i
                    className={classes.link}
                    onClick={() => window.open("https://github.com/shivam6862")}
                  >
                    Github account
                  </i>
                </div>
              </div>
              <div
                className={`${classes.floating_item} ${classes.fourth_item}`}
              >
                <div className={classes.text_light}>
                  <i
                    className={classes.link}
                    onClick={() =>
                      window.open("https://leetcode.com/1_shivam/")
                    }
                  >
                    Leetcode account
                  </i>
                </div>
              </div>
              <div className={`${classes.floating_item} ${classes.fifth_item}`}>
                <div className={classes.text_light}>
                  <i
                    className={classes.link}
                    onClick={() => window.open("https://facebook.com/")}
                  >
                    Connect by Facebook
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.col_2}>
            <h1
              className={`${classes.text_light_heading} ${classes.part_2_text_light}`}
            >
              Stay Connected
            </h1>
            <div className={`${classes.contact_form}`}>
              <div className={classes.form_group}>
                {error ? (
                  <div>
                    <p className={classes.error_message}>{error}</p>
                  </div>
                ) : null}
                <input
                  type="text"
                  className={classes.form_control}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  className={classes.form_control}
                  placeholder="Email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                ></input>
                <textarea
                  className={classes.form_control}
                  placeholder="Message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <input
                  type="submit"
                  className={`${classes.form_control} ${classes.but_red}`}
                  onClick={SubmitComment}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
