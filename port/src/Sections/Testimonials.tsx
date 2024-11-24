import Testimonial from "../Components/Testimonial";
import Title from "../Components/Title";
import img1 from "../assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.webp";
import img2 from "../assets/p2.webp";
import img3 from "../assets/p3.jfif";

const testimonialsData = [
  {
    img: img1,
    name: 'Richard Miles',
    title: 'Chairman',
    quote: 'Outstanding Work!',
  },
  {
    img: img3,
    name: 'Vesta Shufelt',
    title: 'Executive Director',
    quote: 'Highly Skilled and Reliable!',
  },
  {
    img: img2,
    name: 'Joseph Alves',
    title: 'Managing Director',
    quote: 'Exceptional Developer!',
  },
];

function Testimonials() {
  return (
    <div className="container mt-5">
        <div className="col-12">
            <Title title={"TESTIMONIALS"} />
        </div>
      <div className="row mt-5">
        {testimonialsData.map((testimonial, index) => (
            <div className="col-md-4 mt-3" key={index}>
          <Testimonial 
            key={index}
            img={testimonial.img}
            name={testimonial.name}
            title={testimonial.title}
            quote={testimonial.quote}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
