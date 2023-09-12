import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { formatString } from '../utils/func.js';


const ProjectCard = ({ project }) => {

    return (
        <Card className="project-card">
            {project.icon && <img src={project.icon} alt="company icon" class="project-icon"></img>}
            <div class="project-preface">
                <p class='layout-flex title'>
                    <b class='title layout-left-aligned'>{project.title}</b>
                    <span class='layout-right-aligned date'>{project.endDate ? project.startDate + " - " + project.endDate : project.startDate}</span>
                </p>
                <p class='url'>URL: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
                <p class='url'>Git: <a href={project.gitLink} target="_blank" rel="noopener noreferrer">{project.gitLink}</a></p>
                <p>{project.tags.map((tag) => {
                    return <Badge pill variant="primary">{tag}</Badge>
                })}</p>

            </div>
            <ul class='description'>
                {project.descriptionPoints.map((point) => {
                    return <li dangerouslySetInnerHTML={{ __html: formatString(point) }}></li>
                })}
            </ul>
        </Card >
    );
}

export default ProjectCard;