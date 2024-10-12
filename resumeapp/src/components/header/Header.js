import './Header.css';
import headshot from './spain_crop.jpg'

const header = () => (
    <>
        <header className={`container-fluid d-flex justify-content-between bg-dark text-light p-0`}>
            <section className={`container`} id={`HeadshotTitle`}>
                <img src={headshot} alt={`Brian Fuller`} loading={`eager`}
                     className={`container`} id={`headshot`} style={{maxHeight: "696px", maxWidth: "696px"}}/>
                <section className={`container-fluid p-0`} id={`nameTitle`}>
                    <h2 className={`m-0`}>Brian Fuller</h2>
                    <h3 className={`m-0`}>Software Developer / IT Professional</h3>
                </section>
            </section>
            <section className={`container`} id={`ProfessionalSummary`}>
                <blockquote className={`container lead`} id={`SummaryText`}>
                    An experienced IT professional with a background in software development, IT support, and data analytics.
                    Skilled in programming, cloud technologies, networking, and hands-on PC repair, delivering client-focused
                    solutions and leading teams to success. Proven ability to optimize processes, manage data pipelines, and
                    troubleshoot complex technical issues. Recognized for driving operational efficiency and maintaining
                    detailed
                    documentation in high-pressure environments.
                </blockquote>
            </section>
        </header>
    </>
)

export default header;