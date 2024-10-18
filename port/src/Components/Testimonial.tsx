interface TestimonialProps {
  img: string;
  name: string;
  title: string;
  quote: string;
}

function Testimonial({ img, name, title, quote }: Readonly<TestimonialProps>) {
  return (
    <div className="testimonial-container">
      <div className="testimonial-quote p-4">
        <p className="quote-text text-center">“{quote}”</p>
      
      </div>
      <div className="testimonial-person mb-3">
        <img src={img} alt={name} className="person-img mt-3" />
        <h5 className="person-name">{name}</h5>
        <p className="person-title">{title}</p>
      </div>
    </div>
  );
}

export default Testimonial;
