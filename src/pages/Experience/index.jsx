import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Search, Work } from "@mui/icons-material";
import styles from "./Experience.module.scss";

function Experience() {
  return (
    <div className={styles.experience}>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <div className={styles.item}>
            <h3 className={styles.item__title}>
              Perm Industrial and Commercial College, Perm city
            </h3>
            <h4 className={styles.item__subtitle}>Lawyer</h4>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <div className={styles.item}>
            <h3 className={styles.item__title}>
              First Moscow Law Institute, Moscow city
            </h3>
            <h4 className={styles.item__subtitle}>Lawyer</h4>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <div className={styles.item}>
            <h3 className={styles.item__title}>Municipal employee</h3>
            <h4 className={styles.item__subtitle}>Perm city</h4>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <div className={styles.item}>
            <h3 className={styles.item__title}>
              I study on my own. Completed courses:
            </h3>
            <h4 className={styles.item__subtitle}>
              React for modern web applications.
              <span>Author: M. Nepomniachtchi</span>
            </h4>
            <h4 className={styles.item__subtitle}>
              Fundamental JavaScript.<span>Author: M. Nepomniachtchi</span>
            </h4>
            <h4 className={styles.item__subtitle}>
              Practical JavaScript.<span>Author: A. Lushchenko</span>
            </h4>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Search />}
        >
          <div className={styles.item}>
            <h3 className={styles.item__title}>looking for a job</h3>
            <h4 className={styles.item__subtitle}>
              Saint Petersburg / Perm / Moscow
            </h4>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
