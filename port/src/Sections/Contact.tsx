import ContactForm from "../Components/ContactForm";
import ContactInfo from "../Components/ContactInfo";
import Title from "../Components/Title";

function Contact() {
  return (
    <section className="container mt-5">
      <div className="container">
        <Title title={"CONTACT ME"} />
      </div>
      <div className="row mt-5">
        <div className="col-md-6 mt-3">
          <ContactForm />
        </div>
        <div className="col-md-6 mt-3">
          <ContactInfo
            email={"sleimiala@gmail.com"}
            phone={"+216 21375123"}
            address={"rue ezz edine Hanchi Mnihla Ariana"}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
