import './footer.css'
import contact from './contact_char.png'
import phone from './number_char.png'
import address from './address_char.png'
import email from './email_char.png'
import githubIcon from './github_icon_char.png'
import linkedInIcon from './linkedin_icon_char.png'

const footer = () => (
    <footer>
        <div className={`container-fluid bg-light`}>
            <section className={`container-sm p-3 mx-auto`}>
                <div className={`d-flex justify-content-between align-content-center`}>
                    <h3 className={`display-5`}>Contact Info</h3>
                    <img src={contact} alt={`skills icon`}/>
                </div>
                <div className={`d-flex justify-content-around`}>
                    <address className={`pt-2`}>
                        <div>
                            <img src={phone} alt={`Phone Icon`} width={`30px`} height={`auto`}/>
                            +1 973 943 5694
                        </div>
                        <div>
                            <img src={address} alt={`House Icon`} width={`30px`} height={`auto`}/>
                            East Newark, New Jersey
                        </div>
                        <div>
                            <img src={email} alt={`Email Icon`} width={`30px`} height={`auto`}/>
                            docterpbnj1@gmail.com
                        </div>
                    </address>
                    <div className={`d-flex pt-2 flex-column`}>
                        <a href={`https://github.com/Doctorpbnj`} className={`mb-2`} target={`_blank`}
                           rel={`noreferrer`}>
                            <img src={githubIcon} alt={`github icon`} width={`40px`} height={`auto`}/>
                        </a>
                        <a href={`https://www.linkedin.com/in/brian-fuller-64229aab`} target={`_blank`}
                           rel={`noreferrer`}>
                            <img src={linkedInIcon} alt={`linkedin icon`} width={`40px`} height={`auto`}/>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </footer>
)

export default footer;