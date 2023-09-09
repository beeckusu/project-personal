import ExperienceCard from "../utils/ExperienceCard";
import { Container } from 'react-bootstrap';
import googleIcon from '../assets/icon-google.png';


const experiences = [
    {
        icon: googleIcon,
        title: "Software Engineer",
        company: "Google",
        location: "Mountain View, CA",
        startDate: "June 2019",
        endDate: "Present",
        descriptionPoints: ["I work on the **Google** Search team and help build the world's most popular search engine."],
        tags: ["Python", "CSS"]
    },
    {
        title: "Software Engineer",
        company: "Facebook",
        location: "Menlo Park, CA",
        startDate: "June 2018",
        endDate: "June 2019",
        descriptionPoints: ["I work on the Google Search team and help build the world's most popular search engine."],
        tags: ["Javascript"]
    }
]

const ExperiencePage = () => {
    return (
        <div>
            <h1>Experience</h1>
            <Container className = 'experience-array'>

            {
                experiences.map((experience) => {
                    return <ExperienceCard experience={experience} />
                })
            }
            </Container>
        </div>
    )
}

export default ExperiencePage;