import '../styles/Contact.css';
import ContactImage from '../assets/fooda.jpeg';

const Contact: React.FC = () => {
    return(
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${ContactImage})`}}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter your email" name="name" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter your message" rows={7}></textarea>
                    <button type="submit">Send Message</button>
                    </form>
            </div>
        </div>
    )
    
}


export default Contact;