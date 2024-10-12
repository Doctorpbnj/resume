import './educationSection.css';
import skillsIcon from './education_char_white.png';
import azure_fundamentals from './microsoft-certified-azure-fundamentals.png';
import certified_associate from './microsoft-certified-associate-badge.svg';
import Vantage_Associate from './TD Vantage Cert Associate.png';

const educationSection = () => (
    <div className={`container-fluid bg-dark text-light`}>
        <section className={`container-sm p-3 mx-auto`}>
            <div className={`d-flex justify-content-between align-content-center`}>
                <h3 className={`display-5`}>Education & Certifications</h3>
                <img src={skillsIcon} alt={`skills icon`}/>
            </div>
            <div>
                <address className={`pb-4`} id={`College`}>
                    <b>Bachelor’s Degree, Computer Science</b><br/>
                    <i>Kean University, Union, New Jersey United States</i>
                </address>
            </div>
            <span className={`container d-flex flex-wrap justify-content-around`} id={`CertIcons`}>
                <img src={azure_fundamentals} alt={`Microsoft Certified Azure Fundamentals Badge`}/>
                <img src={certified_associate} alt={`Microsoft Certified Azure Associate Badge`}/>
                <img src={Vantage_Associate} alt={`Teradata Vantage Associate Vertification`}/>
            </span>
        </section>
    </div>
)

export default educationSection;