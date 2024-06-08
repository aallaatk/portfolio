import BlogItem from "../Components/BlogItem";
import Title from "../Components/Title";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
const BlogData = [
    { creator: 'Responsive Design', title: 'What are the the highest paid it jobs currently?',date:'22-06-2024', img: blog1 },
    { creator: 'Web Development', title: 'What are the basicsof web development?',date:'25-06-2024', img:blog2},
    { creator: 'App Development', title: 'Does web developing require prior programming langauges knwoledge?',date:'28-06-2024', img: blog3 }
  ];
function Blog() {
  return (
    <div className="container mt-5">
        <div className="row">
            <Title  title={"BLOG"}/>
        </div>
        <div className="row mt-5 gx-4">
            {BlogData.map((blog, index) => (
                <div className="col-md-4 mt-4" key={index}>
                    <BlogItem img={blog.img} creator={blog.creator} date={blog.date} title={blog.title} />
                </div>
            ))}
            </div>
        </div>

  )
}

export default Blog