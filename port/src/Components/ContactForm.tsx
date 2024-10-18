import { useState } from "react";
import emailjs from 'emailjs-com';
import 'animate.css/animate.min.css';
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const initialFormData: FormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      const response = await emailjs.send('service_h3u77hp', 'template_9shzm8o', formDataToSend, 'CxNbbreN-XhMv4xrI');

      console.log('Email sent!', response);

      // Show success alert
      setShowAlert(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData(initialFormData);
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error('Email error:', error);
    }
  };

  return (
    <div className="container mt-3 animate__animated animate__fadeInLeft">
      {showAlert && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Message recieved! Thank you.
        </div>
      )}
      <form className="row g-4" onSubmit={handleSubmit}>
        <h2 style={{color:'white'}}>Just Say Hello</h2>
        <div className="col-12">
          <input
            type="text"
            className="form-control input-focus"
            id="inputName"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
        
          <input
            type="email"
            className="form-control input-focus" 
            id="inputEmail"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
         
          <input
            type="text"
            className="form-control input-focus"
            id="inputSubject"
            name="subject"
            placeholder="Your Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          
          <textarea
            className="form-control input-focus"
            id="inputMessage"
            rows={3}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn p-2 mt-4" id="submit">Send Message</button>
        </div>
        
      </form>
    </div>
  );
}

export default ContactForm;
