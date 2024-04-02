import weddingImgExample from "../assets/img/WEDDING_EXAMPLE.jpg"
import baptismImgExample from "../assets/img/BAPTISM_EXAMPLE.jpeg"
import memorialImgExample from "../assets/img/MEMORIAL_EXAMPLE.jpeg"
import imgBackground from "../assets/img/arvore-background.jpg"

const HomeContent = {
    section1_carousel: [
        {
            // image_path: "https://via.placeholder.com/600x400?text=Image+1",
            image_path: weddingImgExample,
            title: null,
            description: null,
            ref: "section1_carousel-section1_cards-01",
        },
        {
            // image_path: "https://via.placeholder.com/1000x2000?text=Image+2",
            image_path: baptismImgExample,
            title: null,
            description: null,
            ref: "section1_carousel-section1_cards-02",
        },
        {
            // image_path: "https://via.placeholder.com/1920x1080?text=Image+3",
            image_path: memorialImgExample,
            title: null,
            description: null,
            ref: "section1_carousel-section1_cards-03",
        },
    ],

    section2_phrase: [
        {
            image_path: null,
            title: null,
            description: "First and Foremost: Our Approach",
            ref: "home_content-section2_phrase-01",
        },
    ],

    section3_phrase: [
        {
            image_path: null,
            title: null,
            description: "In the intricate weave of our lives, we encounter moments of deep significance that shape our journey. From quiet reflections to heartfelt affirmations, each occasion holds the promise of a new dawn.They serve as gentle reminders of cherished memories and the limitless potential of tomorrow, urging us to cherish life's fleeting moments.",
            ref: "home_content-section3_phrase-01",
        },
    ],

    section4_cards: [
        {
            image_path: weddingImgExample,
            title: "WEDDING",
            description: "Some description here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Some description here, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            ref: "home_content-section4_cards-01",
        },
        {
            image_path: baptismImgExample,
            title: "BAPTISM",
            description: "Some description here",
            ref: "home_content-section4_cards-02",
        },
        {
            image_path: memorialImgExample,
            title: "MEMORIAL",
            description: "Some description here",
            ref: "home_content-section4_cards-03",
        }
    ],

    section5_phrase: [
        {
            image_path: imgBackground,
            title: "EVERY MOMENT OF A CELEBRATION IS A GEM, GLEAMING BRIGHTLY IN THE TREASURY OF YOUR HEART.", //limit in 200 characteres
            description: "AMY LEIGH MERCREE", //limit in 50 characteres
            ref: "home_content-section5_phrase-01",
        },
    ],

    section6_define: [
        {
            image_path: null,
            title: "*** Michele needs to define this section ***",
            description: null,
            ref: "home_content-section6_define-01",
        },
    ],

    section7_area: [
        {
            image_path: null,
            title: "AREAS SERVED:  Mississauga, Brampton, Toronto, Oakville, Milton, and Georgetown",
            description: null,
            ref: "home_content-section7_area-01",
        },
    ],
}

export default HomeContent;