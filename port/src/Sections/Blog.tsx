import React, { useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogItem from '../Components/BlogItem';
import Title from '../Components/Title';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

interface BlogDataType {
  creator: string;
  title: string;
  date: string;
  img: string;
}

const BlogData: BlogDataType[] = [
  { creator: 'Admin', title: 'What are the highest paid IT jobs currently?', date: '22-06-2024', img: blog1 },
  { creator: 'Admin', title: 'What are the basics of web development?', date: '25-06-2024', img: blog2 },
  { creator: 'Admin', title: 'Does web developing require prior programming languages knowledge?', date: '28-06-2024', img: blog3 },
];

const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button type="button" onClick={onClick} className="custom-prev">
      <i className="fas fa-chevron-left"></i>
    </button>
  );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button type="button" onClick={onClick} className="custom-next">
      <i className="fas fa-chevron-right"></i>
    </button>
  );
};

const Blog: React.FC = () => {
  const [showArrows, setShowArrows] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 576);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: showArrows,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />,
  };

  return (
    <div className="container mt-5">
      <div className="container text-center mb-4">
        <Title title="BLOG" />
      </div>
      <div className="container mt-5">
        <Slider {...settings}>
          {BlogData.map((blog, index) => (
            <div key={index} className="">
              <BlogItem img={blog.img} creator={blog.creator} date={blog.date} title={blog.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
