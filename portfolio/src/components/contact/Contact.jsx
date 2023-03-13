import classes from "./Contact.module.css";

const Contact = () => {
  
  return (
    <div className={classes.contact}>
      <div className={classes.container_fluid}>
        <div className={classes.rowall}>
          <div className={classes.col_1}>
            <div className={`${classes.items_wrapper} ${classes.row}`}>
              <div className={`${classes.floating_item} ${classes.first_item}`}>
                <div href="#" className={classes.text_light}>
                  <i className={classes.link}>Connect by LinkedIn</i>
                </div>
              </div>
              <div
                className={`${classes.floating_item} ${classes.second_item}`}
              >
                <div href="#" className={classes.text_light}>
                  <i className={classes.link}>Connect by Instagram</i>
                </div>
              </div>
              <div className={`${classes.floating_item} ${classes.third_item}`}>
                <div className={classes.text_light}>
                  <i className={classes.link}>Github account</i>
                </div>
              </div>
              <div
                className={`${classes.floating_item} ${classes.fourth_item}`}
              >
                <div className={classes.text_light}>
                  <i className={classes.link}>Leetcode account</i>
                </div>
              </div>
              <div className={`${classes.floating_item} ${classes.fifth_item}`}>
                <div className={classes.text_light}>
                  <i className={classes.link}>Connect by Facebook</i>
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
            <form action="contact-form" className={`${classes.contact_form}`}>
              <div className={classes.form_group}>
                <input
                  type="text"
                  className={classes.form_control}
                  placeholder="Name"
                />
                <input
                  type="email"
                  className={classes.form_control}
                  placeholder="Email"
                ></input>
                <textarea
                  className={classes.form_control}
                  placeholder="Message"
                  rows="4"
                ></textarea>
                <input
                  type="submit"
                  className={`${classes.form_control} ${classes.but_red}`}
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
