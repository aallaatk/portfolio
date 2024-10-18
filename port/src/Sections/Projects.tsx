
import Title from "../Components/Title";
import ProjectItem from '../Components/ProjectItem';


const projectData = [
  { img: 'https://via.placeholder.com/300', title: "PFE", domain: "Tourism" },
  { img: 'https://via.placeholder.com/300', title: "Web Development", domain: "IT" },
  { img: 'https://via.placeholder.com/300', title: "Machine Learning", domain: "AI" }
];

function Projects() {
  return (
    <div className="container mt-5">
      <div className="row">
        <Title title={"PORTFOLIO"} />
      </div>
      <div className="row mt-5 gx-5">
        {projectData.map((project, index) => (
          <div className="col-md-4 mt-3" key={index}>
            <ProjectItem img={project.img} title={project.title} domain={project.domain} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
