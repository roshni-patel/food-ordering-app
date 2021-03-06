import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return(
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <p>&copy; 2021 indianfood.com</p>
            </div>
        </div>
    );
}

export default Footer;