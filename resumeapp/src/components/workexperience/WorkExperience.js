import './workExperience.css'
import workIcon from './briefcase_char.png'

const WorkExperience = () => (
    <div className={`container-fluid bg-light`}>
        <section className={`container-sm d-grid p-3 mx-auto`}>
            <div className={`d-flex justify-content-between align-content-center`}>
                <h3 className={`display-5`}>Work Experience</h3>
                <img src={workIcon} alt={`skills icon`}/>
            </div>
            {/*Free*/}
            <div className={`my-1`}>
                <a href={`#freel`} className={`btn d-flex justify-content-between btn-dark btn-block`} data-bs-toggle={`collapse`}>
                    <div className={`ms-2 text-start`}>
                        01/2023 - Present
                    </div>
                    <div className={`me-2 text-end`}>
                        IT Technician/Consultant
                    </div>
                </a>
                <div id={`freel`} className={`collapse`}>
                    <address className={`mt-1 mb-1 h5 text-center`}>
                        Freelance <br/>
                        East Newark, New Jersey, United States
                    </address>
                    <ul className={`list-group list-group-flush small`}>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Successfully resolved over 100 client issues, drastically reducing system downtime
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Built and repaired desktop and laptop computers, diagnosing complex hardware failures and
                            performing upgrades.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Analyzed systems for malware and file corruption, facilitating file recovery and backup.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Boosted system performance for multiple clients through efficient hardware repairs and
                            optimizations.
                        </li>
                    </ul>
                </div>
            </div>

            {/*JPMC*/}
            <div className={`my-1`}>
                <a href={`#jpmc`} className={`btn d-flex justify-content-between btn-dark btn-block`} data-bs-toggle={`collapse`}>
                    <div className={`ms-2 text-start`}>
                        08/2022 - 12/2022
                    </div>
                    <div className={`me-2 text-end`}>
                        Java Developer
                    </div>
                </a>
                <div id={`jpmc`} className={`collapse`}>
                    <address className={`mt-1 mb-1 h5 text-center`}>
                        <abbr title={`JPMorgan Chase`}>JPMC</abbr> (Through Pinnacle Group) <br/>
                        Jersey City, New Jersey, United States
                    </address>
                    <ul className={`list-group list-group-flush small`}>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Improved application stability by increasing regression test coverage by 24%, enhancing overall
                            performance.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Expanded test coverage by adding regression testing using Junit, Mockito, and Cucumber.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Programmed in Java 11 with Spring framework and contributed to code base of live finance
                            applications
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Gained hands-on experience with Java Reactive programming and Cassandra databases.
                        </li>
                    </ul>
                </div>
            </div>

            {/*JnJ*/}
            <div className={`my-1`}>
                <a href={`#jnj`} className={`btn d-flex justify-content-between btn-dark btn-block`} data-bs-toggle={`collapse`}>
                    <div className={`ms-2 text-start`}>
                        07/2017 - 01/2022
                    </div>
                    <div className={`me-2 text-end`}>
                        Software Developer
                    </div>
                </a>
                <div id={`jnj`} className={`collapse`}>
                    <address className={`mt-1 mb-1 h5 text-center`}>
                        Johnson & Johnson (Through <abbr title="Tata Consultancy Services">TCS</abbr>) <br/>
                        Somerset, New Jersey, United States
                    </address>
                    <ul className={`list-group list-group-flush small`}>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Spearheaded a team to ingest over 600 tables during COVID-19 shutdown, earning company and
                            client accolades.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Led the creation of pipelines integrating Kafka, SAP, and Teradata, which optimized data flow
                            and processing.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Assisted in creating a web application using spring MVC, Hibernate
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Worked with core Java 8, SQL, PL/SQL, and implemented infrastructure for Business Intelligence
                            (BI) solutions.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Used ETL tools like Talend and BI tools like Tableau to gather and analyze data.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Gained proficiency in AWS technologies (S3, Redshift, EC2) and developed bash scripts for data
                            ingestion.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Created and maintained 100+ Software Quality Assurance (SQA) documents across various projects
                        </li>
                    </ul>
                </div>
            </div>

            {/*Quest*/}
            <div className={`my-1`}>
                <a href={`#quest`} className={`btn d-flex justify-content-between btn-dark btn-block`} data-bs-toggle={`collapse`}>
                    <div className={`ms-2 text-start`}>
                        01/2017 - 06/2017
                    </div>
                    <div className={`me-2 text-end`}>
                        Implementation Technician
                    </div>
                </a>
                <div id={`quest`} className={`collapse`}>
                    <address className={`mt-1 mb-1 h5 text-center`}>
                        Quest Diagnostics<br/>
                        Teterboro, New Jersey, United States
                    </address>
                    <ul className={`list-group list-group-flush small`}>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Provided tier 1-2 support to over 100 Quest Labs across NJ, NY, and PA, managing incidents
                            within SLA.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Recognized with company and client accolades for exceptional contributions to multiple
                            high-priority projects.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Successfully managed 100+ SQA documents, ensuring compliance and efficiency across development
                            teams
                        </li>
                    </ul>
                </div>
            </div>

            {/*kean*/}
            <div className={`my-1`}>
                <a href={`#kean_tech`} className={`btn d-flex justify-content-between btn-dark btn-block`}
                   data-bs-toggle={`collapse`}>
                    <div className={`ms-2 text-start`}>
                        05/2013 - 01/2017
                    </div>
                    <div className={`me-2 text-end`}>
                        Computer Technician
                    </div>
                </a>
                <div id={`kean_tech`} className={`collapse`}>
                    <address className={`mt-1 mb-1 h5 text-center`}>
                        Kean University<br/>
                        Union, New Jersey, United States
                    </address>
                    <ul className={`list-group list-group-flush small`}>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Delivered tier 1-2 support for faculty, staff, and students, troubleshooting network, hardware,
                            and software issues.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Supported network infrastructure upgrades, assisting with the installation and maintenance of
                            networking devices across two new campus buildings.
                        </li>
                        <li className={`list-group-item bg-light list-group-item-action pb-0`}>
                            Utilized Track-It! ticketing system to efficiently manage and resolve hundreds of support
                            requests within SLA.
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    </div>
)

export default WorkExperience;