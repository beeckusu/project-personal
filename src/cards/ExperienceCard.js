import { Card } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { formatString } from '../utils/func.js';

const ExperienceCard = ({ experience }) => {
    return (
        <Card className="experience-card">
            {experience.icon && <img src={experience.icon} alt="company icon" class="experience-icon"></img>}
            <div class="experience-preface">
                <p class='layout-flex title'><b class='title layout-left-aligned'>{experience.title}</b><span class='layout-right-aligned date'>{experience.startDate} - {experience.endDate}</span></p>
                <p class='company'>{experience.company} - {experience.location}</p>
                <p>{experience.tags.map((tag) => {
                    return <Badge pill variant="primary">{tag}</Badge>
                })}</p>

            </div>
            <ul class='description'>
                {experience.descriptionPoints.map((point) => {
                    return <li dangerouslySetInnerHTML={{ __html: formatString(point) }}></li>
                })}
            </ul>
        </Card>
    )
}


export default ExperienceCard;