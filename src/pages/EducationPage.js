import { Container } from 'react-bootstrap';
import EducationCard from '../cards/EducationCard';
import uwoIcon from '../assets/icon-uwo.gif';


const education = [
    {
        icon: uwoIcon,
        school: "University of Western Ontario",
        location: "London, ON",
        degree: "B.A. in Computer Science",
        specialization: "Honors Specialization in Software Engineering",
        deansList: [2017, 2018, 2019],
        gpa: "3.93",
        startDate: "Sep 2017",
        endDate: "Apr 2020",
    },
    {
        icon: uwoIcon,
        school: "University of Western Ontario",
        location: "London, ON",
        degree: "B. Sc. in Medical Science",
        specialization: "Honors Double Major",
        deansList: [2012, 2013, 2015, 2016],
        gpa: "3.7",
        startDate: "Sep 2012",
        endDate: "Dec 2016",
    },        
]

const EducationPage = () => {
    return (
        <div>
            <h1>Education Page</h1>
            <Container className='education-array'>
                {
                    education.map((education) => {
                        return <EducationCard education={education} />
                    })
                }
            </Container>
        </div>
    );
}

export default EducationPage;