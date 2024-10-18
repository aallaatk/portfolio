


interface ProjectItemProps {
  img: string;
  title: string;
  domain: string;
}

function ProjectItem({ img, title, domain }: Readonly<ProjectItemProps>) {
  return (
    <div className="project-item position-relative" style={{height:'300px'}}>
      <img src={img} alt={title} className="img-fluid" />
      <div className="overlay d-flex flex-column justify-content-center align-items-center">
        <h5 className="h3">{title}</h5>
        <p>{domain}</p>
        <button id="submit">View</button>
      </div>
    </div>
  );
}

export default ProjectItem;
