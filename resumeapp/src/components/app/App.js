import './App.css';

const App = () => (
    <div>
        {/*Header with profile image and name*/}
        <header className="container-fluid d-flex justify-content-between bg-dark text-light p-0">
            <section className="container" id="HeadshotTitle">
                <img src="%PUBLIC_URL%/spain_crop.jpg" alt="Brian Fuller" loading="eager"
                     className="container" id="headshot" style={{maxHeight: "696px", maxWidth: "696px"}}/>
                <section className="container-fluid p-0" id="nameTitle">
                    <h2 className="m-0">Brian Fuller</h2>
                    <h3 className="m-0">Software Developer / IT Professional</h3>
                </section>
            </section>
            <section className="container" id="ProfessionalSummary">
                <blockquote className="container lead" id="SummaryText">
                    An experienced IT professional with a background in software development, IT support, and data analytics.
                    Skilled in programming, cloud technologies, networking, and hands-on PC repair, delivering client-focused
                    solutions and leading teams to success. Proven ability to optimize processes, manage data pipelines, and
                    troubleshoot complex technical issues. Recognized for driving operational efficiency and maintaining
                    detailed
                    documentation in high-pressure environments.
                </blockquote>
            </section>
        </header>

        {/*Skills and progress bar area*/}
        <div className="container-fluid bg-light">
            <section className="container-sm p-3 mx-auto">
                <div className="d-flex justify-content-between">
                    <h3 className="display-5">Skills</h3>
                    <img src="%PUBLIC_URL%/skills_char.png" alt="skills icon" width="" height=""/>
                </div>
                <div className="container d-flex flex-wrap" id="SkillGroup">
                    <section className="container">
                        <h5>Programming Languages</h5>
                        <ul className="container d-flex flex-column">
                            <li>Java
                                <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                                         style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>C#
                                <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                                         style={{width: "70%"}}></div>
                                </div>
                            </li>
                            <li>JavaScript
                                <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                                         style={{width: "65%"}}></div>
                                </div>
                            </li>
                            <li>SQL
                                <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                                         style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>Bash
                                <div className="progress">
                                    <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated"
                                         style={{width: "55%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="container">
                        <h5>Frameworks & Tools</h5>
                        <ul className="container d-flex flex-column">
                            <li>Spring Boot
                                <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                         style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>Junit
                                <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                         style={{width: "70%"}}></div>
                                </div>
                            </li>
                            <li>Mockito
                                <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                         style={{width: "75%"}}></div>
                                </div>
                            </li>
                            <li>Cucumber
                                <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                         style={{width: "60%"}}></div>
                                </div>
                            </li>
                            <li>ASP.NET
                                <div className="progress">
                                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                         style={{width: "50%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="container">
                        <h5>Cloud Service & CI/CD</h5>
                        <ul className="container d-flex flex-column">
                            <li>Azure
                                <div className="progress">
                                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                         style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>AWS
                                <div className="progress">
                                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                         style={{width: "65%"}}></div>
                                </div>
                            </li>
                            <li>Github
                                <div className="progress">
                                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                         style={{width: "75%"}}></div>
                                </div>
                            </li>
                            <li>Bitbucket
                                <div className="progress">
                                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                         style={{width: "65%"}}></div>
                                </div>
                            </li>
                            <li>Docker
                                <div className="progress">
                                    <div className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                                         style={{width: "70%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="container">
                        <h5>Data & Analytics</h5>
                        <ul className="container d-flex flex-column">
                            <li>PostgreSQL
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                         style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>Teradata
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                         style={{width: "75%"}}></div>
                                </div>
                            </li>
                            <li>Informatica
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                         style={{width: "65%"}}></div>
                                </div>
                            </li>
                            <li>Cassandra
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                         style={{width: "55%"}}></div>
                                </div>
                            </li>
                            <li>Tableau
                                <div className="progress">
                                    <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                         style={{width: "50%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="container">
                        <h5>SDLC</h5>
                        <ul className="container d-flex flex-column">
                            <li>Agile/Scrum
                                <div className="progress">
                                    <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                                         style={{width: "85%"}}></div>
                                </div>
                            </li>
                            <li>SQA Documentation
                                <div className="progress">
                                    <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                                         style={{width: "75%"}}></div>
                                </div>
                            </li>
                            <li>Jira
                                <div className="progress">
                                    <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                                         style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>Change Management
                                <div className="progress">
                                    <div className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                                         style={{width: "55%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="container">
                        <h5>IT Skills</h5>
                        <ul className="container d-flex flex-column">
                            <li>PC Repair
                                <div className="progress">
                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                         style={{width: "85%"}}></div>
                                </div>
                            </li>
                            <li>Helpdesk
                                <div className="progress">
                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                         style={{width: "80%"}}></div>
                                </div>
                            </li>
                            <li>Networking
                                <div className="progress">
                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                         style={{width: "70%"}}></div>
                                </div>
                            </li>
                            <li>Imaging
                                <div className="progress">
                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                         style={{width: "75%"}}></div>
                                </div>
                            </li>
                            <li>Active Directory
                                <div className="progress">
                                    <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                         style={{width: "60%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </div>

        {/*Education & Certifications section*/}
        <div className="container-fluid bg-dark text-light">
            <section className="container-sm p-3 mx-auto">
                <div className="d-flex justify-content-between align-content-center">
                    <h3 className="display-5">Education & Certifications</h3>
                    <img src="%PUBLIC_URL%/education_char_white.png" alt="skills icon" width="" height=""/>
                </div>
                <div>
                    <address className="pb-4" id="College">
                        <b>Bachelor’s Degree, Computer Science</b><br/>
                        <i>Kean University, Union, New Jersey United States</i>
                    </address>
                </div>
                <span className="container d-flex flex-wrap justify-content-around" id="CertIcons">
            <img src="%PUBLIC_URL%/microsoft-certified-azure-fundamentals.png"
                 alt="Microsoft Certified Azure Fundamentals Badge"/>
            <img src="%PUBLIC_URL%/microsoft-certified-associate-badge.svg"
                 alt="Microsoft Certified Azure Associate Badge"/>
            <img src="%PUBLIC_URL%/TD Vantage Cert Associate.png"
                 alt="Teradata Vantage Associate Vertification"/>
        </span>
            </section>
        </div>

        {/*Work Experience section*/}
        <div className="container-fluid bg-light">
            <section className="container-sm d-grid p-3 mx-auto">
                <div className="d-flex justify-content-between align-content-center">
                    <h3 className="display-5">Work Experience</h3>
                    <img src="%PUBLIC_URL%/briefcase_char.png" alt="skills icon" width="" height=""/>
                </div>
                {/*Free*/}
                <div className="my-1">
                    <a href={"#freel"} className="btn d-flex justify-content-between btn-dark btn-block" data-bs-toggle="collapse">
                        <div className="ms-2 text-start">
                            01/2023 - Present
                        </div>
                        <div className="me-2 text-end">
                            IT Technician/Consultant
                        </div>
                    </a>
                    <div id="freel" className="collapse">
                        <address className="mt-1 mb-1 h5 text-center">
                            Freelance <br/>
                            East Newark, New Jersey, United States
                        </address>
                        <ul className="list-group list-group-flush small">
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Successfully resolved over 100 client issues, drastically reducing system downtime
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Built and repaired desktop and laptop computers, diagnosing complex hardware failures and
                                performing upgrades.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Analyzed systems for malware and file corruption, facilitating file recovery and backup.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Boosted system performance for multiple clients through efficient hardware repairs and
                                optimizations.
                            </li>
                        </ul>
                    </div>
                </div>

                {/*JPMC*/}
                <div className="my-1">
                    <a href={"#jpmc"} className="btn d-flex justify-content-between btn-dark btn-block" data-bs-toggle="collapse">
                        <div className="ms-2 text-start">
                            08/2022 - 12/2022
                        </div>
                        <div className="me-2 text-end">
                            Java Developer
                        </div>
                    </a>
                    <div id="jpmc" className="collapse">
                        <address className="mt-1 mb-1 h5 text-center">
                            <abbr title="JPMorgan Chase">JPMC</abbr> (Through Pinnacle Group) <br/>
                            Jersey City, New Jersey, United States
                        </address>
                        <ul className="list-group list-group-flush small">
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Improved application stability by increasing regression test coverage by 24%, enhancing overall
                                performance.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Expanded test coverage by adding regression testing using Junit, Mockito, and Cucumber.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Programmed in Java 11 with Spring framework and contributed to code base of live finance
                                applications
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Gained hands-on experience with Java Reactive programming and Cassandra databases.
                            </li>
                        </ul>
                    </div>
                </div>

                {/*JnJ*/}
                <div className="my-1">
                    <a href={"#jnj"} className="btn d-flex justify-content-between btn-dark btn-block" data-bs-toggle="collapse">
                        <div className="ms-2 text-start">
                            07/2017 - 01/2022
                        </div>
                        <div className="me-2 text-end">
                            Software Developer
                        </div>
                    </a>
                    <div id="jnj" className="collapse">
                        <address className="mt-1 mb-1 h5 text-center">
                            Johnson & Johnson (Through <abbr title="Tata Consultancy Services">TCS</abbr>) <br/>
                            Somerset, New Jersey, United States
                        </address>
                        <ul className="list-group list-group-flush small">
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Spearheaded a team to ingest over 600 tables during COVID-19 shutdown, earning company and
                                client accolades.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Led the creation of pipelines integrating Kafka, SAP, and Teradata, which optimized data flow
                                and processing.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Assisted in creating a web application using spring MVC, Hibernate
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Worked with core Java 8, SQL, PL/SQL, and implemented infrastructure for Business Intelligence
                                (BI) solutions.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Used ETL tools like Talend and BI tools like Tableau to gather and analyze data.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Gained proficiency in AWS technologies (S3, Redshift, EC2) and developed bash scripts for data
                                ingestion.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Created and maintained 100+ Software Quality Assurance (SQA) documents across various projects
                            </li>
                        </ul>
                    </div>
                </div>

                {/*Quest*/}
                <div className="my-1">
                    <a href={"#quest"} className="btn d-flex justify-content-between btn-dark btn-block" data-bs-toggle="collapse">
                        <div className="ms-2 text-start">
                            01/2017 - 06/2017
                        </div>
                        <div className="me-2 text-end">
                            Implementation Technician
                        </div>
                    </a>
                    <div id="quest" className="collapse">
                        <address className="mt-1 mb-1 h5 text-center">
                            Quest Diagnostics<br/>
                            Teterboro, New Jersey, United States
                        </address>
                        <ul className="list-group list-group-flush small">
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Provided tier 1-2 support to over 100 Quest Labs across NJ, NY, and PA, managing incidents
                                within SLA.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Recognized with company and client accolades for exceptional contributions to multiple
                                high-priority projects.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Successfully managed 100+ SQA documents, ensuring compliance and efficiency across development
                                teams
                            </li>
                        </ul>
                    </div>
                </div>

                {/*kean*/}
                <div className="my-1">
                    <a href={"#kean_tech"} className="btn d-flex justify-content-between btn-dark btn-block"
                       data-bs-toggle="collapse">
                        <div className="ms-2 text-start">
                            05/2013 - 01/2017
                        </div>
                        <div className="me-2 text-end">
                            Computer Technician
                        </div>
                    </a>
                    <div id="kean_tech" className="collapse">
                        <address className="mt-1 mb-1 h5 text-center">
                            Kean University<br/>
                            Union, New Jersey, United States
                        </address>
                        <ul className="list-group list-group-flush small">
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Delivered tier 1-2 support for faculty, staff, and students, troubleshooting network, hardware,
                                and software issues.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Supported network infrastructure upgrades, assisting with the installation and maintenance of
                                networking devices across two new campus buildings.
                            </li>
                            <li className="list-group-item bg-light list-group-item-action pb-0">
                                Utilized Track-It! ticketing system to efficiently manage and resolve hundreds of support
                                requests within SLA.
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>

        {/*Highlights*/}
        <div className="container-fluid bg-dark text-light">
            <section className="container-sm p-3 mx-auto">
                <div className="d-flex justify-content-between align-content-center">
                    <h3 className="display-5">Spotlight</h3>
                    <img src="%PUBLIC_URL%/certificate_char_white.png" alt="skills icon"/>
                </div>
                <div className="container">
                    <ul className="container my-2" id="Highlights">
                        <li className="p-1 g-dark text-white">
                            Led a team to design and implement a critical data ingestion pipeline, reducing data processing time
                            from daily to near real-time.
                        </li>
                        <li className="p-1 bg-dark text-white">
                            Recognized with company and client accolades for exceptional contributions to multiple high-priority
                            projects.
                        </li>
                        <li className="p-1 bg-dark text-white">
                            Successfully managed 100+ SQA documents, ensuring compliance and efficiency across development
                            teams.
                        </li>
                    </ul>
                    <p className="container my-3" id="SummaryTextSm"><i>
                        An experienced IT professional with a background in software development, IT support, and data analytics.
                        Skilled in programming, cloud technologies, networking, and hands-on PC repair, delivering
                        client-focused solutions and leading teams to success. Proven ability to optimize processes, manage data
                        pipelines, and troubleshoot complex technical issues. Recognized for driving operational efficiency and
                        maintaining detailed documentation in high-pressure environments.
                    </i></p>
                </div>
            </section>
        </div>

        {/*Contact info and footer*/}
        <footer>
            <div className="container-fluid bg-light">
                <section className="container-sm p-3 mx-auto">
                    <div className="d-flex justify-content-between align-content-center">
                        <h3 className="display-5">Contact Info</h3>
                        <img src="%PUBLIC_URL%/contact_char.png" alt="skills icon" width="" height=""/>
                    </div>
                    <div className="d-flex justify-content-around">
                        <address className="pt-2">
                            <div>
                                <img src="%PUBLIC_URL%/number_char.png" alt="Phone Icon" width={"30px"} height={"auto"}/>
                                +1 973 943 5694
                            </div>
                            <div>
                                <img src="%PUBLIC_URL%/address_char.png" alt="House Icon" width={"30px"} height={"auto"}/>
                                East Newark, New Jersey
                            </div>
                            <div>
                                <img src="%PUBLIC_URL%/email_char.png" alt="Email Icon" width={"30px"} height={"auto"}/>
                                docterpbnj1@gmail.com
                            </div>
                        </address>
                        <div className="d-flex pt-2 flex-column">
                            <a href="https://github.com/Doctorpbnj" className="mb-2" target="_blank" rel="noreferrer">
                                <img src="%PUBLIC_URL%/github_icon_char.png" alt="github icon" width={"40px"} height={"auto"}/>
                            </a>
                            <a href="https://www.linkedin.com/in/brian-fuller-64229aab" target="_blank" rel="noreferrer">
                                <img src="%PUBLIC_URL%/linkedin_icon_char.png" alt="linkedin icon" width={"40px"} height={"auto"}/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>

    </div>
)


export default App;
