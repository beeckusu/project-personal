import { Container } from "react-bootstrap";
import ProjectCard from "../cards/ProjectCard";
import dcIcon from "../assets/icon-doctorcare.jpg";
import budgetIcon from "../assets/icon-budget.png";

const projects = [
    {
        icon: dcIcon,
        title: "Personal Website",
        startDate: "Sep 2023",
        url: "https://www.google.com",
        gitLink: "https://github.com/beeckusu/project-personal",
        descriptionPoints: [
            "Designed and developed a personal website using React, Bootstrap, and React-Bootstrap.",
            "Deployed the website using GitHub Pages."],
        tags: ["React", "Javascript", "HTML", "CSS", "Git", "Bootstrap", "React-Bootstrap"]
    },
    {
        icon: budgetIcon,
        title: "Where my Money at Lebowski?",
        startDate: "Aug 2023",
        url: "https://beeckusu.github.io/project-budget/",
        gitLink: "https://github.com/beeckusu/project-budget",
        descriptionPoints: [
            "Developed a web application to ingest transaction histories to track spending habits and trends.",
            "Designed a minimalist user interface for users to customize how the data is displayed.",
            "Implemented SMACSS organization structure to maintain CSS rules.",
        ],
        tags: ["React", "Javascript", "HTML", "CSS", "Git", "Bootstrap", "React-Bootstrap"]
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