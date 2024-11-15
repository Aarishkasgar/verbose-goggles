import React from "react";
import "../styles/Home.css";
// import banner from "../assets/banner-n.jpg";
// import HeroCard from "../components/HeroCard";
import SpecialitiesBox from "../components/SpecialitiesBox";
// import healthimg from "../assets/cardia.svg";
import doctorConsultImg from "../assets/doctor-consult-illustration.svg";
import Cardia from "../assets/cardia.svg";
import Orthoimg from "../assets/Orthopaedics.svg";
import Neurosciences from "../assets/Neurosciences.svg";
import Pulmonology from "../assets/pulmonology.svg";
import Gynecology from "../assets/Obstetrics And Gynaecology.svg";
import ent from "../assets/ent.svg";
import InternalMedicine from "../assets/speciality.svg";
import Surgary from "../assets/surgary.svg";
import { useNavigate } from "react-router-dom";
import ProjectFacts from "../components/ProjectFacts";
import evanBuilding from "../assets/evan-building.jpg";
import CounterAwardIcon from "../assets/Counter-Award-icon.png";
import CounterHeartIcon from "../assets/counter-Heart-icon.png";
import CounterHeldPatientsIcon from "../assets/counter-held-patients-icon.png";
import CounterDoctorIcon from "../assets/countr-doctor-icon.png";
import DoctorsCard from "../components/DoctorsCard";
import DrImg1 from "../assets/DoctorsImg/DrImg1.png";
import DrImg3 from "../assets/DoctorsImg/DrImg3.jpg";
import DrImg7 from "../assets/DoctorsImg/DrImg7.jpeg";
import DrImg8 from "../assets/DoctorsImg/DrImg8.jpeg";
import DrImg9 from "../assets/DoctorsImg/DrImg9.jpg";
import DrImg4 from "../assets/DoctorsImg/DrImg4.jpg";
import BookAppointment from "../components/BookAppointment";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import NearMeIcon from "@mui/icons-material/NearMe";
import Accreditation from "../assets/Accreditation.webp";
import TestimonialCard from "../components/TestimonialCard";
import images1 from "../assets/TPA/images-1.png";
import images2 from "../assets/TPA/images-2.png";
import images3 from "../assets/TPA/images-3.png";
import images4 from "../assets/TPA/images-4.png";
import images5 from "../assets/TPA/images-5.png";
import images6 from "../assets/TPA/images-6.png";
import images7 from "../assets/TPA/images-7.png";
import images8 from "../assets/TPA/images-8.png";
import images9 from "../assets/TPA/images-9.webp";
import images10 from "../assets/TPA/images-10.png";
import images11 from "../assets/TPA/images-11.png";
import images12 from "../assets/TPA/images-12.png";
import images13 from "../assets/TPA/images-13.png";
import images14 from "../assets/TPA/images-14.jpg";
import images15 from "../assets/TPA/images-15.png";
import images16 from "../assets/TPA/images-16.jpg";
import WhyChooseUs from "../assets/whychooseus.webp";

