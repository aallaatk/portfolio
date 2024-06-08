import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import Title from "./Title"


function Conatct() {
  return (
    <section className="container mt-3">
      <div className="row">
            <Title title={"CONTACT ME"}/>
        </div>
    <div className="row mt-5">
        <div className="col-md-6 mt-2">
        <ContactForm/>
        </div>
        <div className="col-md-6 mt-2">
        <ContactInfo email={"sleimiala@gmail.com"} phone={"+126 21375123"} address={"rue ezz edine Hanchi Mnihla Ariana"}/>
        </div>
    </div>
    </section>
  )
}

export default Conatct