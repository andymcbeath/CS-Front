import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function SocialMediaLinks() {
  const linkedinUrl = "https://www.linkedin.com/in/caught_steelin/";
  const instagramUrl = "https://www.instagram.com/caught_steelin/";
  const twitterUrl = "https://twitter.com/caught_steelin";

  return (
    <div>
      <a href={instagramUrl} target="_blank" rel="noreferrer">
      <InstagramIcon sx={{ color: "#E4405F" }} />
      </a>
      <a href={twitterUrl} target="_blank" rel="noreferrer">
      <TwitterIcon sx={{ color: "#1DA1F2" }} />
      </a>
    </div>
  );
}