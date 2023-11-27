import Box from "../components/Box";
import projects from "../components/Projects";

const Projects = () => {
  return (
    <div className="projects_container">
      <div className="projects">
        <h6>PROJECTS</h6>
        <div className="projects_box_direct">
          {
            projects.map(project => {
              return (
                <Box
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  live={project.live}
                  code={project.code}
                  linkLive={project.linkLive}
                  linkCode={project.linkCode}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects