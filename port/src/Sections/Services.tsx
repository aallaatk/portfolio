
import Title from "../Components/Title";
import responsive from "../assets/RESPONSIVE.png";
import web from "../assets/web.png";
import app from "../assets/app.png";
import ServiceItem from "../Components/ServiceItem"; // Ensure you have this import

const servicesData = [
  { title: 'Responsive Design', para: 'Creating responsive web designs.', img: responsive },
  { title: 'Web Development', para: 'Building modern web applications.', img: web },
  { title: 'App Development', para: 'Developing mobile applications.', img: app }
];

function Services() {
  return (
    <div className="container mt-5">
      <div className="row">
        <Title title={"SERVICES"} />
      </div>
      <div className="row mt-5 gx-4">
        {servicesData.map((i, index) => (
          <div className="col-md-4 mt-4" key={index}>
            <ServiceItem title={i.title} para={i.para} img={i.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
