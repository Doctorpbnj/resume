import './highlights.css'
import certIcon from './certificate_char_white.png'

const Highlights = () => (
    <div className={`container-fluid bg-dark text-light`}>
        <section className={`container-sm p-3 mx-auto`}>
            <div className={`d-flex justify-content-between align-content-center`}>
                <h3 className={`display-5`}>Spotlight</h3>
                <img src={certIcon} alt={`skills icon`}/>
            </div>
            <div className={`container`}>
                <ul className={`container my-2`} id={`Highlights`}>
                    <li className={`p-1 g-dark text-white`}>
                        Led a team to design and implement a critical data ingestion pipeline, reducing data processing time
                        from daily to near real-time.
                    </li>
                    <li className={`p-1 bg-dark text-white`}>
                        Recognized with company and client accolades for exceptional contributions to multiple high-priority
                        projects.
                    </li>
                    <li className={`p-1 bg-dark text-white`}>
                        Successfully managed 100+ SQA documents, ensuring compliance and efficiency across development
                        teams.
                    </li>
                </ul>
                <p className={`container my-3`} id={`SummaryTextSm`}><i>
                    An experienced IT professional with a background in software development, IT support, and data analytics.
                    Skilled in programming, cloud technologies, networking, and hands-on PC repair, delivering
                    client-focused solutions and leading teams to success. Proven ability to optimize processes, manage data
                    pipelines, and troubleshoot complex technical issues. Recognized for driving operational efficiency and
                    maintaining detailed documentation in high-pressure environments.
                </i></p>
            </div>
        </section>
    </div>
)

export default Highlights;