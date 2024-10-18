import 'animate.css/animate.min.css';
interface ContactProps {
    email: string;
    phone: string; 
    address: string;
  }
  
  function ContactInfo({ email, phone, address }: Readonly<ContactProps>) {
    return (
        <section className="container animate__animated animate__fadeInRight" id="contact-info">
          
            <div className="row mt-3">
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
            <div className="row">
              <p style={{fontSize:'22px'}}>Visit my social profile and get connected</p>
            </div>
        </section>
    );
  }
  
  export default ContactInfo;
  