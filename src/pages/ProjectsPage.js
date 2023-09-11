import { Container } from "react-bootstrap";
import ProjectCard from "../cards/ProjectCard";


const projects = [
    {
        title: "Personal Website",
        startDate: "Sept 2021",
        endDate: "Present",
        url: "https://www.google.com",
        descriptionPoints: ["Designed and developed a personal website using React, Bootstrap, and React-Bootstrap.",
            "Implemented a custom markdown parser to allow for easy content editing.",
            "Deployed the website using GitHub Pages."],
        tags: ["React", "Javascript", "HTML", "CSS", "Git", "Bootstrap", "React-Bootstrap", "GitHub Pages"]
    },
]

const ProjectsPage = () => {
    return (
        <div>
            <h1>Projects Page</h1>
            <Container className='project-array'>
                {
                    projects.map((project) => {
                        return <ProjectCard project={project} />
                    })
                }
            </Container>
        </div>
    );
}

export default ProjectsPage;