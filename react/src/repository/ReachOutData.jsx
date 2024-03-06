import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedinIn,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const reachOutFooter = {
  contactForm: {
    contactFormPhraseTitle: "Join us for warmth and celebration!",
    contactFormPhraseBody: "REACH OUT TO ME",
    contactFormIcon: <FontAwesomeIcon icon={faPaperPlane} />,
  },

  contactMe: {
    contactMeTitle: "Contact me:",
    contactMeNumber: "999-999-9999",
    contactMeNumberIcon: <FontAwesomeIcon icon={faPhone} />,
    contactMeEmail: "email@email.com",
    contactMeEmailIcon: <FontAwesomeIcon icon={faEnvelope} />,

    socialMedia: [
      {
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        link: "https://www.facebook.com",
        isIconVisible: true,
      },
      {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        link: "https://www.instagram.com",
        isIconVisible: true,
      },
      {
        icon: <FontAwesomeIcon icon={faXTwitter} />,
        link: "https://twitter.com",
        isIconVisible: true,
      },
      {
        icon: <FontAwesomeIcon icon={faLinkedinIn} />,
        link: "https://www.linkedin.com",
        isIconVisible: true,
      },
      {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        link: "https://www.tiktok.com",
        isIconVisible: true,
      },
      {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        link: "https://www.youtube.com",
        isIconVisible: true,
      },
    ],
  },
};

export default reachOutFooter;
