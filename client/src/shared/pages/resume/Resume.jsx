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
            <h2>Summary</h2>
            <p>
              Detail-oriented Java developer with 5+ years of experience
              building scalable, secure, and high-availability backend systems
              in the e-commerce domain. Proficient in Java 8+, Spring Boot,
              RESTful APIs, SQL. Hands-on experience in containerization
              (Docker), and Agile SDLC. Strong advocate for automated testing,
              structured documentation, and continuous delivery.
            </p>
          </div>

          <div className="resume-section skills-section">
            <h2>Technical Skills</h2>
            <ul>
              <li>Languages: Java (8+), SQL, JavaScript</li>
              <li>
                Frameworks & Libraries: Spring Boot, Spring Cloud, Spring
                Security, Spring Data JPA, Node.js, Express
              </li>
              <li>Build & CI/CD Tools: Gradle, Maven, Jenkins</li>
              <li>API & Integration: RESTful APIs, OpenFeign, JSON</li>
              <li>Databases: MySQL, basic experience with Oracle</li>
              <li>
                Task Scheduling & Messaging: Xxl-Job (scheduled batch jobs),
                RocketMQ (message queue), basic knowledge of event-driven design
              </li>
              <li>Tools & Platforms: Git, Docker, Postman</li>
              <li>Testing & Debugging: JUnit, Postman for API testing</li>
              <li>
                Development Concepts: Microservices architecture, Service
                discovery(Eureka)
              </li>
              <li>
                Other: Agile development process, CI concepts, System
                traceability and logging
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
                Gaotu(NASDAQ: GOTU)
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
                Automated revenue settlement by using Xxl-Job framework, saving
                75% of labor costs.
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
              <li>
                Collaborated cross-functionally with product managers, QA, and
                analysts in bi-weekly sprints, participated in code reviews and
                defect triage.
              </li>
              <li>
                Participated in code reviews, maintained technical
                documentation, and led release activities across test and
                production environments.
              </li>
              <li>
                Assisted with production issue analysis and root cause
                diagnosis, contributing to continuous improvement of system
                resilience.
              </li>
            </ul>
          </div>
          <div className="resume-section project-section">
            <h2>Projects</h2>
            <p>
              <strong>CMB Capital Supervision System</strong>
            </p>
            <p>
              Spring Boot, MySQL, OpenFeign, Xxl-Job, RESTful APIs —{" "}
              <strong>Sep 2022</strong>
            </p>
            <ul>
              <li>
                Developed financial reporting microservice in response to
                China’s “Double Reduction” regulation, enabling daily automated
                reporting of course-related payment and refund data to China
                Merchants Bank.
              </li>
              <li>
                Integrated data across microservices and implemented nightly
                batch jobs to calculate refundable amounts based on course
                progress.
              </li>
              <li>
                Implemented secure communication and asynchronous callback
                listener to handle API response from the bank in real time.
              </li>
              <li>
                Key Technologies: Spring Boot, RESTful APIs, OpenFeign,
                Scheduled Tasks (Xxl-Job), MySQL, Secure API integration.
              </li>
            </ul>
            <p>
              <strong>Personal Portfolio Website</strong>
            </p>
            <p>
              React, Node.js, Express, HTML, CSS — <strong>March 2025</strong>
            </p>
            <ul>
              <li>
                Independently developed a responsive personal website to
                showcase resume and technical skills, with front-end in React
                and backend in Express.
              </li>
              <li>
                Deployed using modern HTML/CSS layout and GitHub-based CI/CD to
                ensure responsiveness and maintainability.
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
