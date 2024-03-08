import experienceIcon from '../../assets/icons/experience.svg';
import awardIcon from '../../assets/icons/award.svg';
import degreeIcon from '../../assets/icons/degree.svg';
import './Achievement.scss';

function Achievement({ icon, achievement }) {
    const { title, description } = achievement;
    return (
        <div className='achievement'>
            <img className='achievement__icon' src={icon} alt="icon" />
            <div className='achievement__title'>{title}</div>
            <div className='achievement__description'>{description}</div>
        </div>
    )
}

function Achievements({ achievements }) {
    console.log(achievements);
    return (
        <div className="achievement-list">
            <Achievement icon={experienceIcon} achievement={achievements.experience} />
            <Achievement icon={awardIcon} achievement={achievements.award} />
            <Achievement icon={degreeIcon} achievement={achievements.degree} />
        </div>
    )
}

export default Achievements;