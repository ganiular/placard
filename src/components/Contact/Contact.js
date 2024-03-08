import emailIcon from '../../assets/icons/email.svg';
import webIcon from '../../assets/icons/web.svg';
import './Contact.scss';
import barcode from '../../assets/images/barcode.png';

function Contact({ contact }) {
    return (
        <div className="contact">
            <div className='contact__list'>
                <div className='contact__item'><img className='contact__icon' src={emailIcon} alt='email' /> {contact.email}</div>
                <div className='contact__item'><img className='contact__icon' src={webIcon} alt='linkedin' /> {contact.linkedin}</div>
            </div>
            <img className='contact__barcode' src={barcode} alt='barcode' />
        </div>
    )

}

export default Contact;