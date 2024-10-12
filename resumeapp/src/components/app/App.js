import './App.css';
import Header from "../header/Header";
import SkillsSection from "../skillsSection/SkillsSection";
import EducationSection from "../educationSection/EducationSection";
import WorkExperience from "../workexperience/WorkExperience";
import Highlights from "../highlights/Highlights";
import Footer from "../footer/Footer";

const App = () => (
    <div>
        {/*Header with profile image and name*/}
        <Header/>

        {/*Skills and progress bar area*/}
        <SkillsSection/>

        {/*Education & Certifications section*/}
        <EducationSection/>

        {/*Work Experience section*/}
        <WorkExperience/>

        {/*Highlights*/}
        <Highlights/>

        {/*Contact info and footer*/}
        <Footer/>

    </div>
)


export default App;
