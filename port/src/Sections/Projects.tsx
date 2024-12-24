import ProjectItem from "../Components/ProjectItem";
import Title from "../Components/Title";

const projectData = [
  {
    img: "https://via.placeholder.com/300",
    title: "thdjerba",
    domain: "Tourism",
    url: "https://github.com/aallaatk/pfe",
    video: "../assets/PFE.mp4", // Ensure the path is correct
  },
  {
    img: "https://via.placeholder.com/300",
    title: "Medi Bridge",
    domain: "Health",
    url: "https://github.com/aallaatk/medi-bridge",
    video: "/assets/MEDIBRIDGE.mp4", // Ensure the path is correct
  },
  {
    img: "https://via.placeholder.com/300",
    title: "Machine Learning",
    domain: "AI",
    url: "",
    video: "/assets/machine-learning.mp4", // Ensure the path is correct
  },
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
            <ProjectItem
              img={project.img}
              title={project.title}
              domain={project.domain}
              video={project.video}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;