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
  { creator: 'Admin', title: 'What are the the highest paid it jobs currently?', date: '22-06-2024', img: blog1 },
  { creator: 'Admin', title: 'What are the basics of web development?', date: '25-06-2024', img: blog2 },
  { creator: 'Admin', title: 'Does web developing require prior programming langauges knowledge?', date: '28-06-2024', img: blog3 },
];

interface CustomArrowProps {
  className?: string;
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '35%',
        left: '-30px', // Adjust the distance from the edge
        zIndex: 1,
        width: '50px', // Increase arrow width
        height: '50px', // Increase arrow height
        transform: 'translateY(-50%)',
        fontSize: '24px', // Font size for text (optional)
        textAlign: 'center', // Center text horizontally (optional)
      }}
    >
      {'<'}
    </div>
  );
};

const CustomNextArrow: React.FC<CustomArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '35%',
        right: '-45px', // Adjust the distance from the edge
        zIndex: 1,
        width: '50px', // Increase arrow width
        height: '50px', // Increase arrow height
        transform: 'translateY(-50%)',
        fontSize: '34px ', // Font size for text (optional)
        textAlign: 'center', // Center text horizontally (optional)
      }}
    >
      {'>'}
    </div>
  );
};

const Blog: React.FC = () => {
  const [showArrows, setShowArrows] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth > 576); // Adjust the breakpoint as needed
    };

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
    prevArrow: showArrows ? <CustomPrevArrow /> : undefined,
    nextArrow: showArrows ? <CustomNextArrow /> : undefined,
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <Title title={"BLOG"} />
      </div>
      <div className="row mt-5 gx-4">
        <Slider {...settings}>
          {BlogData.map((blog, index) => (
            <BlogItem key={index} img={blog.img} creator={blog.creator} date={blog.date} title={blog.title} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Blog;