const Home = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/cardiology");
  }

  function clickAllHandler1() {
    navigate("/specialities");
  }

  function moveAboutHandler() {
    navigate("/about");
  }

  function moveDoctorHandler() {
    navigate("/dr-in-hospital");
  }
  return (
    <>
      <div className="hero-container">
        <div className="hero-inner-container">
          <div className="hero-content-box">
            <h3>Welcome To</h3>
            <h1>Evan Multi Speciality Hospital, Muzaffarnagar</h1>
            <h2>
              where we believe that every <br /> patient deserves Care With
              Smile
            </h2>
            <p>
              <AccessTimeFilledIcon style={{ fontSize: 35 }} />
              Open 24/7
            </p>
            <p>
              <a
                href="https://maps.app.goo.gl/VEYqE8XpBKEDTF5b6"
                className="getLink"
              >
                <NearMeIcon style={{ fontSize: 35 }} />
                Get Directions
              </a>
              | Call us +91 70786-93040
            </p>
            <button className="hero-btn" onClick={moveDoctorHandler}>
              Find a Doctor
            </button>
          </div>
          <div className="hero-right-box">
            <img
              src={evanBuilding}
              alt="evan-building"
              className="hero-banner"
            />
          </div>
        </div>
      </div>

      {/* home about section start */}

      <div>
        <BookAppointment />
      </div>

      <div className="H-about-container">
        <div className="H-about-inner-container">
          <div className="H-about-left">
            <h2>What We Do</h2>
            <h1>Evan Multi Speciality Hospital</h1>
            <p>
              At Evan Multi Speciality Hospital, Muzaffarnagar, we are committed
              to delivering exceptional healthcare with a patient-focused
              approach. As a premier multispecialty hospital in the region, we
              provide advanced medical services across 40+ specialties,
              including Cardiology, Neurology, Oncology, Orthopedics,
              Gastroenterology, and more. Our hospital combines modern
              facilities, the latest medical technology, and a skilled team of
              doctors to ensure precise diagnoses and effective treatments for
              all health concerns. We emphasize preventive care, early
              detection, and individualized treatment plans, always prioritizing
              patient well-being. From routine check-ups to complex surgeries,
              our facility is equipped to meet a broad spectrum of medical
              needs, maintaining the highest standards of safety and patient
              satisfaction. With 24/7 emergency services, sophisticated surgical
              procedures, and a comprehensive approach to health and wellness,
              we strive to be the preferred healthcare destination for
              Muzaffarnagar and nearby regions.
            </p>
          </div>
          <div className="H-about-right">
            <img src={Accreditation} />
          </div>
        </div>
      </div>

      {/* home second page start */}
      <div className="home-specialities-container">
        <div className="home-specialities-left">
          <div className="home-specialities-title">
            <h1>Specialities & Procedures</h1>
            <h2>Specialities</h2>
          </div>
          <div className="SpecialitiesBoxes">
            <div className="SpecialitiesBox1">
              <div onClick={clickHandler}>
                <SpecialitiesBox img={Cardia} h1="Cardiac Science" />
              </div>
              <SpecialitiesBox img={Orthoimg} h1="Orthopedics" />
              <SpecialitiesBox img={Neurosciences} h1="Neurosciences" />
              <SpecialitiesBox img={Pulmonology} h1="Pulmonology" />

              {/* <SpecialitiesBox img={Cardia} h1="Surgery" /> */}
            </div>
            <div className="SpecialitiesBox2">
              <SpecialitiesBox img={Surgary} h1="Surgery" />
              <SpecialitiesBox img={Gynecology} h1="Gynecology" />
              <SpecialitiesBox img={ent} h1="ENT" />
              <SpecialitiesBox img={InternalMedicine} h1="Internal Medicine" />

              {/* <SpecialitiesBox img={Cardia} h1="Nephrology" /> */}
            </div>
          </div>
          <div className="HS-viewBtn">
            <button
              onClick={clickAllHandler1}
              className="Home-Specialities-viewButton"
            >
              View All &gt;
            </button>
          </div>
        </div>
        <div className="home-specialities-right">
          <img src={doctorConsultImg} className="hsr-img" />
        </div>
      </div>

      {/* Project Facts or Counter page start */}

      <section id="project-facts-container">
        <div className="project-facts-container">
          <div>
            <ProjectFacts
              img={CounterHeartIcon}
              h2="20000 +"
              p="Successful Surgeries"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterDoctorIcon}
              h2="50 +"
              p="Medical Experts"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterHeldPatientsIcon}
              h2="100000 +"
              p="Families Healed"
            />
          </div>
          <div>
            <ProjectFacts
              img={CounterAwardIcon}
              h2="10 +"
              p="Awards & Accreditations"
            />
          </div>
        </div>
      </section>
      {/* Project Facts or Counter page end */}

      {/* Why choose us section start */}
      <section id="why-choose-us">
        <div className="why-choose-us">
          <div className="why-choose-us-left">
            <img src={WhyChooseUs} />
          </div>
          <div className="why-choose-us-right">
            <h2>Why Choose Us</h2>
            <h1>We are Alwayes open for Your Health Services</h1>
            <p>
              We are a team of dedicated medical professionals who are committed
              to providing the highest level of care to our patients. We
              understand that every patient is unique and requires a
              personalized approach to their healthcare needs.
            </p>
          </div>
        </div>
      </section>
      {/* Why choose us section end */}

      {/* Hopital welcome section start */}
      <section id="hospital-welcome-container">
        <div className="hospital-welcome-container">
          <h1>
            Welcome To
            <span className="evan-name-color">
              &nbsp;Evan Multi Speciality Hospital
            </span>
          </h1>
          <p>
            We are a multi-specialty hospital that provides a wide range of
            medical services to our patients. Our team of experienced doctors
            and medical staff are dedicated to providing the best possible care
            to our patients.
          </p>
          <img src={evanBuilding} />
          <button
            className="hospital-welcome-button"
            onClick={moveAboutHandler}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Our doctors section start */}

      <section className="HD-container">
        <div className="HD-inner-container">
          <h1>Our Doctors</h1>
          <p>Meet Our Experts Doctors</p>
          <div className="our-doctors-container">
            <DoctorsCard
              img={DrImg1}
              name="Dr Pankaj Jain"
              degree="MBBS, DM, FCCP"
              destination="(General Physician)"
            />

            <DoctorsCard
              img={DrImg3}
              name="Dr R.B. Singh"
              degree="MBBS, D-CARD"
              destination="(Sr. Cardiologist)"
            />
            <DoctorsCard
              img={DrImg4}
              name="Dr Parmod Kumar"
              degree="MBBS, MD"
              destination="(Pulmonologist)"
            />
            <DoctorsCard
              img={DrImg7}
              name="Dr Nidhi"
              degree="MBBS, MS"
              destination="(Gynecologist)"
            />
            <DoctorsCard
              img={DrImg8}
              name="Dr Faisal Shadab"
              degree="MBBS, DNB"
              destination="(Family Medicine)"
            />
            <DoctorsCard
              img={DrImg9}
              name="Dr Akshi Singhal"
              degree="MBBS, MS"
              destination="(ENT & HNS)"
            />
          </div>
          <button
            className="hospital-welcome-button"
            onClick={moveDoctorHandler}
          >
            View All Doctors
          </button>
        </div>
      </section>

      {/* Tpa section start */}

      <section className="TPA-container">
        <div className="TPA-inner-container">
          <div className="TPA-title">
            <h3>INSURANCE</h3>
            <h1>TPA & Insurance</h1>
          </div>
          <div className="TPA-logo">
            <marquee behavior="scroll" direction="right" scrollamount="15">
              <img src={images1} />
              <img src={images2} />
              <img src={images3} />
              <img src={images4} />
              <img src={images5} />
              <img src={images6} />
              <img src={images7} />
              <img src={images8} />
              <img src={images9} />
              <img src={images10} />
              <img src={images11} />
              <img src={images12} />
              <img src={images13} />
              <img src={images14} />
              <img src={images15} />
              <img src={images16} />
            </marquee>
          </div>
        </div>
      </section>

      {/* Evan Testimonial */}
      <section className="testimonial-container">
        <div className="testimonial-inner-container">
          <div className="testimonial-title">
            <h3>TESTIMONIAL</h3>
            <h1>What Our Patients Say</h1>
          </div>
          <div className="testimonial-box">
            <marquee behavior="scroll" direction="right" scrollamount="0">
              <TestimonialCard />
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
