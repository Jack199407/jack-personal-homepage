import React, { Component } from "react";
import EmailSender from "../../components/emailSender/EmailSender";
import "./Resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div className="resume-overlay"></div>
        <div className="resume-wrapper">
          <div className="resume-section profile-section">
            <h1>Ke Zhao</h1>
            <p className="text-sm">613-286-4043 | zhao0287@algonquinlive.com</p>
            <p className="text-sm mt-1">
              <a
                href="https://www.linkedin.com/in/ke-zhao-657955321/"
                target="_blank"
                rel="noreferrer"
                className="web-refer"
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/Jack199407"
                target="_blank"
                rel="noreferrer"
                className="web-refer"
              >
                GitHub
              </a>
            </p>
          </div>

          <div className="resume-section profile-summary-section">
            <h2>Profile</h2>
            <p>
              Experienced Java developer with 4+ years of backend experience
              participating in developing and maintaining financial system.
              Adept at system design, database design, using various design
              pattern.
            </p>
          </div>

          <div className="resume-section skills-section">
            <h2>Skills & Qualifications</h2>
            <h3>Industry-Specific Skills</h3>
            <ul>
              <li>
                Proficient in Java language, MySQL language, data structure,
                computer principle, network protocol and other basic content.
              </li>
              <li>
                Proficient in Spring Boot, Spring Cloud and other frameworks,
                able to use Eureka to build microservice-based project
                architecture.
              </li>
              <li>
                Rich experience in high concurrency programming, good at using
                multithreading to solve massive data scenarios and high
                concurrency scenarios.
              </li>
              <li>
                Proficient in HTML, CSS, JS and other front-end languages, can
                use React and other popular frameworks to build projects,
                familiar with front-end and back-end interaction specifications,
                with C-side development experience.
              </li>
            </ul>
            <h3>Additional Qualifications</h3>
            <ul>
              <li>Fast paced self-learning.</li>
              <li>Careful thinking, good at data calculation business.</li>
              <li>Good at communication and collaboration with colleagues.</li>
              <li>
                Quick thinking and problem solving in a difficult or stressful
                situation, while maintaining a professional and calm demeanor.
              </li>
              <li>
                Experience with Microsoft Office (Word, PowerPoint, Excel,
                Outlook).
              </li>
              <li>
                Strong active listening skills in both group and independent
                settings, with the ability to follow through or follow up with
                requests.
              </li>
              <li>
                Manage time, prioritize tasks, and meet deadlines in an
                efficient manner.
              </li>
              <li>
                Maintain professional and polite relationships with both staff
                and clients, approaching both with empathy and understanding.
              </li>
            </ul>
          </div>

          <div className="resume-section education-section">
            <h2>Education</h2>
            <ul>
              <li>
                <strong>2024-05 – Present </strong> – Computer Program/Diploma,
                <a
                  href="https://www.algonquincollege.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-link"
                >
                  Algonquin College
                </a>
                , Ottawa, Ontario
              </li>
              <li>
                <strong>2017-09 – 2020-06 </strong> – Geological
                Engineering/Master,{" "}
                <a
                  href="https://www.cup.edu.cn/"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-link"
                >
                  China University of Petroleum-Beijing
                </a>
                , Beijing, Beijing, China
              </li>
              <li>
                <strong>2013-09 – 2017-06</strong> - Exploration Technology and
                Engineering/Bachelor,{" "}
                <a
                  href="https://www.upc.edu.cn/"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-link"
                >
                  China University of Petroleum-East China
                </a>
                , Qingdao, Shandong, China
              </li>
            </ul>
          </div>

          <div className="resume-section experience-section">
            <h2>Work Experience</h2>
            <p>
              <strong>Senior Java Engineer</strong> -{" "}
              <a
                href="https://en.wikipedia.org/wiki/Gaotu_Techedu"
                target="_blank"
                rel="noreferrer"
                className="resume-link"
              >
                Gaotu Techedu
              </a>
              , Beijing,China, 2020-07 – 2024-04
            </p>
            <ul>
              <li>
                Optimized financial service codes with strategy, using design
                patterns greatly improve the robustness and scalability of the
                system.
              </li>
              <li>
                Automated revenue settlement by using XJob framework, saving 75%
                of labor costs.
              </li>
              <li>
                Under China's double reduction policy, timely completion of the
                development of banking supervision system to ensure the timely
                return of company funds.
              </li>
              <li>
                Led 2 new co-works to complete daily development tasks, never
                had project delays or online accidents.
              </li>
              <li>
                Responsible for the development of the teacher performance
                calculation function, which automatically calculated the
                teacher's salary every month.
              </li>
            </ul>
          </div>

          <div className="resume-section awards-section">
            <h2>Awards</h2>
            <ul>
              <li>
                Received a special salary increase due to outstanding work
                achievements in 2021.
              </li>
              <li>Selected as excellent employee of R&D department in 2022.</li>
            </ul>
          </div>

          <div className="resume-section activities-section">
            <h2>Activities</h2>
            <p>
              Participated in the basketball game held by the Software Park as
              the captain, organized the training of the team members, and
              finally won the third place among the 16 participating teams.
            </p>
          </div>
        </div>
        <EmailSender />
      </div>
    );
  }
}
