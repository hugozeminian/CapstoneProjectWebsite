import faPhone from "../assets/img/phone-solid.svg";
import faEnvelope from "../assets/img/envelope-solid.svg";
import faPaperPlane from "../assets/img/paper-plane-solid.svg";
import faPhone_Hover from "../assets/img/phone-solid-hover.svg";
import faEnvelope_Hover from "../assets/img/envelope-solid-hover.svg";
import faPaperPlane_Hover from "../assets/img/paper-plane-solid-hover.svg";

import faFacebookF from "../assets/img/facebook-f.svg";
import faInstagram from "../assets/img/instagram.svg";
import faXTwitter from "../assets/img/x-twitter.svg";
import faLinkedinIn from "../assets/img/linkedin-in.svg";
import faTiktok from "../assets/img/tiktok.svg";
import faYoutube from "../assets/img/youtube.svg";
import faFacebookF_Hover from "../assets/img/facebook-f-hover.svg";
import faInstagram_Hover from "../assets/img/instagram-hover.svg";
import faXTwitter_Hover from "../assets/img/x-twitter-hover.svg";
import faLinkedinIn_Hover from "../assets/img/linkedin-in-hover.svg";
import faTiktok_Hover from "../assets/img/tiktok-hover.svg";
import faYoutube_Hover from "../assets/img/youtube-hover.svg";
import faBlog from "../assets/img/blog-solid.svg"

const reachOutFooter = {

  blog:{
    link: "https://www.blogger.com/",
    icon: faBlog,
  }, 

  contactForm: {
    contactFormPhraseTitle: "Join us for warmth and celebration!",
    contactFormPhraseBody: "REACH OUT TO ME",
    contactFormIcon: faPaperPlane,
    contactFormIcon_Hover: faPaperPlane_Hover,
    contactFormEmail: "pdf@email.com",
  },

  contactMe: {
    contactMeTitle: "Contact me:",
    contactMeNumber: "999-999-9999",
    contactMeNumberIcon: faPhone,
    contactMeNumberIcon_Hover: faPhone_Hover,
    contactMeEmail: "email@email.com",
    contactMeEmailIcon: faEnvelope,
    contactMeEmailIcon_Hover: faEnvelope_Hover,

    socialMedia: [
      {
        icon: faFacebookF,
        icon_Hover: faFacebookF_Hover,
        link: "https://www.facebook.com",
        isIconVisible: true,
      },
      {
        icon: faInstagram,
        icon_Hover: faInstagram_Hover,
        link: "https://www.instagram.com",
        isIconVisible: true,
      },
      {
        icon: faXTwitter,
        icon_Hover: faXTwitter_Hover,
        link: "https://twitter.com",
        isIconVisible: true,
      },
      {
        icon: faLinkedinIn,
        icon_Hover: faLinkedinIn_Hover,
        link: "https://www.linkedin.com",
        isIconVisible: true,
      },
      {
        icon: faTiktok,
        icon_Hover: faTiktok_Hover,
        link: "https://www.tiktok.com",
        isIconVisible: true,
      },
      {
        icon: faYoutube,
        icon_Hover: faYoutube_Hover,
        link: "https://www.youtube.com",
        isIconVisible: true,
      },
    ],
  },
};

export default reachOutFooter;
