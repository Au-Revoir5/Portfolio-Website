import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <h2 id="projects-title">Projects</h2>
        <ul className="projects">
          {projects.map((project) => (
            <li className="card" key={project.title}>
              <div className="card-file">{project.file}</div>
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Built with">
                  {project.tags.map((tag) => (
                    <li key={tag}>"{tag}"</li>
                  ))}
                </ul>
                <div className="card-links">
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    View source
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
