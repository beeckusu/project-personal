import { Card } from 'react-bootstrap';

const EducationCard = ({ education }) => {

    return (
        <Card className='education-card'>
            {education.icon && <img src={education.icon} alt="company icon" class="education-icon"></img>}
            <div class="education-preface">
                <p class='layout-flex title'>
                    <b class='title layout-left-aligned school'>{education.school}</b>
                    <span class='layout-right-aligned date'>{education.endDate ? education.startDate + " - " + education.endDate : education.startDate}</span>
                </p>
                <p class='location'>{education.location}</p>
            </div>
            <p class='degree'><b>{education.degree}</b> - {education.specialization}</p>
            <p class='deans-list'><b>Dean's List:</b> {
                education.deansList.reduce((accumulator, currentValue) => {
                    return accumulator + ", " + currentValue;
                })
            }</p>
            <p class='gpa'><b>GPA</b>: {education.gpa}</p>
        </Card>
    );

}


export default EducationCard;