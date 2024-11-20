import React from 'react';
import Lottie from 'lottie-react';
import 'animate.css/animate.min.css';
import Title from "../Components/Title";
import developerAnimation from '../assets/Animation - 1732109227589.json';
interface AboutMeProps {
    birthday: string,
    phone: string,
    email: string,
    nationality: string,
    languages: string,
    freelance: string
}

const AboutMe: React.FC<AboutMeProps> = ({ birthday, phone, email, nationality, languages, freelance }) => {
    return (
        <div className="container mt-5">
            <Title title={"ABOUT ME"} />
            <div className="row g-4 mt-5">
                <div className=" col-md-12 col-lg-5 " style={{ borderRadius: '25px' }}>
                <Lottie animationData={developerAnimation} loop={true} />
                </div>
                <div className="col-md-12 col-lg-7 animate__animated animate__fadeInDown" id="about-me">
                    <h2 className="h1"> Hi There! I'm Ala Sleimi</h2>
                    <h3>Full Stack Developer</h3>
                    <p>I am a highly motivated full stack web developer with expertise in both front-end and back-end technologies. I am adept at creating responsive and intuitive web applications, ensuring seamless user experiences. </p>
                    <div >
                        <div className="info-item mt-2"><span className="info-title">Birthday</span><span className="info-value">{birthday}</span></div>
                        <div className="info-item mt-2"><span className="info-title">Phone</span><span className="info-value">{phone}</span></div>
                        <div className="info-item mt-2"><span className="info-title">Email</span><span className="info-value">{email}</span></div>
                        <div className="info-item mt-2"><span className="info-title">Nationality</span><span className="info-value">{nationality}</span></div>
                        <div className="info-item mt-2"><span className="info-title">Languages</span><span className="info-value">{languages}</span></div>
                        <div className="info-item mt-2"><span className="info-title">Freelance</span><span className="info-value">{freelance}</span></div>
                    </div>
                    <a href="../../public/Ala-Sleimi-Resume.pdf" download className="btn btn-primary mt-5 " id="submit" style={{ color: 'black' }}>Download CV<i className="fa-solid fa-download ms-2"></i></a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
