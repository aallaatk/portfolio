import Testimonial from "../Components/Testimonial";
import Title from "../Components/Title";


const testimonialsData = [
  {
    img: 'https://via.placeholder.com/100',
    name: 'Richard Miles',
    title: 'Chairman',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
  },
  {
    img: 'https://via.placeholder.com/100',
    name: 'Vesta Shufelt',
    title: 'Executive Director',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
  },
  {
    img: 'https://via.placeholder.com/100',
    name: 'Joseph Alves',
    title: 'Managing Director',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.',
  },
];

function Testimonials() {
  return (
    <div className="container mt-5">
        <div className="row">
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
