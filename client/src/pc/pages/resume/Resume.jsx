import React, { Component } from "react";
import "./Resume.css";

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume-overlay"></div>
        <div className="resume-wrapper">
          <div>
            <div>
              <h1>Ke Zhao</h1>
              <p className="text-sm">
                📞 613-286-4043 | 📧 zhao0287@algonquinlive.com
              </p>
              <p className="text-sm mt-1">
                <a
                  href="https://www.linkedin.com/in/ke-zhao-657955321/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
                <a
                  href="https://github.com/Jack199407"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">👤 Profile</h2>
              <p>
                Experienced Java developer with 4+ years of backend experience
                in financial systems. Skilled in system design, database design,
                and utilizing various design patterns.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-2">
                🛠️ Skills & Qualifications
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Java, MySQL, data structures, computer principles, and network
                  protocols
                </li>
                <li>Spring Boot, Spring Cloud, Eureka, microservices</li>
                <li>High concurrency programming, multithreading</li>
                <li>
                  HTML, CSS, JavaScript, React, full-stack development
                  experience
                </li>
                <li>Fast-paced self-learning and careful thinking</li>
                <li>Strong communication and collaboration</li>
                <li>Calm problem-solving under pressure</li>
                <li>Proficient in Microsoft Office Suite</li>
                <li>Strong time management and task prioritization</li>
              </ul>
            </div>

            <div>
              <h2>🎓 Education</h2>
              <ul>
                <li>
                  <strong>Computer Program/Diploma</strong>, Algonquin College,
                  Ottawa, ON (2024-05 – Present)
                </li>
                <li>
                  <strong>Geological Engineering/Master</strong>, China
                  University of Petroleum-Beijing (2017-09 – 2020-06)
                </li>
                <li>
                  <strong>
                    Bachelor in Exploration Technology and Engineering
                  </strong>
                  , China University of Petroleum-East China (2013-09 – 2017-06)
                </li>
              </ul>
            </div>

            <div>
              <h2>💼 Work Experience</h2>
              <h3>
                Senior Java Engineer – Gaotu Techedu, Beijing (2020-07 –
                2024-04)
              </h3>
              <ul>
                <li>
                  Optimized financial service code with design patterns to
                  improve system robustness and scalability
                </li>
                <li>
                  Automated revenue settlement using XJob framework, saving 75%
                  labor costs
                </li>
                <li>
                  Developed banking supervision system under double reduction
                  policy
                </li>
                <li>
                  Led 2 junior developers, ensuring no project delays or
                  production issues
                </li>
                <li>
                  Built teacher performance calculation system to automate
                  monthly salary computation
                </li>
              </ul>
            </div>

            <div>
              <h2>🏆 Awards</h2>
              <ul>
                <li>
                  Special salary increase for outstanding performance (2021)
                </li>
                <li>Selected as excellent R&D employee (2022)</li>
              </ul>
            </div>

            <div>
              <h2>🏀 Activities</h2>
              <p>
                Captain of the company basketball team. Organized training and
                led the team to third place among 16 teams in a Software Park
                tournament.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
