import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SchoolIcon, StartIcon, WorkIcon } from "../Icons";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#1f163e",
                    color: "#fff",
                    marginLeft: "10px",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2023 - present"
                  iconStyle={{ background: "#1f163e", color: "#fff" }}
                  icon={WorkIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    National Software Engineering Fellow (GDC intern)
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    EGOVERNMENT FOUNDATION & PUPILFIRST PRIVATE LIMITED
                  </h4>
                  <p>
                    Deputed to eGovernment foundation to develop Tele-ICU
                    tooling for 10bedICU project.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    color: "#000",
                    marginRight: "10px",
                  }}
                  date="2020 - 2024"
                  iconStyle={{ background: "#1f163e", color: "#fff" }}
                  icon={SchoolIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachelor of Technology
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Information Technology
                  </h4>
                  <p>Vardhaman college of Engineering, Hyderabad</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    color: "#000",
                    marginLeft: "10px",
                  }}
                  date="2018 - 2020"
                  iconStyle={{ background: "#1f163e", color: "#fff" }}
                  icon={SchoolIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    Board of Intermediate
                  </h3>
                  <p>Narayana IIT academy</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    color: "#000",
                    marginRight: "10px",
                  }}
                  date="2018 "
                  iconStyle={{ background: "#1f163e", color: "#fff" }}
                  icon={SchoolIcon}
                >
                  <h3 className="vertical-timeline-element-title">
                    Board of Secondary Education,
                  </h3>
                  <p>Sacred Heart High School</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  iconStyle={{ background: "#1f163e", color: "#fff" }}
                  icon={StartIcon}
                />
              </VerticalTimeline>
            </ScrollAnimation>
            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
