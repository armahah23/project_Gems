import './home-style.css';
import bckground from '../assets/Imgaes/bckground-img.jpeg';
import booknow from '../assets/Imgaes/booknow.png';
import emergency from '../assets/Imgaes/emergency.png';
import slide_1 from '../assets/Imgaes/slide_1.jpeg';

function Home() {

  const bookNow = () => {}

  return (
    <>
        <div className="home-container">
            <div className="background-image">
            <img src={bckground} alt="" className="backgrnd" />
            </div>
            <h1>Innovative <span> Vehicle <br/> Service </span> Solutions</h1>
            <div className="quick-access">
                <div className="emergency">
                    <img src={emergency} alt="breakdown" />
                    <span>Break Down Service</span>
                </div>
                <div className="booknow" onClick={bookNow}>
                    <img src={booknow} alt="booknow" />
                    <span>Book Now</span>
                </div>
            </div>
        </div>

        <div className="home-content">
          <div className="slide-img">
            <img src={slide_1} alt="image-1" />
          </div>
          <div className="content">
            <h3>Revolutionizing Vehicle Care: Streamlining Service Centers with Automated Solutions</h3>
            <p>Embark on a Journey into the Future of Vehicle Maintenance: 
            Introducing  Our Groundbreaking Service Center Platform. Designed to transcend the  limitations of traditional automotive care, 
            our comprehensive solution  revolutionizes every facet of the service experience. With seamless  appointment scheduling, meticulous repair tracking, 
            personalized  customer support, and a commitment to excellence, we are reshaping the  landscape of automotive maintenance. Join us on this transformative  
            voyage as we redefine what it means to care for your vehicle</p>
            <div className="sign-up">
              <button>SIGN UP</button>
              <span>or <a href="#">Click Here</a>to login</span>
            </div>
            
          </div>
        </div>

        <div className="history">Test</div>

    </>
  )
}

export default Home