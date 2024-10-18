interface BlogItemProps {
    img:string,
   creator:string,
    date:string,
    title:string
}
function BlogItem({img,creator,date,title}: Readonly<BlogItemProps>) {
  return (
    <div className="container" id="blog-item">
        <div className="row">
            <img src={img} alt="blog"  />
        </div>
        <div className="row mt-3">
            <p>By : <span>{creator}</span>  | <span>{date}</span></p>
        </div>
        <div className="row">
            <h4>{title}</h4>
        </div>
        </div>
  )
}

export default BlogItem