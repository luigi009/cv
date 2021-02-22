import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function About() {
    return (
        <>
        <div class="content-wrapper">
            <div class="two-column-wrapper">
                    <div className="profile-image-wrapper">
                    <img className="bounce-in-top" height={500} width={750} src={prefix + '/luigi-fanaro-img.png'} alt="" />
                    </div>

                    <div className="profile-content-wrapper scale-in-center">
                    <h1>Hi, thanks for visiting my site.</h1>
                    <p>With over a decade of development experience in a number of industries I realized that the typical product creation
                        process between clients and developers was flawed. All too often developers rarely communicate to clients throughout
                        the development stage, resulting in a final product that fails to reach the goal sought by the customer and end
                        user.
                    </p>

                    <p>Phone: <a href="tel:+55-11-9-8544-7479" target="_blank" rel="noopener noreferrer">+55(11)985447479</a></p>
                    <p>Email: <a href="mailto:luigifanaro@hotmail.com">luigifanaro@hotmail.com</a></p>

                    <p>Game Design | Design | English Graphic Design | Game Designer | 
                        Bachelor's Degree | Bachelor's Degree Training | Programming | 
                        JavaScript | HTML | Front-End | Developer | Software Engineer | CSS | C # | Bootstrap | React | Git
                    </p>

                    <a href="https://www.linkedin.com/in/luigi-fanaro/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="4x" style={{color: "#0a66c2", marginRight: "15px" }} />
                    </a>
                    <a href="https://github.com/luigi009" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} size="4x" style={{color: "#24292e"}} />
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}