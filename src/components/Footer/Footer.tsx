
import { Link } from "react-router-dom";
import { footerData } from "../../content";
import styles from "./Footer.module.scss";
import LazyLoad from "react-lazy-load";
import { footerImg, logo } from "../../assets";
import CustomButton from "../CustomButton/CustomButton";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <LazyLoad className={styles.logoWrapper}>
            <img src={logo} />
          </LazyLoad>
          <div className={styles.buttonWrapper}>
            <CustomButton title="Contact Us" variant="secondary" size="medium" />
          </div>
        </div>

        <div className={styles.contentContainer}>

          <div className={styles.content}>
            <h2>Contact Us</h2>
            <p>WhatsApp<span>: +(1) 234 237-2323</span></p>
            <p>Email<span>: hello@wattsuptrk.com</span></p>
            <p>Address<span>: Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345</span></p>
          </div>

        </div>

        <div className={styles.contentContainer}>
          {footerData.map((data) => (
            <div className={styles.content}>
              <h2>{data.heading}</h2>
              {data.links.map((link) => (
                <Link to={link.path}>{link.name}</Link>
              ))}
            </div>
          ))}
        </div>

        <LazyLoad>
          <img className={styles.footerImg} src={footerImg} />
        </LazyLoad>
      </div>

      <div className={styles.bottom}>

        <p>All rights reserved</p>
        <p>Copyright 2024 By <span>Wattsuptrk</span></p>
      </div>
    </>
  );
};

export default Footer;
