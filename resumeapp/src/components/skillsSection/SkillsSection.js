import './skillsSection.css';
import skillsIcon from './skills_char.png';

const skillsSection = () => (
    <div className={`container-fluid bg-light`}>
        <section className={`container-sm p-3 mx-auto`}>
            <div className={`d-flex justify-content-between`}>
                <h3 className={`display-5`}>Skills</h3>
                <img src={skillsIcon} alt={`skills icon`} />
            </div>
            <div className={`container d-flex flex-wrap`} id={`SkillGroup`}>
                <section className={`container`}>
                    <h5>Programming Languages</h5>
                    <ul className={`container d-flex flex-column`}>
                        <li>Java
                            <div className={`progress`}>
                                <div className={`progress-bar bg-primary progress-bar-striped progress-bar-animated`}
                                     style={{width: "80%"}}></div>
                            </div>
                        </li>
                        <li>C#
                            <div className={`progress`}>
                                <div className={`progress-bar bg-primary progress-bar-striped progress-bar-animated`}
                                     style={{width: "70%"}}></div>
                            </div>
                        </li>
                        <li>JavaScript
                            <div className={`progress`}>
                                <div className={`progress-bar bg-primary progress-bar-striped progress-bar-animated`}
                                     style={{width: "65%"}}></div>
                            </div>
                        </li>
                        <li>SQL
                            <div className={`progress`}>
                                <div className={`progress-bar bg-primary progress-bar-striped progress-bar-animated`}
                                     style={{width: "80%"}}></div>
                            </div>
                        </li>
                        <li>Bash
                            <div className={`progress`}>
                                <div className={`progress-bar bg-primary progress-bar-striped progress-bar-animated`}
                                     style={{width: "55%"}}></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className={`container`}>
                    <h5>Frameworks & Tools</h5>
                    <ul className={`container d-flex flex-column`}>
                        <li>Spring Boot
                            <div className={`progress`}>
                                <div className={`progress-bar bg-success progress-bar-striped progress-bar-animated`}
                                     style={{width: "80%"}}></div>
                            </div>
                        </li>
                        <li>Junit
                            <div className={`progress`}>
                                <div className={`progress-bar bg-success progress-bar-striped progress-bar-animated`}
                                     style={{width: "70%"}}></div>
                            </div>
                        </li>
                        <li>Mockito
                            <div className={`progress`}>
                                <div className={`progress-bar bg-success progress-bar-striped progress-bar-animated`}
                                     style={{width: "75%"}}></div>
                            </div>
                        </li>
                        <li>Cucumber
                            <div className={`progress`}>
                                <div className={`progress-bar bg-success progress-bar-striped progress-bar-animated`}
                                     style={{width: "60%"}}></div>
                            </div>
                        </li>
                        <li>ASP.NET
                            <div className={`progress`}>
                                <div className={`progress-bar bg-success progress-bar-striped progress-bar-animated`}
                                     style={{width: "50%"}}></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className={`container`}>
                    <h5>Cloud Service & CI/CD</h5>
                    <ul className={`container d-flex flex-column`}>
                        <li>Azure
                            <div className={`progress`}>
                                <div className={`progress-bar bg-info progress-bar-striped progress-bar-animated`}
                                     style={{width: "80%"}}></div>
                            </div>
                        </li>
                        <li>AWS
                            <div className={`progress`}>
                                <div className={`progress-bar bg-info progress-bar-striped progress-bar-animated`}
                                     style={{width: "65%"}}></div>
                            </div>
                        </li>
                        <li>Github
                            <div className={`progress`}>
                                <div className={`progress-bar bg-info progress-bar-striped progress-bar-animated`}
                                     style={{width: "75%"}}></div>
                            </div>
                        </li>
                        <li>Bitbucket
                            <div className={`progress`}>
                                <div className={`progress-bar bg-info progress-bar-striped progress-bar-animated`}
                                     style={{width: "65%"}}></div>
                            </div>
                        </li>
                        <li>Docker
                            <div className={`progress`}>
                                <div className={`progress-bar bg-info progress-bar-striped progress-bar-animated`}
                                     style={{width: "70%"}}></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className={`container`}>
                    <h5>Data & Analytics</h5>
                    <ul className={`container d-flex flex-column`}>
                        <li>PostgreSQL
                            <div className={`progress`}>
                                <div className={`progress-bar bg-danger progress-bar-striped progress-bar-animated`}
                                     style={{width: "80%"}}></div>
                            </div>
                        </li>
                        <li>Teradata
                            <div className={`progress`}>
                                <div className={`progress-bar bg-danger progress-bar-striped progress-bar-animated`}
                                     style={{width: "75%"}}></div>
                            </div>
                        </li>
                        <li>Informatica
                            <div className={`progress`}>
                                <div className={`progress-bar bg-danger progress-bar-striped progress-bar-animated`}
                                     style={{width: "65%"}}></div>
                            </div>
                        </li>
                        <li>Cassandra
                            <div className={`progress`}>
                                <div className={`progress-bar bg-danger progress-bar-striped progress-bar-animated`}
                                     style={{width: "55%"}}></div>
                            </div>
                        </li>
                        <li>Tableau
                            <div className={`progress`}>
                                <div className={`progress-bar bg-danger progress-bar-striped progress-bar-animated`}
                                     style={{width: "50%"}}></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className={`container`}>
                    <h5>SDLC</h5>
                    <ul className={`container d-flex flex-column`}>
                        <li>Agile/Scrum
                            <div className={`progress`}>
                                <div className={`progress-bar bg-secondary progress-bar-striped progress-bar-animated`}
                                     style={{width: "85%"}}></div>
                            </div>
                        </li>
                        <li>SQA Documentation
                            <div className={`progress`}>
                                <div className={`progress-bar bg-secondary progress-bar-striped progress-bar-animated`}
                                     style={{width: "75%"}}></div>
                            </div>
                        </li>
                        <li>Jira
                            <div className={`progress`}>
                                <div className={`progress-bar bg-secondary progress-bar-striped progress-bar-animated`}
                                     style={{width: "80%"}}></div>
                            </div>
                        </li>
                        <li>Change Management
                            <div className={`progress`}>
                                <div className={`progress-bar bg-secondary progress-bar-striped progress-bar-animated`}
                                     style={{width: "55%"}}></div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className={`container`}>
                    <h5>IT Skills</h5>
                    <ul className={`container d-flex flex-column`}>
                        <li>PC Repair
                            <div className={`progress`}>
                                <div className={`progress-bar bg-warning progress-bar-striped progress-bar-animated`}
                                     style={{width: "85%"}}></div>
                            </div>
                        </li>
                        <li>Helpdesk
                            <div className={`progress`}>
                                <div className={`progress-bar bg-warning progress-bar-striped progress-bar-animated`}
                                     style={{width: "80%"}}></div>
                            </div>
                        </li>
                        <li>Networking
                            <div className={`progress`}>
                                <div className={`progress-bar bg-warning progress-bar-striped progress-bar-animated`}
                                     style={{width: "70%"}}></div>
                            </div>
                        </li>
                        <li>Imaging
                            <div className={`progress`}>
                                <div className={`progress-bar bg-warning progress-bar-striped progress-bar-animated`}
                                     style={{width: "75%"}}></div>
                            </div>
                        </li>
                        <li>Active Directory
                            <div className={`progress`}>
                                <div className={`progress-bar bg-warning progress-bar-striped progress-bar-animated`}
                                     style={{width: "60%"}}></div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </section>
    </div>
)

export default skillsSection;