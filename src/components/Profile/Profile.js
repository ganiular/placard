import logo from '../../assets/logos/logo.svg';
import assetImage from '../../assets/images/profile.jpg';
import './Profile.scss';

function Profile({ profile }) {
    const { image, name, profession } = profile;
    return (
        <div className="profile">
            <div className='profile__details'>
                <img className="profile__image" src={image || assetImage} alt={`${name} image`} />
                <div className='profile__context'>
                    <div className="profile__name">{name}</div>
                    <div className="profile__profession">{profession}</div>
                </div>
            </div>
            <div className="profile__footer">
                <img src={logo} alt="logo" />
                <div>Data Science</div>
            </div>
        </div>
    )
}

export default Profile;