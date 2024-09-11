import './footer-style.css';
import facebook from '../assets/Imgaes/facebook.png';
import instagram from '../assets/Imgaes/instagram.png';
import gmail from '../assets/Imgaes/gmail.png';
import phonecall from '../assets/Imgaes/phonecall.png';

function Footer() {
  return (
    <>
        <div className="footer-container">
            <div className="links">
            <div className="facebook">
                <img src={facebook} alt="fb" />
                <h3>Facebook</h3>
            </div>
            <div className="insta">
                <img src={instagram} alt="fb" />
                <h3>AutoCare</h3>
            </div>
            <div className="gmail">
                <img src={gmail} alt="fb" />
                <h3>autocare.info@gmail.com</h3>
            </div>
            <div className="call">
                <img src={phonecall} alt="fb" />
                <h3>+94771234567</h3>
            </div>
            </div>
            <div className="footer-content">
                <p>© Project Gems All rights reserved</p>
            </div>
        </div>
    </>
  )
}

export default Footer