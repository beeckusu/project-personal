import ExperienceCard from "../utils/ExperienceCard";
import { Container } from 'react-bootstrap';
import dcIcon from '../assets/icon-doctorcare.jpg';


const experiences = [
    {
        icon: dcIcon,
        title: "Software Developer",
        company: "DoctorCare",
        location: "Toronto, ON",
        startDate: "Sept 2020",
        endDate: "Present",
        descriptionPoints: ["Drove development for the product in a team of 3-5, completing 27.5% tickets since joining and 46.7% in past year. Organized monthly team retrospectives to analyze trends in team performance and velocity and facilitate conversations on how to improve team processes.",
            "Designed the **user interface for editing medical claims** that drives a core service offering, actioning over 47,000 claims (valued at $2-million in total) across two years.",
            "Spearheaded claim correction automation by designing a **new interface that allowed users to define correction rules**, actioning over 85,000 claims across two months.",
            "Planned and executed the **application migration to Amazon Linux 2 on AWS** with minimal service downtime.",
            "Optimized database usage that **reducd average CPU usage** from 50.4 % to 26.3 % and **user service interruptions** from 7.04 per day to 2.59 per day.",
            "Selected, managed, and mentored cycling co - op students, helping them contribute essential features to the application."],
        tags: ["Python", "Javascript", "Django", "SQL", "HTML", "CSS", "Git", "Agile", "Vagrant", "AWS (RDS, EB, EC2, IAM)"]
    },
]

const ExperiencePage = () => {
    return (
        <div>
            <h1>Experience</h1>
            <Container className='experience-array'>

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