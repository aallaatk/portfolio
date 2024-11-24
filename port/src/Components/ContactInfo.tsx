import 'animate.css/animate.min.css';
interface ContactProps {
    email: string;
    phone: string; 
    address: string;
  }
  
  function ContactInfo({ email, phone, address }: Readonly<ContactProps>) {
    return (
        <section className="container" id="contact-info">
          
            <div className="container mt-3">
                <h2 style={{color: '#ffffff'}}>Contact Info</h2> 
                <p style={{color: '#fdfeff'}} className="p-2">Please feel free to get in touch with me</p> 
            </div>
            <div className="row align-items-center mb-4">
                <div className="col-1 d-flex justify-content-center align-items-center" id="round">
                    <i className="fa-solid fa-envelope" style={{ color: '#ffffff' }}></i> 
                </div>
                <div className="col d-flex flex-column">
                    <h3>Email</h3>
                    <p>{email}</p>
                </div>
            </div>
            <div className="row align-items-center mb-4">
                <div className="col-1 d-flex justify-content-center align-items-center" id="round">
                    <i className="fa-solid fa-phone" style={{ color: '#ffffff' }}></i> 
                </div>
                <div className="col d-flex flex-column">
                    <h3>Phone</h3>
                    <p>{phone}</p>
                </div>
            </div>
            <div className="row align-items-center mb-4">
                <div className="col-1 d-flex justify-content-center align-items-center" id="round">
                    <i className="fa-solid fa-location-dot" style={{ color: '#ffffff' }}></i> 
                </div>
                <div className="col d-flex flex-column">
                    <h3>Address</h3>
                    <p>{address}</p>
                </div>
            </div>
            <div className="container">
                {/* Social media Links */}
              <p style={{fontSize:'22px'}} className='mb-3'>Visit my social profile and get connected</p>
              <div className="row d-flex justify-content-between p-0">
  <div className="col-1 d-flex justify-content-center align-items-center" id="round-social">
    <a href="https://www.facebook.com/marwen.fatmi.18/" className="social-link">
      <i className="fa-brands fa-facebook"></i>
      <span className="social-name">Facebook</span>
    </a>
  </div>
  <div className="col-1 d-flex justify-content-center align-items-center" id="round-social">
    <a href="https://www.linkedin.com/in/ala-sleimi-67a129140/" className="social-link">
      <i className="fa-brands fa-linkedin"></i>
      <span className="social-name">Linkedin</span>
    </a>
  </div>
  <div className="col-1 d-flex justify-content-center align-items-center" id="round-social">
    <a href="https://github.com/aallaatk" className="social-link">
      <i className="fa-brands fa-github"></i>
      <span className="social-name">Github</span>
    </a>
  </div>
</div>
            </div>
        </section>
    );
  }
  
  export default ContactInfo;
  