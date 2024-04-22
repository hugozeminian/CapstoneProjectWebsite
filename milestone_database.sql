-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 20, 2024 at 02:49 AM
-- Server version: 10.11.7-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u412796235_capstone`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `general_cards`
--

CREATE TABLE `general_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `reference` varchar(255) NOT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `imgpath` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `date_info` date DEFAULT NULL,
  `time_info` time DEFAULT NULL,
  `location_info` varchar(255) DEFAULT NULL,
  `eticket_link` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_cards`
--

INSERT INTO `general_cards` (`id`, `page`, `section`, `reference`, `title`, `description`, `imgpath`, `created_at`, `updated_at`, `video`, `date_info`, `time_info`, `location_info`, `eticket_link`) VALUES
(3, 'home', 'section1_carousel', 'home_content-section1_carousel-01', NULL, NULL, 'images/qSJlYuMLfQeuPqB881GjxdqGnQEqkR5gSN3FklZ7.jpg', '2024-03-30 16:18:29', '2024-04-19 20:44:28', NULL, NULL, NULL, NULL, NULL),
(4, 'home', 'section1_carousel', 'home_content-section1_carousel-02', NULL, NULL, 'images/ONFOJenfA1m0pjPGFL8Oakz4wIa9XhneP8dT5NcD.jpg', '2024-03-30 16:36:31', '2024-04-13 18:23:28', NULL, NULL, NULL, NULL, NULL),
(5, 'home', 'section1_carousel', 'home_content-section1_carousel-03', NULL, NULL, 'images/qsI2J01YzwIeHuiMtZTfSIZzpTJ4N17T0RooHS9E.jpg', '2024-03-30 16:47:28', '2024-04-19 18:48:38', NULL, NULL, NULL, NULL, NULL),
(7, 'home', 'section2_phrase', 'home_content-section2_phrase-01', NULL, 'First and Foremost: Our Approach...', NULL, '2024-03-30 17:02:28', '2024-04-19 20:44:43', NULL, NULL, NULL, NULL, NULL),
(8, 'home', 'section3_phrase', 'home_content-section3_phrase-01', NULL, 'In the intricate weave of our lives, we encounter moments of deep significance that shape our journey. From quiet reflections to heartfelt affirmations, each occasion holds the promise of a new dawn. They serve as gentle reminders of cherished memories and the limitless potential of tomorrow, urging us to cherish life\'s fleeting moments.', NULL, '2024-03-30 17:05:16', '2024-04-13 04:23:55', NULL, NULL, NULL, NULL, NULL),
(9, 'home', 'section4_cards', 'home_content-section4_cards-01', 'WEDDING', 'In commemorating life\'s most cherished moments, there lies a profound responsibility in crafting ceremonies that embody love, dedication, and jubilation. From weddings to vow renewals, each occasion represents a tapestry woven with shared experiences and profound commitments. The role of a guide extends beyond mere officiating; it encompasses the delicate art of curating a ceremony that reflects the unique journey of the couple. Every word spoken, every ritual performed, serves to honor their bond. There exists a deep-seated belief in the transformative power of love to unite souls. It is both a privilege and a responsibility to contribute to such significant celebrations. Whether it\'s an intimate gathering or a grand affair, meticulous attention is given to fashioning a ceremony that resonates with the profound love being celebrated.', 'images/wvtUURBftXtdbuTUHjwEQPMPm8glT1Sq2XCTHuZT.jpg', '2024-03-30 17:07:51', '2024-04-19 20:29:37', NULL, NULL, NULL, NULL, NULL),
(10, 'home', 'section4_cards', 'home_content-section4_cards-02', 'BAPTISM', 'In welcoming life\'s newest blessings through baptism, there\'s a profound responsibility in crafting ceremonies filled with love, dedication, and hope. Each baptismal occasion symbolizes the beginning of a spiritual journey and a deepening of faith. As a guide, my role extends beyond mere officiating; it involves curating a ceremony that reflects the family\'s faith and values, honoring the sacredness of this moment. Every word spoken and gesture performed serves to celebrate the child\'s entry into their spiritual community. I firmly believe in the transformative power of faith to nurture and unite hearts. It\'s both an honor and a privilege to contribute to such a significant milestone in a family\'s life, ensuring that the baptism ceremony is a beautiful reflection of their beliefs and hopes for the future.', 'images/YOD81q16PPikBb6TvvCQV2c1eNvoRmlP4Fp4bZfo.jpg', '2024-03-30 17:10:56', '2024-04-19 18:44:50', NULL, NULL, NULL, NULL, NULL),
(11, 'home', 'section4_cards', 'home_content-section4_cards-03', 'MEMORIAL', 'In commemorating the lives of our dearly departed, there\'s a profound responsibility in crafting memorial services filled with love, remembrance, and solace. Each memorial occasion represents a tapestry of cherished memories and enduring legacies. As a guide, my role extends beyond officiating; it involves curating a service that honors the unique journey and impact of the individual. Every word spoken and tribute offered serves to celebrate their life and provide comfort to those in mourning. I firmly believe in the healing power of remembrance to soothe and unite grieving hearts. It\'s both an honor and a responsibility to contribute to such a significant moment of reflection and tribute, ensuring that the memorial service is a heartfelt and meaningful tribute to the life that was lived.', 'images/PVVDAIubstkDuxASwxHEGLaYrq1Flxm78trN3dLU.jpg', '2024-03-30 17:11:51', '2024-04-15 19:05:51', NULL, NULL, NULL, NULL, NULL),
(12, 'home', 'section5_phrase', 'home_content-section5_phrase-01', 'EVERY MOMENT OF A CELEBRATION IS A GEM, GLEAMING BRIGHTLY IN THE TREASURY OF YOUR HEART', 'AMY LEIGH MERCREE', 'images/1hjE4iZejYzvghFbar5evrczQRJ0JqWbtNaa1POx.jpg', '2024-03-30 17:24:29', '2024-04-18 20:58:19', NULL, NULL, NULL, NULL, NULL),
(13, 'home', 'section6_define', 'home_content-section6_define-01', '*** Michele needs to define this section ***', NULL, NULL, '2024-03-30 17:27:14', '2024-03-30 17:27:14', NULL, NULL, NULL, NULL, NULL),
(14, 'home', 'section7_area', 'home_content-section7_area-01', 'AREAS SERVED:  Mississauga, Brampton, Toronto, Oakville, Milton, and Georgetown', NULL, NULL, '2024-03-30 17:27:57', '2024-04-18 13:04:10', NULL, NULL, NULL, NULL, NULL),
(15, 'wedding', 'section1_image_text', 'wedding_content-section1_image_text-01', 'Embracing Love: Crafting Unforgettable Celebrations', 'As a celebrant, the opportunity to facilitate significant life events is a privilege I hold dear. From weddings to vow renewals, each ceremony is a mosaic of love, commitment, and jubilation. My role extends beyond mere officiating; it encompasses the crafting of a ceremony that encapsulates the essence of the couple\'s journey. Every word spoken, every ritual performed, is carefully chosen to honor their unique bond. I firmly believe in the universality of love\'s power to unite souls. It is an honor to contribute to such poignant celebrations. Whether it\'s an intimate gathering or a grand affair, meticulous attention is given to fashioning a ceremony that resonates with the profound love being celebrated.', 'images/Rodfc5b7EoVfv6qs8FkqyRN7ra9nDXPaBHAgtCDA.jpg', '2024-03-30 17:41:58', '2024-04-13 03:51:56', NULL, NULL, NULL, NULL, NULL),
(16, 'wedding', 'section2_cards', 'wedding_content-section2_cards-01', 'Make it Legal', 'Our \"Make it Legal\" wedding service is designed to ensure that your union is not only a celebration of love but also legally recognized. With meticulous attention to detail and expertise in marriage laws, our dedicated team will guide you through the necessary paperwork, appointments, and legal formalities required to make your marriage official. From obtaining marriage licenses to coordinating with officiants and filing necessary documents, we handle every aspect of the legal process with professionalism and care. With our \"Make it Legal\" service, you can focus on cherishing the moment while we take care of the legalities, ensuring that your special day is truly unforgettable in every way.', 'images/ImqwJoQXkG7WHqHtvvBwzbbZGyq509wYAFrPe0z2.jpg', '2024-03-30 17:44:58', '2024-04-12 20:32:26', NULL, NULL, NULL, NULL, NULL),
(17, 'wedding', 'section2_cards', 'wedding_content-section2_cards-02', 'Simply Sweet', 'Our \"Simply Sweet\" wedding service is the epitome of simplicity and sweetness, offering couples a seamless and stress-free way to make their love official. With this service, we streamline the legalities of marriage, ensuring that all necessary paperwork is completed efficiently and accurately. From obtaining marriage licenses to coordinating with officiants and witnesses, we handle every detail with care and precision. Our goal is to create a beautiful and memorable wedding experience that is as sweet and uncomplicated as your love. With the \"Simply Sweet\" service, you can focus on savoring the moment and celebrating your commitment while we take care of the rest.', 'images/QcRJtKL1ZKC65iZ8G9nVHeIsgLgyxlADvLxGarZz.jpg', '2024-03-30 17:49:21', '2024-04-12 20:58:22', NULL, NULL, NULL, NULL, NULL),
(18, 'wedding', 'section2_cards', 'wedding_content-section2_cards-03', 'Perfectly Planned', 'Our \"Perfectly Planned\" wedding service offers couples meticulous attention to detail and expert coordination to ensure that every aspect of their special day is flawlessly executed. From the initial consultation to the final send-off, our dedicated team works tirelessly to bring your wedding vision to life. With a focus on organization, creativity, and professionalism, we take care of every element of your wedding planning process, from venue selection to vendor management and timeline creation. Our goal is to alleviate the stress of wedding planning so that you can relax and enjoy every moment of your celebration. With the \"Perfectly Planned\" service, you can rest assured that your wedding day will be everything you\'ve ever dreamed of and more.', 'images/O6rXc4y1Y7cNoE4D7lgiJ1JJEA1qTr6eAgrl8vjL.jpg', '2024-03-30 17:50:35', '2024-04-12 20:32:26', NULL, NULL, NULL, NULL, NULL),
(19, 'wedding', 'section3_phrase', 'wedding_content-section3_phrase-01', '\"THE GREATEST HAPPINESS YOU CAN HAVE IS KNOWING THAT YOU DO NOT NECESSARILY REQUIRE HAPPINESS.\"', 'WILLIAM SAROYAN', 'images/cLb5TPsyEq7gf5tPFQk6RVdRqQZ29EBbtoa8sJnf.jpg', '2024-03-30 17:51:36', '2024-04-16 16:02:02', NULL, NULL, NULL, NULL, NULL),
(20, 'wedding', 'section4_photos', 'wedding_content-section4_photos-01', NULL, NULL, 'images/Za0owvooGZSMl3M0a25qhoPWpaFELK3UPeDMsQlp.jpg', '2024-03-30 17:58:42', '2024-03-30 17:58:42', NULL, NULL, NULL, NULL, NULL),
(21, 'wedding', 'section4_photos', 'wedding_content-section4_photos-02', NULL, NULL, 'images/S9zZXviKS6pEIiKfzjjXnZIC88K8ORpGCKKNF0sA.jpg', '2024-03-30 17:59:11', '2024-03-30 17:59:11', NULL, NULL, NULL, NULL, NULL),
(22, 'wedding', 'section4_photos', 'wedding_content-section4_photos-03', NULL, NULL, 'images/wxWfWvikv9jxHEyesZKABAB7mihw43DwxMnSvrWb.jpg', '2024-03-30 17:59:26', '2024-03-30 17:59:26', NULL, NULL, NULL, NULL, NULL),
(23, 'wedding', 'section4_photos', 'wedding_content-section4_photos-04', NULL, NULL, 'images/14JHr0kWLNZr0f4AAJcX4edPKvPS8WUcASQGGSu0.jpg', '2024-03-30 17:59:38', '2024-04-12 21:00:31', NULL, NULL, NULL, NULL, NULL),
(24, 'wedding', 'section4_photos', 'wedding_content-section4_photos-05', NULL, NULL, 'images/cVg9pVlcWzPOZpViDSCMqwpiIaAa19k8UnLvgHKE.jpg', '2024-03-30 17:59:49', '2024-03-30 17:59:49', NULL, NULL, NULL, NULL, NULL),
(25, 'wedding', 'section4_photos', 'wedding_content-section4_photos-06', NULL, NULL, 'images/WzuUZv5z8ylGRkhyhUwNJgqtTLxuI7yjJG0jFb7V.jpg', '2024-03-30 18:00:07', '2024-03-30 18:00:07', NULL, NULL, NULL, NULL, NULL),
(26, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-01', 'Simply Sweet: Effortless Elegance', 'Simply Sweet made our wedding legal process effortless and sweet, ensuring every detail was taken care of with professionalism and care, making our day even more special.', 'images/6FbnNud8Z2vkLn5oTw2lb7Rj6F7YSVyPGZucWlgx.jpg', '2024-03-30 18:10:11', '2024-04-11 22:27:07', NULL, NULL, NULL, NULL, NULL),
(27, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-02', 'Perfectly Planned: Expert Coordination', 'Thanks to Perfectly Planned, our wedding day was seamlessly coordinated with expert precision, allowing us to enjoy every moment without worry.', 'images/yw0c9MUDIYjuJ0CkcmIsNDldRvMj5sLmichmqkjM.jpg', '2024-03-30 18:12:52', '2024-03-30 18:12:52', NULL, NULL, NULL, NULL, NULL),
(28, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-03', 'Simply Sweet: Sweet and Simple', 'Simply Sweet\'s attention to detail and professionalism ensured that our wedding was not only filled with love but also legally recognized. Thank you', 'images/gMchhF8DeT6Lodg03pW9q7NmK7vpBJod9CMWhwN0.jpg', '2024-03-30 18:14:42', '2024-03-30 18:14:42', NULL, NULL, NULL, NULL, NULL),
(29, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-04', 'Perfectly Planned: Dream Wedding', 'Our dream wedding became a reality thanks to Perfectly Planned. Their creativity and dedication made every moment unforgettable', 'images/CcwfZcDsDvkwty1IiYrO7QxTs8T914Cdd6gci7MG.jpg', '2024-03-30 18:16:12', '2024-03-30 18:16:12', NULL, NULL, NULL, NULL, NULL),
(30, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-05', 'Make it Leagal', 'We couldn\'t have asked for a better service. Their professionalism and expertise made our wedding legal process stress-free and sweet', 'images/DsA05KEXuFRIMOFgxJ3eKIhKr9gTuN7pFlHOksrJ.jpg', '2024-03-30 18:17:21', '2024-03-30 18:17:21', NULL, NULL, NULL, NULL, NULL),
(31, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-06', 'Perfectly Planned: Exceeded Expectations', 'Perfectly Planned exceeded our expectations and made our wedding day flawless. Highly recommend their services to any couple looking for a perfectly executed wedding experience!', 'images/ZUE6R9WxXqu9R8l8AQWtvtLeOHIWdYBwfSgFuGb8.jpg', '2024-03-30 18:18:17', '2024-03-30 18:18:17', NULL, NULL, NULL, NULL, NULL),
(32, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-07', 'Sweet Memories', 'Thank you for making our wedding legal process effortless and sweet. Your professionalism and attention to detail were truly appreciated.', 'images/c53kMHyZ9okiqZiujQpoFOgkFlENX3Mk8u4Iu6P4.jpg', '2024-03-30 18:19:49', '2024-03-30 18:19:49', NULL, NULL, NULL, NULL, NULL),
(33, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-08', 'Picture-Perfect Day', 'Thanks to Perfectly Planned, our wedding day was picture-perfect. Their attention to detail and dedication to making our day perfect were exceptional.', 'images/s8jKFDz4Zn37i4TQymcorvJ5pabBSo9OerkyUkyP.jpg', '2024-03-30 18:20:36', '2024-03-30 18:20:36', NULL, NULL, NULL, NULL, NULL),
(34, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-09', 'Legal Ease', 'You made our wedding legal process a breeze, allowing us to focus on creating unforgettable memories with our loved ones', 'images/ov5kPMK0s5DkXFnADWwqwvtrXEw9kqY73k9Z6JGQ.jpg', '2024-03-30 18:21:34', '2024-03-30 18:21:34', NULL, NULL, NULL, NULL, NULL),
(35, 'wedding', 'section5_testimonials', 'wedding_content-section5_testimonials-10', 'Flawless Execution', 'Thanks to Perfectly Planned, our wedding day was flawlessly executed with sophistication and grace. Their attention to detail and professionalism were evident in every aspect of our celebration.', 'images/o3RH5qG5bvEYQZKxej8ogGsCFUy6XhiaVC6qZKqy.jpg', '2024-03-30 18:22:23', '2024-03-30 18:22:23', NULL, NULL, NULL, NULL, NULL),
(36, 'baptism', 'section1_image_text', 'baptism_content-section1_image_text-01', 'Blessed Beginnings: Crafting Memorable Baptism Ceremonies', 'As a celebrant, I am deeply honored to be part of life\'s significant moments, including baptisms. Each baptism marks the beginning of a new journey filled with love, hope, and faith. My role extends beyond officiating; it involves creating a ceremony that honors the importance of this special occasion. Every word spoken and every ritual performed is carefully chosen to celebrate the bond between the child, their family, and their community. I firmly believe in the power of this event to bring hearts together. It is a privilege to contribute to such meaningful celebrations, whether it\'s an intimate family gathering or a larger church ceremony. With attention to detail, I aim to craft a baptism ceremony that reflects the love and devotion being celebrated.', 'images/GAR3kPsz9rD4Mip57pNJLWzLi9Zeg86HFph8LoSi.jpg', '2024-03-30 18:40:24', '2024-04-12 21:10:42', NULL, NULL, NULL, NULL, NULL),
(37, 'baptism', 'section2_cards', 'baptism_content-section2_cards-01', 'Celebrating Baby\'s Name', 'As a celebrant, I am honored to partake in the celebration of life\'s milestones, including the naming ceremony of a baby. This event symbolizes the beginning of the child\'s unique journey, filled with love, hope, and promise. My role extends beyond mere officiating; it encompasses crafting a ceremony that commemorates the significance of this momentous occasion. Each word spoken, each ritual performed, is carefully selected to honor the child, their family, and their community. I firmly believe in the power of this ceremony to unite hearts and foster a sense of belonging. It is a privilege to contribute to such joyful celebrations, whether it\'s a cozy gathering at home or a larger event with friends and family. With meticulous attention to detail, I strive to create a naming ceremony that resonates with the profound love and happiness surrounding the arrival of the little one.', 'images/E972pIMTIDOEBVZjGCjNw3HWtsczXdK7oMNxK7Y6.jpg', '2024-03-30 18:42:30', '2024-04-16 15:56:02', NULL, NULL, NULL, NULL, NULL),
(38, 'baptism', 'section2_cards', 'baptism_content-section2_cards-02', 'Child Baptism', 'As a celebrant, I am deeply honored to be part of life\'s meaningful moments, including the baptism of a baby. This ceremony marks a significant milestone in the child\'s journey, symbolizing love, hope, and new beginnings. My role goes beyond traditional officiating; it involves creating a ceremony that embraces the importance of this special occasion. Every word spoken and every gesture performed is chosen to celebrate the joy of the moment and the bond within the family. I firmly believe in the power of such ceremonies to unite hearts and create lasting memories. It is a privilege to contribute to these heartfelt celebrations, whether in an intimate gathering or a larger event with loved ones. With attention to detail and genuine care, I strive to craft a baptism ceremony that reflects the warmth and love surrounding the arrival of the precious little one.', 'images/uSfrOnzQp9WGWKSBWuhHUhkW8t5H2cxX3AJ7kPji.jpg', '2024-03-30 18:44:52', '2024-04-12 21:09:26', NULL, NULL, NULL, NULL, NULL),
(39, 'baptism', 'section2_cards', 'baptism_content-section2_cards-03', 'Adult Baptism', 'As a celebrant, I am privileged to partake in significant life events, including adult baptisms. This ceremony symbolizes a profound journey of faith, renewal, and spiritual awakening. My role extends beyond officiating; it involves crafting a ceremony that honors the individual\'s decision to embrace their faith and embark on a new chapter in life. Every word spoken and every gesture performed is chosen to reflect the depth of this personal commitment and the support of their community. I firmly believe in the transformative power of this ceremony to inspire and uplift hearts. It is an honor to contribute to these meaningful celebrations, whether in a private gathering or a public ceremony. With sincerity and reverence, I strive to create a baptismal ceremony that resonates with the individual\'s journey and the joy of newfound faith.', 'images/u65yduKtbAQRFfE40N9cGj3b6wcb4l3wH24Ef1ye.jpg', '2024-03-30 18:46:05', '2024-04-12 21:08:13', NULL, NULL, NULL, NULL, NULL),
(40, 'baptism', 'section3_phrase', 'baptism_content-section3_phrase-01', '\"BIRTH IS THE SUDDEN OPENING OF A WINDOW, THROUGH WHICH YOU LOOK OUT UPON A STUPENDOUS PROSPECT.\"', 'HENRY MILLER', 'images/x8i7l4NaMgtgYwOiJGCpo8Bh9BiRfQSapV7cxDKq.jpg', '2024-03-30 19:32:47', '2024-03-30 19:32:47', NULL, NULL, NULL, NULL, NULL),
(41, 'baptism', 'section4_photos', 'baptism_content-section4_photos-01', NULL, NULL, 'images/kInTcc5qVNPgMYBZI8z6dp4QaUjrXrK4nUKYScCD.jpg', '2024-03-30 20:05:21', '2024-03-30 20:05:21', NULL, NULL, NULL, NULL, NULL),
(42, 'baptism', 'section4_photos', 'baptism_content-section4_photos-02', NULL, NULL, 'images/Xmy61EcbQh8lD0ROIaX10rFA6opWGiUh9cqUEU2C.jpg', '2024-03-30 20:05:36', '2024-03-30 20:05:36', NULL, NULL, NULL, NULL, NULL),
(43, 'baptism', 'section4_photos', 'baptism_content-section4_photos-03', NULL, NULL, 'images/QCXel6JVAdjCMz62G8trsT7R7FfrPAJ2LA2b0hZh.jpg', '2024-03-30 20:05:48', '2024-03-30 20:05:48', NULL, NULL, NULL, NULL, NULL),
(44, 'baptism', 'section4_photos', 'baptism_content-section4_photos-04', NULL, NULL, 'images/maPLXzs1lrOhY5vliiv5mBkvzF4Wg3o1HA4keq98.jpg', '2024-03-30 20:06:15', '2024-03-30 20:06:15', NULL, NULL, NULL, NULL, NULL),
(45, 'baptism', 'section4_photos', 'baptism_content-section4_photos-05', NULL, NULL, 'images/hlPGs1QoFyLqUS3y8ziau6bccAu5XBHOyVESwpJL.jpg', '2024-03-30 20:06:28', '2024-03-30 20:06:28', NULL, NULL, NULL, NULL, NULL),
(46, 'baptism', 'section4_photos', 'baptism_content-section4_photos-06', NULL, NULL, 'images/Eqak4NVtMuArsYsHdrmJoxrJSpImguJizzJPKKx5.jpg', '2024-03-30 20:06:43', '2024-04-13 17:54:52', NULL, NULL, NULL, NULL, NULL),
(47, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-01', 'Baby Naming', 'Thank you to the celebrant for creating a beautiful and meaningful name celebration ceremony for me. Your guidance and support throughout the process were deeply appreciated.', 'images/6Iu3HZ6TbyOwV4V7MN6PQfKFseGYckHUWSGOv2vO.jpg', '2024-03-30 21:14:44', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(48, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-02', 'Children baptism', 'We are immensely grateful to the celebrant for officiating our child\'s baptism ceremony. Their warmth and kindness made the occasion truly memorable for our family.', 'images/93zcn0zSHI7u9ePK7Kho4OKZnmbiLjaoMo9XDBmk.jpg', '2024-03-30 21:15:58', '2024-03-30 21:15:58', NULL, NULL, NULL, NULL, NULL),
(49, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-03', 'Adult Baptism', 'Thank you to the celebrant for creating a beautiful and heartfelt adult baptism ceremony. Your guidance and support during this important step in my faith journey mean the world to me.', 'images/aOlUa64Gl7pGnnXZZkVwbhfKgQksxdNjPsBypcJT.jpg', '2024-03-30 21:17:17', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(50, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-04', 'Baby Naming', 'A heartfelt thank you to the celebrant for officiating our child\'s baptism ceremony with such care and compassion. It was a joyous and memorable occasion for our family.', 'images/G9JxRudHmtUJZsBjZ5L4GADzUj4lZHVbQy6juAeb.jpg', '2024-03-30 21:18:35', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(51, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-05', 'Baptism', 'A heartfelt thank you to the celebrant for leading me through my adult baptism ceremony with such reverence and compassion. It was a truly transformative experience.', 'images/sWEGhkTLsNtT43958YJn89yspTSVoyAgNn8rbYFq.jpg', '2024-03-30 21:19:27', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(52, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-06', 'Baby baptism', 'We want to express our sincere appreciation to the celebrant for their role in our child\'s baptism ceremony. Their gentle demeanor and thoughtful words made the event truly special.', 'images/XoNjwK4edYwZBCsppsuFra4afH4yRsgBx9RErIp5.jpg', '2024-03-30 21:21:20', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(53, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-07', 'Name celebration', 'I am so grateful to the celebrant for your role in my baby\'s name celebration ceremony. Your kindness and sincerity made the event truly memorable for me and my loved ones', 'images/FILOdqviHPDaeyO2gg5IA7TNUvijyZtRekNyP0vG.jpg', '2024-03-30 21:22:35', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(54, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-08', 'Baby Naming', 'I am so grateful to the celebrant for your role in my baby\'s name celebration ceremony. Your kindness and sincerity made the event truly memorable for me and my loved ones', 'images/9RUJTQ2xGSSfS0yRaNgOtd9gaNyiniZ8vW4xFuvW.jpg', '2024-03-30 21:23:26', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(55, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-09', 'Baptism', 'Thank you to the celebrant for creating a beautiful and meaningful baptism ceremony for our child. Your guidance and support throughout the process were invaluable.', 'images/T9x4bqJmDHfEnvXAZyfk45B2KGH9GAtMjTI9nGOc.jpg', '2024-03-30 21:24:16', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(56, 'baptism', 'section5_testimonials', 'baptism_content-section5_testimonials-10', 'Name celebration', 'Thank you to the celebrant for creating a beautiful and meaningful name celebration ceremony for me. Your guidance and support throughout the process were deeply appreciated.', 'images/qqFGrYTr0OFa5eo52T5sXxGqEL31RdCGXNLsRvfb.jpg', '2024-03-30 21:26:01', '2024-04-16 15:57:50', NULL, NULL, NULL, NULL, NULL),
(57, 'memorial', 'section1_image_text', 'memorial_content-section1_image_text-01', 'Honoring Loved Ones: Commemorating Life\'s Memories', 'These ceremonies honor the memories of our loved ones who have passed on. I craft services to pay tribute to their legacies, choosing every word and gesture with love and respect. I believe in the healing power of these ceremonies to offer solace and closure to grieving hearts. It\'s an honor to support families during their time of loss, creating a memorial service that celebrates lives lived and enduring bonds of love.', 'images/yr8dw8w2A1UWZSal6iXP2S8s2DX9Lfa7wgsAR5UO.jpg', '2024-03-30 21:31:22', '2024-03-30 21:31:22', NULL, NULL, NULL, NULL, NULL),
(58, 'memorial', 'section2_cards', 'memorial_content-section2_cards-01', 'Memorial Services', 'This service involves leading readings and offering words of comfort during memorial ceremonies or funerals. We carefully select passages that honor the deceased and provide solace to grieving families. Our aim is to create a comforting atmosphere where memories can be cherished and hearts can find healing.', 'images/bB1NYvhHgwc2Cw8LBbMUeUqPebQNe879j8O0AUnk.jpg', '2024-03-30 21:34:16', '2024-03-30 21:34:16', NULL, NULL, NULL, NULL, NULL),
(59, 'memorial', 'section3_phrase', 'memorial_content-section3_phrase-01', '\"WHAT WE HAVE ONCE ENJOYED DEEPLY WE CAN NEVER LOSE. ALL THAT WE LOVE DEEPLY BECOMES A PART OF US.\"', 'HELEN KELLER', 'images/Uu5RR7XKZDW0STZgIDM6qzygfbvaeQWJgOKTl5XJ.jpg', '2024-03-30 21:35:48', '2024-03-30 21:35:48', NULL, NULL, NULL, NULL, NULL),
(60, 'memorial', 'section4_photos', 'memorial_content-section4_photos-01', NULL, NULL, 'images/hvYT32kglF71TsNT3PzKEZXxv4QF6rjwQfz0QZFm.jpg', '2024-03-30 21:42:29', '2024-03-30 21:42:29', NULL, NULL, NULL, NULL, NULL),
(61, 'memorial', 'section4_photos', 'memorial_content-section4_photos-02', NULL, NULL, 'images/WMVKfHur9Wxz2pecEPeENQpA6IVVFrOsTGuUj3H0.jpg', '2024-03-30 21:42:45', '2024-03-30 21:42:45', NULL, NULL, NULL, NULL, NULL),
(62, 'memorial', 'section4_photos', 'memorial_content-section4_photos-03', NULL, NULL, 'images/bedt1rKVr9JU1E4eSCzIEYk7ufqmcp9EuajnkQlu.jpg', '2024-03-30 21:43:30', '2024-03-30 21:43:30', NULL, NULL, NULL, NULL, NULL),
(63, 'memorial', 'section4_photos', 'memorial_content-section4_photos-04', NULL, NULL, 'images/oD1QfoQtPpkkZVXppToz898EtNTkpbnDus5FwhUw.jpg', '2024-03-30 21:43:43', '2024-03-30 21:43:43', NULL, NULL, NULL, NULL, NULL),
(64, 'memorial', 'section4_photos', 'memorial_content-section4_photos-05', NULL, NULL, 'images/i9ityKpYMaxTUKuSfKDwL8winIZGWxJxkI23tvnz.jpg', '2024-03-30 21:43:55', '2024-03-30 21:43:55', NULL, NULL, NULL, NULL, NULL),
(65, 'memorial', 'section4_photos', 'memorial_content-section4_photos-06', NULL, NULL, 'images/cEhYv6U9iekCToBW1U2LeEUq3Ris744UDwyL7AmI.jpg', '2024-03-30 21:44:08', '2024-03-30 21:44:08', NULL, NULL, NULL, NULL, NULL),
(66, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-01', 'Thank you', 'The celebrant\'s readings and words of comfort during our loved one\'s memorial service were incredibly touching and heartfelt. They provided solace and strength during such a difficult time.', 'images/tRsFC7bxvhoWMF2kRBgC9RmKxctIP5ppW9vLTv0B.jpg', '2024-03-30 21:45:37', '2024-04-16 15:55:00', NULL, NULL, NULL, NULL, NULL),
(67, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-02', 'Thank you', 'We are so grateful for the celebrant\'s guidance and comforting words during our family member\'s funeral. Their readings brought a sense of peace and unity to everyone gathered.', 'images/Jmsu8GaMvQPRYwZdLEjnIiKEfdoVdBXqH13e84OI.jpg', '2024-03-30 21:46:18', '2024-04-16 15:55:00', NULL, NULL, NULL, NULL, NULL),
(68, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-03', 'Thank you', 'The celebrant\'s compassionate presence and thoughtful readings truly made a difference in our grieving process. Their words offered comfort and hope when we needed it most.', 'images/ngAd85qYYyEopBAOpbUB05IegyMSzKU2SbLt0zg1.jpg', '2024-03-30 21:46:41', '2024-04-16 15:55:00', NULL, NULL, NULL, NULL, NULL),
(69, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-04', 'Thank you', 'During our time of loss, the celebrant\'s readings and words of comfort provided a sense of reassurance and support. Their empathetic approach helped us find moments of peace amidst the pain.', 'images/GH1bWkzS6ijuggTKw0eBuw95VEgGMmmkMDdyio9b.jpg', '2024-03-30 21:47:01', '2024-04-16 15:52:45', NULL, NULL, NULL, NULL, NULL),
(70, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-05', 'Thank you', 'The celebrant\'s readings and words of comfort brought warmth and solace to our hearts during our dear friend\'s funeral. Their presence was a source of strength for everyone present.', 'images/wczbdu5tmgkaKm9FV9wIB9XUwkbaNWOQYNSrjuCP.jpg', '2024-03-30 21:47:26', '2024-04-16 15:52:45', NULL, NULL, NULL, NULL, NULL),
(71, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-06', 'Thank you', 'We want to extend our heartfelt gratitude to the celebrant for their compassionate readings and words of comfort during our loved one\'s memorial service. They truly helped us find peace during a difficult time.', 'images/LgYwHUwaYH59XFuNxkO6wxao1WIid6VjpmSHtikN.jpg', '2024-03-30 21:47:56', '2024-04-16 15:52:45', NULL, NULL, NULL, NULL, NULL),
(72, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-07', 'Thank you', 'The celebrant\'s readings and words of comfort were a guiding light during our family member\'s funeral. Their sensitivity and empathy created a space for healing and reflection.', 'images/xN6wOm7weklpqsuPAmKYPpBqG7WQXyXBUcWRV4o7.jpg', '2024-03-30 21:48:26', '2024-04-16 15:55:00', NULL, NULL, NULL, NULL, NULL),
(73, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-08', 'Thank you', 'We are deeply appreciative of the celebrant\'s comforting presence and heartfelt readings during our dear grandmother\'s memorial service. Their words brought comfort to all who attended.', 'images/DZvegNn6JzAKOOsUKx5ZpNpUtbreKG8LwNkOZHOP.jpg', '2024-03-30 21:48:47', '2024-04-16 15:52:45', NULL, NULL, NULL, NULL, NULL),
(74, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-09', 'Thank you', 'The celebrant\'s readings and words of comfort were a source of strength and solace during our loved one\'s funeral. Their compassionate approach helped us navigate our grief with grace.', 'images/Z5UyvHdeKZ93APL35wvFesBhwItfvDqvA9eOhBtn.jpg', '2024-03-30 21:49:12', '2024-04-16 15:52:45', NULL, NULL, NULL, NULL, NULL),
(75, 'memorial', 'section5_testimonials', 'memorial_content-section5_testimonials-10', 'Thank you', 'The celebrant\'s readings and words of comfort touched our hearts deeply during our friend\'s memorial service. Their empathy and sincerity made a difficult day more bearable.', 'images/UWKXk3RixE6VUT35nt20uVl1h2YX48gY4qXgR09j.jpg', '2024-03-30 21:49:38', '2024-04-16 15:52:45', NULL, NULL, NULL, NULL, NULL),
(76, 'masterclass', 'section1_master', 'masterclass_content-section1_image_text-01', 'Master Class - Michelle Meghie Dawn', 'Master classes are personalized conversations tailored to illuminate your path forward. In these intimate sessions, you\'ll share your thoughts, listen attentively, and receive guidance from seasoned professionals invested in your success. It\'s a safe space where clarity is found, decisions are made, and aspirations are celebrated, empowering you to confidently navigate your journey ahead.', 'images/BXxSQrrXIAFZW08a2TroYfYKEmFQtiaP7eUW9G7F.png', '2024-03-30 22:29:55', '2024-04-11 12:40:29', NULL, NULL, NULL, NULL, NULL),
(77, 'masterclass', 'section2_cards', 'masterclass_content-section2_cards-01', 'WEDDING', 'Our masterclass wedding service provides expert guidance for couples considering marriage or strengthening their bond. Through interactive sessions, we offer valuable insights to navigate complexities and make informed decisions about the future. We empower couples to build a strong foundation for a lasting partnership by exploring communication, shared values, and future goals.', 'images/Yd0t04XYoZuG4kshYO5yqVLwRKDzIDG6Cf3e9Bnh.jpg', '2024-03-30 22:34:18', '2024-03-30 22:34:18', NULL, NULL, NULL, NULL, NULL),
(78, 'masterclass', 'section2_cards', 'masterclass_content-section2_cards-02', 'BAPTISM', 'Our baptism masterclass offers essential guidance for parents preparing for their child\'s baptism or deepening their family\'s spiritual connection. Through interactive sessions, we provide insights to navigate the significance of the ceremony and foster a deeper understanding of faith within the family. Whether new to parenting or seeking spiritual growth, our masterclass empowers parents to embrace their role in nurturing their child\'s spiritual journey.', 'images/qNVc2Py4cuN7Qov4Bas88y4nN5qOHXFXppZhMaTm.jpg', '2024-03-30 22:36:30', '2024-03-30 22:36:30', NULL, NULL, NULL, NULL, NULL),
(79, 'masterclass', 'section2_cards', 'masterclass_content-section2_cards-03', 'MEMORIAL', 'Our memorial support service offers compassionate guidance for those coping with loss and grief. Through personalized sessions, we provide a safe space to share emotions, memories, and honor loved ones. Our facilitators offer empathetic listening and practical coping strategies to help navigate the grieving process with resilience and strength.', 'images/mFoCtbyIqjPc8QCMN5og4Od9S5BOvkBgyM9ivJ6L.jpg', '2024-03-30 22:41:46', '2024-04-12 21:06:40', NULL, NULL, NULL, NULL, NULL),
(80, 'masterclass', 'section3_youtube', 'masterclass_content-section3_youtube', NULL, NULL, NULL, '2024-03-30 22:52:16', '2024-04-11 12:21:32', 'p7EY5giCIlU', NULL, NULL, NULL, NULL),
(81, 'masterclass', 'section4_masterclass_title', 'masterclass_content-section4_title', 'Coming Dates', 'Master classes are personalized conversations tailored to illuminate your path forward. In these intimate sessions, you\'ll share your thoughts, listen attentively, and receive guidance from seasoned professionals invested in your success. It\'s a safe space where clarity is found, decisions are made, and aspirations are celebrated, empowering you to confidently navigate your journey ahead.', NULL, '2024-03-30 23:02:16', '2024-03-30 23:02:16', NULL, NULL, NULL, NULL, NULL),
(82, 'masterclass', 'section4_masterclass', 'masterclass_content-section4_classes-01', 'Master Class Title One', NULL, NULL, '2024-03-30 23:11:22', '2024-04-11 09:14:01', NULL, '2024-04-20', '04:00:00', 'This is a location', 'https://www.google.com'),
(83, 'masterclass', 'section4_masterclass', 'masterclass_content-section4_classes-02', 'Master Class Title Anoter', NULL, NULL, '2024-03-30 23:13:36', '2024-04-11 09:14:01', NULL, '2024-05-20', '21:30:00', 'New address location', 'https://www.eventbrite.ca/l/sell-tickets-online/?&utm_source=google&utm_medium=cpc&utm_campaign=CA_BAU_GA01_01_NB_1PP_Clicks_Ticket&utm_term=ticketing%20platform&gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZjhsr2g2_KnRLVPQ-OY1YtBQIISiZjBJaH76Jk_GhLkfl6IKaPkPmRoCw78QAvD_BwE&gclsrc=aw.ds'),
(86, 'profile', 'section1_profile', 'profile_content-section1_MicheleProfile', 'Michelle Meghie Dawn', 'I enjoy connecting with people from diverse backgrounds, embracing their stories, cultures, and beliefs. With a Bachelor of Arts in Sociology and years of social services experience, I bring empathy and understanding to every interaction. As an event planner, I\'m enthusiastic and creative, dedicated to crafting unforgettable experiences that reflect your individuality on your special day.', 'images/Ni510SCAXSdnN8wVP12roJpkkyv25Gw0Grptexbk.png', '2024-03-30 23:37:42', '2024-03-30 23:37:42', NULL, NULL, NULL, NULL, NULL),
(87, 'profile', 'section2_youtube', 'profile_content-section2_youtube', NULL, NULL, NULL, '2024-03-30 23:39:11', '2024-03-30 23:39:11', 'p7EY5giCIlU', NULL, NULL, NULL, NULL),
(88, 'profile', 'section3_partners_title', 'profile_content-section3_title', 'Our Partners', NULL, NULL, '2024-03-30 23:41:35', '2024-03-30 23:41:35', NULL, NULL, NULL, NULL, NULL),
(89, 'profile', 'section3_partners', 'profile_content-section3_partners-01', NULL, NULL, 'images/QaJWOfTlX2NhBTpEsCyq6PgbcvUQn3vcKpQnelyl.svg', '2024-03-30 23:42:32', '2024-04-12 20:33:19', NULL, NULL, NULL, NULL, NULL),
(90, 'profile', 'section3_partners', 'profile_content-section3_partners-02', NULL, NULL, 'images/pjz4cvfvOCLsA8OB2EnX7RA5Wy5kF8vzjQe7iwy2.png', '2024-03-30 23:42:41', '2024-03-30 23:42:41', NULL, NULL, NULL, NULL, NULL),
(117, 'settings', 'section1_settings', 'settings_content-section1_settings-1', NULL, NULL, 'images/amfA4xZLB9JQEIdc002XNvdD19D9Im33OEpYE3VI.png', '2024-04-11 14:49:13', '2024-04-13 10:02:39', NULL, NULL, NULL, NULL, NULL),
(137, 'masterclass', 'section4_masterclass', 'masterclass_content-section_class-3', 'Enter Title', NULL, NULL, '2024-04-15 19:27:21', '2024-04-19 20:47:22', NULL, '2024-04-29', '13:27:21', 'Enter location', 'https://www.google.com');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_02_24_234415_create_images_table', 1),
(6, '2024_02_27_195218_create_generalcards_table', 1),
(7, '2024_03_21_010803_add_columns_to_general_cards_table', 1),
(8, '2024_03_26_201446_add_columns_to_general_cards_table', 1),
(9, '2024_03_29_002242_make_title_and_description_nullable_in_general_cards_table', 1),
(10, '2024_03_31_003455_change_description_to_text_in_general_cards_table', 1),
(11, '2024_03_31_004100_change_eticket_link_column_in_general_cards_table', 1),
(12, '2024_04_02_154851_create_blogs_table', 1),
(13, '2024_04_02_155057_create_contact_forms_table', 1),
(14, '2024_04_02_155244_create_contact_me_table', 1),
(15, '2024_04_02_155349_create_social_media_table', 1),
(16, '2024_04_02_171137_drop_tables', 1),
(17, '2024_04_02_171349_drop_contactme', 1),
(18, '2024_04_04_175247_update_general_cards_table_nullable_columns', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'main', '9a75b121eecbcedb2acd66fc175a2230eb2f45d8e6b634b36ac4e55d415b7f11', '[\"*\"]', '2024-04-11 18:03:02', NULL, '2024-04-11 18:03:01', '2024-04-11 18:03:02'),
(2, 'App\\Models\\User', 1, 'main', '823a52e664c86043e0635924f548d3fe4ffbd45f8df38bfae285ce38618fdf82', '[\"*\"]', '2024-04-11 19:38:09', NULL, '2024-04-11 19:38:08', '2024-04-11 19:38:09'),
(3, 'App\\Models\\User', 1, 'main', 'ed05387cc9d1de18610469e407404f2368d89521c3544a61b65e0821216d0ee1', '[\"*\"]', '2024-04-19 20:16:39', NULL, '2024-04-11 21:38:44', '2024-04-19 20:16:39'),
(4, 'App\\Models\\User', 1, 'main', '7cc883c8aadf94c912d11be8379b184bef685dc491e36aaa0427815260423e65', '[\"*\"]', '2024-04-12 19:48:28', NULL, '2024-04-11 22:18:50', '2024-04-12 19:48:28'),
(5, 'App\\Models\\User', 1, 'main', 'dad36971e8464284b9edd56170ce9ba03bff56e5ff0afb7112d1caf39c2715f3', '[\"*\"]', '2024-04-11 22:20:49', NULL, '2024-04-11 22:19:51', '2024-04-11 22:20:49'),
(6, 'App\\Models\\User', 1, 'main', 'fce80348839e2989e9110a04e1d934f83ddd65a0417c9f3cd3253d728f2ee105', '[\"*\"]', '2024-04-11 22:25:50', NULL, '2024-04-11 22:25:50', '2024-04-11 22:25:50'),
(7, 'App\\Models\\User', 1, 'main', '92e57b47abfaa9c18c3a7dcbf26afd849932021dfd6c1554a910ded5f2320b17', '[\"*\"]', '2024-04-13 18:56:37', NULL, '2024-04-11 22:44:16', '2024-04-13 18:56:37'),
(8, 'App\\Models\\User', 1, 'main', 'bab1d6db98353225112d3fff0cfa9c05127e35fd73c53ff9994ab5e0571de60d', '[\"*\"]', '2024-04-12 16:29:25', NULL, '2024-04-12 16:29:17', '2024-04-12 16:29:25'),
(9, 'App\\Models\\User', 2, 'main', 'deae1283f284513d7197f0f391735b1ec69adc9d07e60f6af4dd0f6de88ec03b', '[\"*\"]', '2024-04-12 16:59:17', NULL, '2024-04-12 16:59:17', '2024-04-12 16:59:17'),
(10, 'App\\Models\\User', 1, 'main', 'c6f6674f869bb53184101338c051b9ac0d2399f55e6506b0427b688904fd8dc4', '[\"*\"]', '2024-04-12 20:25:29', NULL, '2024-04-12 17:09:32', '2024-04-12 20:25:29'),
(11, 'App\\Models\\User', 1, 'main', '5004c7c3eab01a9c6ae090f6f70e2feeedd4e6026d12aea9e938ec2fc0a90f8c', '[\"*\"]', '2024-04-12 20:53:41', NULL, '2024-04-12 19:50:58', '2024-04-12 20:53:41'),
(12, 'App\\Models\\User', 1, 'main', '1f4868a7525bd79da7609c94213606a7e01fa7727a82fbb255af62197823bf0c', '[\"*\"]', '2024-04-12 20:54:25', NULL, '2024-04-12 20:54:24', '2024-04-12 20:54:25'),
(13, 'App\\Models\\User', 2, 'main', '9f7b2bccb6e752cbba84dbd2e5203c5a68474689004757ed37b915cfac733ed0', '[\"*\"]', '2024-04-12 20:54:41', NULL, '2024-04-12 20:54:40', '2024-04-12 20:54:41'),
(14, 'App\\Models\\User', 2, 'main', 'ebe062288b295c593af95bfa2e71d0ff008ef26f0f959d3dcdc0b24df7f5af14', '[\"*\"]', '2024-04-12 21:06:04', NULL, '2024-04-12 20:55:26', '2024-04-12 21:06:04'),
(15, 'App\\Models\\User', 1, 'main', '67280545aa2e9b85bca5fbded1ed8e40f2c117f02eecc95bf6683bbd5281b5f1', '[\"*\"]', '2024-04-12 21:16:50', NULL, '2024-04-12 21:06:35', '2024-04-12 21:16:50'),
(16, 'App\\Models\\User', 1, 'main', 'a1c648a366011a6cf9dc97e32a23fd5d0f1531ea7cbdd89fcc3fa1cb98762417', '[\"*\"]', '2024-04-13 18:51:16', NULL, '2024-04-12 21:12:02', '2024-04-13 18:51:16'),
(17, 'App\\Models\\User', 1, 'main', '9dc47f3e3bf7afd2d51d2e6462f71eedc508243af4e6a8f6effa2eccc548cf2d', '[\"*\"]', '2024-04-12 21:18:07', NULL, '2024-04-12 21:17:53', '2024-04-12 21:18:07'),
(18, 'App\\Models\\User', 1, 'main', '5b22a34512cff0648ff557d667758ead200373c81c772810b4564ed3dcafc65d', '[\"*\"]', '2024-04-12 21:24:40', NULL, '2024-04-12 21:22:49', '2024-04-12 21:24:40'),
(19, 'App\\Models\\User', 2, 'main', '12ee2057c7511bf2b1acd3eef3819ddb3918fcfcdc44f1e3fef65422740adf19', '[\"*\"]', '2024-04-12 21:32:32', NULL, '2024-04-12 21:26:09', '2024-04-12 21:32:32'),
(20, 'App\\Models\\User', 1, 'main', '8af38e701c078d8bb01ccf9c516609fab7ca9542bb9abb14970f7b529e94d997', '[\"*\"]', '2024-04-12 21:33:58', NULL, '2024-04-12 21:33:08', '2024-04-12 21:33:58'),
(21, 'App\\Models\\User', 1, 'main', 'f35e02eee60f8e006b6365dcb9365a3cc296c0f257473646f03a65308049a525', '[\"*\"]', '2024-04-12 21:37:15', NULL, '2024-04-12 21:34:51', '2024-04-12 21:37:15'),
(22, 'App\\Models\\User', 2, 'main', 'fdc0420a3966e7abfed9ed3b0aa03d9b2758f4a0c5f087f587fefb5cfc0643b8', '[\"*\"]', '2024-04-12 21:41:18', NULL, '2024-04-12 21:37:39', '2024-04-12 21:41:18'),
(23, 'App\\Models\\User', 1, 'main', 'ea6a7dabff77516521fca37813af84fd1cb2d863f3b9c47ad8c931b941dad36b', '[\"*\"]', '2024-04-12 21:42:08', NULL, '2024-04-12 21:42:08', '2024-04-12 21:42:08'),
(24, 'App\\Models\\User', 1, 'main', '32dd1bd181975ff176bc5e37a3edbab13cc41ee2a09fae68d77248981a4e1d95', '[\"*\"]', '2024-04-12 21:47:36', NULL, '2024-04-12 21:43:51', '2024-04-12 21:47:36'),
(25, 'App\\Models\\User', 2, 'main', '8dd6c75e2dde8c917419ba1e6b306fae822621ae16a1f4874d38f2eefd82d11e', '[\"*\"]', '2024-04-12 21:48:00', NULL, '2024-04-12 21:48:00', '2024-04-12 21:48:00'),
(26, 'App\\Models\\User', 1, 'main', 'f85e116a01bf7c81b5133c56c9fecb24e53744b4fd3adf118b5b41c553d9b878', '[\"*\"]', '2024-04-12 21:51:28', NULL, '2024-04-12 21:48:41', '2024-04-12 21:51:28'),
(27, 'App\\Models\\User', 2, 'main', '27fc3079b8d4f07d5d99a5b01a57c17aa90e224595abb552e4afc0ab0cfce279', '[\"*\"]', '2024-04-12 21:54:10', NULL, '2024-04-12 21:51:44', '2024-04-12 21:54:10'),
(28, 'App\\Models\\User', 1, 'main', 'ce6888b5adefbb81ea41b2004071e5839feb615700ff1a0ce583dc93d2d54f05', '[\"*\"]', '2024-04-12 21:59:27', NULL, '2024-04-12 21:59:26', '2024-04-12 21:59:27'),
(29, 'App\\Models\\User', 3, 'main', '32364498723b1e1f40c6ecbc28514516e767ac48014a662e3e4763087225779b', '[\"*\"]', '2024-04-12 21:59:51', NULL, '2024-04-12 21:59:51', '2024-04-12 21:59:51'),
(30, 'App\\Models\\User', 2, 'main', 'e01269b77edd3cda14145755c17b888352d272e6782988549e170b7456ebbc1d', '[\"*\"]', '2024-04-12 22:00:24', NULL, '2024-04-12 22:00:24', '2024-04-12 22:00:24'),
(31, 'App\\Models\\User', 1, 'main', '3f17558a315ed97efd462047e27cb990ed595c84bc872aa0a4f77397ce851f09', '[\"*\"]', '2024-04-12 22:05:50', NULL, '2024-04-12 22:03:06', '2024-04-12 22:05:50'),
(32, 'App\\Models\\User', 1, 'main', '3dde3e2933af3462f638cb1ead375c2c6518b8915ba605c5b41fe9883d52889b', '[\"*\"]', '2024-04-12 22:08:29', NULL, '2024-04-12 22:06:22', '2024-04-12 22:08:29'),
(33, 'App\\Models\\User', 1, 'main', '9dfc8a1decd4825907ccc3c9b713a0091cf62ace5f5966469e061fb377d6a9f1', '[\"*\"]', '2024-04-12 22:09:55', NULL, '2024-04-12 22:08:41', '2024-04-12 22:09:55'),
(34, 'App\\Models\\User', 1, 'main', '268d93d0d89d46d149990a5c105808738019ad03904c55f1cb1ee2747946ee33', '[\"*\"]', '2024-04-12 22:10:28', NULL, '2024-04-12 22:10:12', '2024-04-12 22:10:28'),
(35, 'App\\Models\\User', 1, 'main', '908ce771163f011273188111cc876e31c3fb81b3c997671558657d6c5fccc102', '[\"*\"]', '2024-04-12 22:10:40', NULL, '2024-04-12 22:10:40', '2024-04-12 22:10:40'),
(36, 'App\\Models\\User', 3, 'main', 'e72eb085045d6dfee053ae2ddd23230a685723ffd7de743fe5fb4e32acf088b6', '[\"*\"]', '2024-04-12 22:11:14', NULL, '2024-04-12 22:10:50', '2024-04-12 22:11:14'),
(37, 'App\\Models\\User', 3, 'main', 'ff9754972e20f1125e35337903aab377fa9b04736c7071e25b181becff7166d2', '[\"*\"]', '2024-04-12 22:22:53', NULL, '2024-04-12 22:11:29', '2024-04-12 22:22:53'),
(38, 'App\\Models\\User', 3, 'main', '6adc732e10ecee99380bf6b90164af14f0913b58b92d5b718822bbeb933848e5', '[\"*\"]', '2024-04-12 22:23:17', NULL, '2024-04-12 22:23:07', '2024-04-12 22:23:17'),
(39, 'App\\Models\\User', 3, 'main', '12dcb05601e3bffee088979f7733aeeb5c91bf3aaa533fa54989ae896436688b', '[\"*\"]', '2024-04-12 22:23:57', NULL, '2024-04-12 22:23:31', '2024-04-12 22:23:57'),
(40, 'App\\Models\\User', 3, 'main', 'af4018972a109cdee49e94620437dbed7aa8038bb29f00092f6b53190d6f7311', '[\"*\"]', '2024-04-12 22:24:16', NULL, '2024-04-12 22:24:16', '2024-04-12 22:24:16'),
(41, 'App\\Models\\User', 1, 'main', '28bdd176d2ca354ab5dc0aac636cbfd069f4410c9dbbf957a84274ffbcb29111', '[\"*\"]', '2024-04-12 22:25:38', NULL, '2024-04-12 22:24:45', '2024-04-12 22:25:38'),
(42, 'App\\Models\\User', 3, 'main', '2f5cdabfaf2656bb219ff0ab47d87ec68b1273bf3c10d675b6dd72f5f335ef6c', '[\"*\"]', '2024-04-12 22:29:58', NULL, '2024-04-12 22:26:12', '2024-04-12 22:29:58'),
(43, 'App\\Models\\User', 1, 'main', '7facc7fafd32059986e7692d68274551847405e6478cc990c7cd11ca5a2bb3fd', '[\"*\"]', '2024-04-12 22:26:16', NULL, '2024-04-12 22:26:16', '2024-04-12 22:26:16'),
(44, 'App\\Models\\User', 3, 'main', '537f52a720febb368f5cb70b08c96ad250b0e0737787e9276080fbcc42680caa', '[\"*\"]', '2024-04-12 22:30:43', NULL, '2024-04-12 22:30:20', '2024-04-12 22:30:43'),
(45, 'App\\Models\\User', 3, 'main', 'c1ec3277a30284b99060358f8e74f2147fba383e8b060278a4cb5c8aaf62d159', '[\"*\"]', '2024-04-12 22:31:11', NULL, '2024-04-12 22:30:58', '2024-04-12 22:31:11'),
(46, 'App\\Models\\User', 3, 'main', 'a0f53e6b9e89737042167e3c13cd773425e6eb9e0ee39fdbcc5cd9489d7a82ac', '[\"*\"]', '2024-04-12 22:31:38', NULL, '2024-04-12 22:31:19', '2024-04-12 22:31:38'),
(47, 'App\\Models\\User', 3, 'main', '594ef8c665a4866414bdd4f5b6bd82dcd0109f8622f652531a0189782dbcac4d', '[\"*\"]', '2024-04-12 22:32:17', NULL, '2024-04-12 22:31:52', '2024-04-12 22:32:17'),
(48, 'App\\Models\\User', 3, 'main', '36d56b624d9ff5ee35b7274bef5397da3e96d415e0385ec6032282e1354020d8', '[\"*\"]', '2024-04-12 22:32:39', NULL, '2024-04-12 22:32:38', '2024-04-12 22:32:39'),
(49, 'App\\Models\\User', 1, 'main', 'c39441c6e6b631004dc16389401a921eb76ef06c19452dc7e9277c93f88ecafa', '[\"*\"]', '2024-04-12 22:34:17', NULL, '2024-04-12 22:32:57', '2024-04-12 22:34:17'),
(50, 'App\\Models\\User', 3, 'main', 'df7185ae1412e756881509b3bc84fff60b2dfa5ec5bb4631c1fa75294ab760a7', '[\"*\"]', '2024-04-12 22:34:39', NULL, '2024-04-12 22:34:29', '2024-04-12 22:34:39'),
(51, 'App\\Models\\User', 3, 'main', '6704826b091420ffed7cc086916b503f65fcb643ec1139c785d5473d861630bf', '[\"*\"]', '2024-04-12 22:36:37', NULL, '2024-04-12 22:35:02', '2024-04-12 22:36:37'),
(52, 'App\\Models\\User', 3, 'main', '6faecfef0b06f5c7a4165b1eea1da2e7494a23414786b760858c86c6255980e9', '[\"*\"]', '2024-04-12 22:38:11', NULL, '2024-04-12 22:37:01', '2024-04-12 22:38:11'),
(53, 'App\\Models\\User', 1, 'main', 'bef1f625280a55ffb4a8a73de5ff2cd750176107a9b64b9731e38ad8c5382b8f', '[\"*\"]', '2024-04-12 22:41:17', NULL, '2024-04-12 22:38:43', '2024-04-12 22:41:17'),
(54, 'App\\Models\\User', 3, 'main', 'f5fc6bb033628968a532f52e7309a130b58c4ff7e16c8e1c5174b788a01c0ed0', '[\"*\"]', '2024-04-12 22:41:48', NULL, '2024-04-12 22:41:30', '2024-04-12 22:41:48'),
(55, 'App\\Models\\User', 3, 'main', '8aa575833c27a716e0427cd93474d8ef47eb0b7881f7ae46e49fc1a61fbb5171', '[\"*\"]', '2024-04-12 22:43:27', NULL, '2024-04-12 22:42:25', '2024-04-12 22:43:27'),
(56, 'App\\Models\\User', 3, 'main', '172734d511cc79853cba0db45b4a2a20b2d75c81f9cb4689a717c2fb5bd7d411', '[\"*\"]', '2024-04-12 22:47:10', NULL, '2024-04-12 22:44:05', '2024-04-12 22:47:10'),
(57, 'App\\Models\\User', 3, 'main', 'c2c448de70e5ad77ad84feb41ecb6b19b6d2308bf77c0670953f7ccde57bd9c1', '[\"*\"]', '2024-04-12 22:50:04', NULL, '2024-04-12 22:47:37', '2024-04-12 22:50:04'),
(58, 'App\\Models\\User', 3, 'main', 'db55851a2f573462cc98f6c9f1d7ca94b26d1e7d3705c1b580ddb23b967e420b', '[\"*\"]', '2024-04-12 22:51:57', NULL, '2024-04-12 22:50:45', '2024-04-12 22:51:57'),
(59, 'App\\Models\\User', 3, 'main', '76a23570e3955cc348d0cf31157868eca3888b72f5ffdeabc5dc5a9175114fae', '[\"*\"]', '2024-04-12 22:53:37', NULL, '2024-04-12 22:52:24', '2024-04-12 22:53:37'),
(60, 'App\\Models\\User', 3, 'main', 'a969c0d29e9bf1fb3aeeb3b8ca547f4750fcd454c3e62c3f5061f075f6802cbf', '[\"*\"]', '2024-04-12 22:54:21', NULL, '2024-04-12 22:54:21', '2024-04-12 22:54:21'),
(61, 'App\\Models\\User', 1, 'main', 'cd477d3f5bd08d30c152665bb538ac6dae4c8d236318a0af957c4ef322ddbd7d', '[\"*\"]', '2024-04-12 22:55:34', NULL, '2024-04-12 22:54:41', '2024-04-12 22:55:34'),
(62, 'App\\Models\\User', 3, 'main', '3884e0050167386d195e23fea92ffb1a8df5dafab66708c9904120cc8045596d', '[\"*\"]', '2024-04-12 22:55:42', NULL, '2024-04-12 22:55:42', '2024-04-12 22:55:42'),
(63, 'App\\Models\\User', 1, 'main', '3129ed4f216d48730025481bf08e08041eedb1867f263dda7a9504f11103632f', '[\"*\"]', '2024-04-12 22:56:14', NULL, '2024-04-12 22:55:52', '2024-04-12 22:56:14'),
(64, 'App\\Models\\User', 3, 'main', '70a275e9e8a5179be8636068fd4221110f9222746b7c989a8d7a2023018d5a2b', '[\"*\"]', '2024-04-12 22:56:37', NULL, '2024-04-12 22:56:36', '2024-04-12 22:56:37'),
(65, 'App\\Models\\User', 1, 'main', '8b00dd75290069d1fd56658c3a6c3bd03b8e01cfe83300ee8babd636cb696f16', '[\"*\"]', '2024-04-12 22:58:51', NULL, '2024-04-12 22:56:46', '2024-04-12 22:58:51'),
(66, 'App\\Models\\User', 1, 'main', '6886082832fd854f8f6b9b125c212b1331bdc45aca7707ae23f62de0e6fb1f89', '[\"*\"]', '2024-04-12 23:01:51', NULL, '2024-04-12 22:59:20', '2024-04-12 23:01:51'),
(67, 'App\\Models\\User', 1, 'main', '46622e078e5c7fe4a794bec8413f95697f6518f31e22e2e51758cd683b430815', '[\"*\"]', '2024-04-12 23:05:05', NULL, '2024-04-12 23:02:14', '2024-04-12 23:05:05'),
(68, 'App\\Models\\User', 3, 'main', '4ad018469edb14bb8deeabfd0d3833b6a4cc04dab8e0caafebd3681a3a36ddcb', '[\"*\"]', '2024-04-12 23:08:54', NULL, '2024-04-12 23:05:31', '2024-04-12 23:08:54'),
(69, 'App\\Models\\User', 3, 'main', '187e86afc9080b3aa5149391ecc61ff9c61b668df4d570b0a5ac22ccfc6d69d5', '[\"*\"]', '2024-04-12 23:09:17', NULL, '2024-04-12 23:09:17', '2024-04-12 23:09:17'),
(70, 'App\\Models\\User', 1, 'main', '5778754e15ab7e8d5db57e9d15fa90998904fd3ac05a11897a4a46abc5de518c', '[\"*\"]', '2024-04-12 23:12:05', NULL, '2024-04-12 23:09:53', '2024-04-12 23:12:05'),
(71, 'App\\Models\\User', 3, 'main', '8f45cf3090608013b45171890db454681675b2921510835a1e0e78c88b576b16', '[\"*\"]', '2024-04-12 23:13:05', NULL, '2024-04-12 23:12:16', '2024-04-12 23:13:05'),
(72, 'App\\Models\\User', 1, 'main', '5d5a1d79d7808f7b0727c3050b91ce0f753306c34691169dc17ddd4f2fd0da0b', '[\"*\"]', '2024-04-13 03:33:55', NULL, '2024-04-12 23:13:35', '2024-04-13 03:33:55'),
(73, 'App\\Models\\User', 1, 'main', '5b814f778ed7035ef2fac2c61d03bb5e1e4ed8e270427bf659e2627475e87e55', '[\"*\"]', '2024-04-13 03:57:53', NULL, '2024-04-13 03:40:56', '2024-04-13 03:57:53'),
(74, 'App\\Models\\User', 3, 'main', '06ae6f4c4abd76bdff8580a7e7d816f109020bc5a12c052bc3f7af890ebf37c6', '[\"*\"]', '2024-04-13 03:58:13', NULL, '2024-04-13 03:58:12', '2024-04-13 03:58:13'),
(75, 'App\\Models\\User', 1, 'main', 'c22821cfc505ea533ee2519d9af51d3f7fff81ef2eca087452dcd6b3b4ee0238', '[\"*\"]', '2024-04-13 04:00:02', NULL, '2024-04-13 03:58:49', '2024-04-13 04:00:02'),
(76, 'App\\Models\\User', 1, 'main', 'be0c61542291276d22b4558690052e1131f40c2f85fc02d56df901db69dcad34', '[\"*\"]', '2024-04-13 04:31:17', NULL, '2024-04-13 04:29:41', '2024-04-13 04:31:17'),
(77, 'App\\Models\\User', 1, 'main', 'c1a192bbae93e6026a49bdf29b316aa604a51150118482d14489a3209a232bfd', '[\"*\"]', '2024-04-13 04:50:15', NULL, '2024-04-13 04:43:22', '2024-04-13 04:50:15'),
(78, 'App\\Models\\User', 1, 'main', 'b1a6cca5da27ba8ccc4cb70e68817017e6bb40f9777eabd0ca5152931f469ec5', '[\"*\"]', '2024-04-13 04:58:51', NULL, '2024-04-13 04:58:47', '2024-04-13 04:58:51'),
(79, 'App\\Models\\User', 1, 'main', '9ae312bec2f24f403181eb76662c41a76d11716857494211ee5d217476e407c7', '[\"*\"]', '2024-04-13 05:03:35', NULL, '2024-04-13 05:03:15', '2024-04-13 05:03:35'),
(80, 'App\\Models\\User', 1, 'main', '3777a708738c8e1af6aa1fd3402b45fb63bdabb7146ec254af3bc40595f95ab7', '[\"*\"]', '2024-04-13 07:43:52', NULL, '2024-04-13 07:36:16', '2024-04-13 07:43:52'),
(81, 'App\\Models\\User', 1, 'main', '0656014fd106333b862feff04f59998726b91d7bc04cfb30d29c11ccf5435fba', '[\"*\"]', '2024-04-13 07:45:32', NULL, '2024-04-13 07:44:23', '2024-04-13 07:45:32'),
(82, 'App\\Models\\User', 1, 'main', '66bf0db89855a6e41681fa0343d5f631a1d871cd8ef63d32d9764bb3d1d48cc9', '[\"*\"]', '2024-04-13 07:45:47', NULL, '2024-04-13 07:45:47', '2024-04-13 07:45:47'),
(83, 'App\\Models\\User', 2, 'main', '38af2871f6823111e7fc5c2c16fc2856a733c32ff9963a16e64d30bd2755d617', '[\"*\"]', '2024-04-13 07:46:37', NULL, '2024-04-13 07:46:16', '2024-04-13 07:46:37'),
(84, 'App\\Models\\User', 1, 'main', 'e4a97f98bb99073051bb47ad46531d95e02980cea280ca9e3506cadb6ed84daf', '[\"*\"]', '2024-04-13 07:51:26', NULL, '2024-04-13 07:46:46', '2024-04-13 07:51:26'),
(85, 'App\\Models\\User', 1, 'main', '4f9d5007e1602724ce009884806e106f6210f2ab8ae6fd0754436706e8198d9b', '[\"*\"]', '2024-04-13 07:59:01', NULL, '2024-04-13 07:51:51', '2024-04-13 07:59:01'),
(86, 'App\\Models\\User', 1, 'main', 'dd14e877b91a2bbd7ab17aed4bb7bd563e497613fa19f6269857651687a71a39', '[\"*\"]', '2024-04-13 07:59:21', NULL, '2024-04-13 07:59:21', '2024-04-13 07:59:21'),
(87, 'App\\Models\\User', 1, 'main', '90a962dfcb561647c0d67d97c86022dc0680dc9c75e65d84d0fc1615ca49ceec', '[\"*\"]', '2024-04-13 07:59:53', NULL, '2024-04-13 07:59:52', '2024-04-13 07:59:53'),
(88, 'App\\Models\\User', 3, 'main', '5310f8e7e424b0a1a61e636c00f197e52082caac47fd6a7f99dd79bdcfd9a8c2', '[\"*\"]', '2024-04-13 08:05:17', NULL, '2024-04-13 08:00:04', '2024-04-13 08:05:17'),
(89, 'App\\Models\\User', 3, 'main', '58dd92416d0e1d2c72602fa81387c1b04b097724547c1e7e4b4704cfcddbf50c', '[\"*\"]', '2024-04-13 08:07:38', NULL, '2024-04-13 08:06:01', '2024-04-13 08:07:38'),
(90, 'App\\Models\\User', 1, 'main', '7a3542306f7baaa43ecb37f564e2eadbbf0435cb09e1576554309b107879cae0', '[\"*\"]', '2024-04-13 08:09:55', NULL, '2024-04-13 08:07:52', '2024-04-13 08:09:55'),
(91, 'App\\Models\\User', 3, 'main', '9e90bcaa11577cac45248c3c9d3771c6ea2c828c6362c1568a624f150b90f4e8', '[\"*\"]', '2024-04-13 08:10:52', NULL, '2024-04-13 08:10:16', '2024-04-13 08:10:52'),
(92, 'App\\Models\\User', 1, 'main', '433ddb4e366a39ac7cc07819897f141db12f92ba9ae6c7cd1586fc8c3cf32770', '[\"*\"]', '2024-04-13 08:12:55', NULL, '2024-04-13 08:11:37', '2024-04-13 08:12:55'),
(93, 'App\\Models\\User', 1, 'main', 'b87568d66c3ad67bb60de9ae2c3220374b6234a276949140e2542b16b0c58f28', '[\"*\"]', '2024-04-13 08:14:59', NULL, '2024-04-13 08:13:48', '2024-04-13 08:14:59'),
(94, 'App\\Models\\User', 1, 'main', '26dfa9194972795436334b295bcb3c10541cbab6ea186ecaccae8cc4fd9c345e', '[\"*\"]', '2024-04-13 08:19:51', NULL, '2024-04-13 08:15:13', '2024-04-13 08:19:51'),
(95, 'App\\Models\\User', 1, 'main', '320551be9e2f728f8c58531891738859a094c438fcd48decbd5b9c68433522a8', '[\"*\"]', '2024-04-13 08:27:03', NULL, '2024-04-13 08:20:14', '2024-04-13 08:27:03'),
(96, 'App\\Models\\User', 1, 'main', '89f30ac1ab3ecc04280dce0e236cc9af9f7cffe338d47a934654f87d2bdc980f', '[\"*\"]', '2024-04-13 08:28:26', NULL, '2024-04-13 08:27:18', '2024-04-13 08:28:26'),
(97, 'App\\Models\\User', 1, 'main', 'ae76a698c24b8214fd15b08c7d77542ad431de08a27f2f3aeeb65b29dc66a98f', '[\"*\"]', '2024-04-13 08:29:39', NULL, '2024-04-13 08:28:45', '2024-04-13 08:29:39'),
(98, 'App\\Models\\User', 1, 'main', '4c5f3f62201d79ba0776a1eacd0e6290bb77d186c682e450f79322f0466cf79c', '[\"*\"]', '2024-04-13 08:32:05', NULL, '2024-04-13 08:29:52', '2024-04-13 08:32:05'),
(99, 'App\\Models\\User', 1, 'main', '46131974d699f57c1ae9f582c6bd23c791ea7f550a6cd59d45f167a13b839e1f', '[\"*\"]', '2024-04-13 08:33:45', NULL, '2024-04-13 08:32:24', '2024-04-13 08:33:45'),
(100, 'App\\Models\\User', 1, 'main', '6fa60d5848ff282a9fc0bc7f06be7f1f2e779735c3452623aa6dc980167fcdb6', '[\"*\"]', '2024-04-13 08:34:02', NULL, '2024-04-13 08:34:02', '2024-04-13 08:34:02'),
(101, 'App\\Models\\User', 1, 'main', 'a3705a15b260fe094cb0c6890d8af91b969926f4fae50c1188f5be116a7ea847', '[\"*\"]', '2024-04-13 08:34:27', NULL, '2024-04-13 08:34:26', '2024-04-13 08:34:27'),
(102, 'App\\Models\\User', 1, 'main', '742aa1f6b18252ed654575758eed94c2b8e23fd9dc6cbd32a3361757c4b8effd', '[\"*\"]', '2024-04-13 08:35:59', NULL, '2024-04-13 08:35:02', '2024-04-13 08:35:59'),
(103, 'App\\Models\\User', 1, 'main', '9434d8012a681d07fdc654352a28a5900729d4a39ac3dcda5cc62543979de5ab', '[\"*\"]', '2024-04-13 08:37:40', NULL, '2024-04-13 08:36:16', '2024-04-13 08:37:40'),
(104, 'App\\Models\\User', 1, 'main', '9fae933e6694e0f5feda7e52caeb481c775353e5290f27aed109b99bc50e5941', '[\"*\"]', '2024-04-13 08:39:48', NULL, '2024-04-13 08:39:20', '2024-04-13 08:39:48'),
(105, 'App\\Models\\User', 1, 'main', 'a4eb099630f695a2f221fa14dc8d07fcc4450cf2f7c29bf3d6c99037ae8a4a28', '[\"*\"]', '2024-04-13 08:40:40', NULL, '2024-04-13 08:40:04', '2024-04-13 08:40:40'),
(106, 'App\\Models\\User', 1, 'main', '68de8bdf8adb9c55b93f92952316093001f8c340c83555578f37a59df7e8ca1d', '[\"*\"]', '2024-04-13 08:44:10', NULL, '2024-04-13 08:41:05', '2024-04-13 08:44:10'),
(107, 'App\\Models\\User', 1, 'main', '21562d34e6faad6f5d3888197fe2705b8b29226dc8cdd046f48075af4db7882c', '[\"*\"]', '2024-04-13 08:44:35', NULL, '2024-04-13 08:44:24', '2024-04-13 08:44:35'),
(108, 'App\\Models\\User', 1, 'main', '8ab28f9e679b3e5bce323e05acfdbef8d68e4069a9d782a18ff303bf1e216952', '[\"*\"]', '2024-04-13 08:46:14', NULL, '2024-04-13 08:45:02', '2024-04-13 08:46:14'),
(109, 'App\\Models\\User', 1, 'main', '5f338f3d7c632ec6d8569cb6efa3bdd7819963e658346f4d614758d84813689c', '[\"*\"]', '2024-04-13 08:46:31', NULL, '2024-04-13 08:46:30', '2024-04-13 08:46:31'),
(110, 'App\\Models\\User', 3, 'main', 'fc39ce961f690cc0a43261ceb2887d49264186b46a8f02d657dfc47e4dd67bb3', '[\"*\"]', '2024-04-13 08:46:52', NULL, '2024-04-13 08:46:52', '2024-04-13 08:46:52'),
(111, 'App\\Models\\User', 3, 'main', '6ecea6bb871e43766cf6ff78d15baa6502a2f4eda50f071363e6aa331ec78c32', '[\"*\"]', '2024-04-13 08:47:22', NULL, '2024-04-13 08:47:22', '2024-04-13 08:47:22'),
(112, 'App\\Models\\User', 1, 'main', '87d45cd5f75654aab22ab75b2a94e3997bab144b92992c20064e4b2017347dea', '[\"*\"]', '2024-04-13 08:51:15', NULL, '2024-04-13 08:47:40', '2024-04-13 08:51:15'),
(113, 'App\\Models\\User', 3, 'main', '753e9e2487ddcc07eef8c63d0ca4871573bd265e3e5a3a39dffca9b08b24482d', '[\"*\"]', '2024-04-13 08:55:30', NULL, '2024-04-13 08:51:34', '2024-04-13 08:55:30'),
(114, 'App\\Models\\User', 3, 'main', '1b657f48a1633560b89fee8946fd9918a2b1a1d671b53d9aa85e063c83f279ad', '[\"*\"]', '2024-04-13 08:55:48', NULL, '2024-04-13 08:55:48', '2024-04-13 08:55:48'),
(115, 'App\\Models\\User', 1, 'main', 'e1353f5722fee4c5f0a00ba0b57a151fa57c09a5c6bf31112cfb93b8d7a7c475', '[\"*\"]', '2024-04-13 08:56:07', NULL, '2024-04-13 08:56:06', '2024-04-13 08:56:07'),
(116, 'App\\Models\\User', 2, 'main', '861bb0627db935987dcf992c807ae6deca40539266ea18012156b358bda4216e', '[\"*\"]', '2024-04-13 09:04:23', NULL, '2024-04-13 08:58:00', '2024-04-13 09:04:23'),
(117, 'App\\Models\\User', 1, 'main', 'febc83105fd57e0b78f4f357253984b5ddb956c9049dc1d0f3a38d3868b9ed0d', '[\"*\"]', '2024-04-13 09:04:44', NULL, '2024-04-13 09:04:44', '2024-04-13 09:04:44'),
(118, 'App\\Models\\User', 1, 'main', '63b896c5248c6b4ea55af968172d5fafbc2a231162e94842d587f794ee4b1b24', '[\"*\"]', '2024-04-13 09:06:38', NULL, '2024-04-13 09:06:38', '2024-04-13 09:06:38'),
(119, 'App\\Models\\User', 1, 'main', '328758afe91b74ff44c59593a2c147100b01fc5a56b922e769e0ea3e0ce025ca', '[\"*\"]', '2024-04-15 19:45:19', NULL, '2024-04-13 09:09:27', '2024-04-15 19:45:19'),
(120, 'App\\Models\\User', 1, 'main', '80fdd8a8b025613e76f4cbfe68bf5b6fbf594c38769c6552e3f7f8b4dabda87e', '[\"*\"]', '2024-04-13 17:42:01', NULL, '2024-04-13 17:42:01', '2024-04-13 17:42:01'),
(121, 'App\\Models\\User', 1, 'main', 'de1a70020f16134bfbae404a43195f7be884d3b7df5017921fedfcc09e0dc757', '[\"*\"]', '2024-04-15 19:59:09', NULL, '2024-04-13 18:04:07', '2024-04-15 19:59:09'),
(122, 'App\\Models\\User', 1, 'main', 'f63f85a6202f6da1db5a5f58495a8c03565cca5bea9d3ab1a5337fbbb645a0b9', '[\"*\"]', '2024-04-13 19:07:52', NULL, '2024-04-13 18:53:37', '2024-04-13 19:07:52'),
(123, 'App\\Models\\User', 1, 'main', '27d5d49d8a2e1b75e267801af1fec4f5e2321f699c0740fd5bd9c5603d629dbd', '[\"*\"]', '2024-04-13 18:57:44', NULL, '2024-04-13 18:57:43', '2024-04-13 18:57:44'),
(124, 'App\\Models\\User', 1, 'main', 'e863a57219bc46507de4db30d7e3ee4e46a78004978aeccd9edf9dc21c1d94cf', '[\"*\"]', '2024-04-13 19:19:36', NULL, '2024-04-13 19:17:01', '2024-04-13 19:19:36'),
(125, 'App\\Models\\User', 3, 'main', '67873fcd021f22903ef0bb64525e341ef24020a9d3212f8f1745fa32a50b6590', '[\"*\"]', '2024-04-13 19:21:41', NULL, '2024-04-13 19:21:04', '2024-04-13 19:21:41'),
(126, 'App\\Models\\User', 2, 'main', '1a229a984a80538993a4e8c7d4672716262a65111866355f4c8840913dec193f', '[\"*\"]', '2024-04-13 19:22:29', NULL, '2024-04-13 19:22:14', '2024-04-13 19:22:29'),
(127, 'App\\Models\\User', 1, 'main', '241344b951a5295150219bb4961fd3d1aac183200af692b02a88858618928892', '[\"*\"]', '2024-04-13 19:25:24', NULL, '2024-04-13 19:23:43', '2024-04-13 19:25:24'),
(128, 'App\\Models\\User', 1, 'main', 'a24d4ee7d0340f03a76abd1fc6796312e0d5cfd07fa10664524037d267c3a811', '[\"*\"]', '2024-04-14 15:48:24', NULL, '2024-04-14 15:48:23', '2024-04-14 15:48:24'),
(129, 'App\\Models\\User', 1, 'main', '2c398f3d8f0b275f6901580cc966bffaa089aab3fa30d72a38062a3f1d6f192e', '[\"*\"]', '2024-04-14 17:59:57', NULL, '2024-04-14 17:59:56', '2024-04-14 17:59:57'),
(130, 'App\\Models\\User', 1, 'main', 'edc1703e5690bf23668534c671e70a5ffcd8786cd993607d2f4617ebb4f04ca8', '[\"*\"]', '2024-04-14 18:06:32', NULL, '2024-04-14 18:06:32', '2024-04-14 18:06:32'),
(131, 'App\\Models\\User', 1, 'main', 'd30f2226fae787a23f7c2d3ed504e9dca8962a3407ab6accd534354866260434', '[\"*\"]', '2024-04-14 18:18:03', NULL, '2024-04-14 18:18:03', '2024-04-14 18:18:03'),
(132, 'App\\Models\\User', 1, 'main', 'f969e7ceb40cab0c40880a445ad46db63e0af40706c2b95c1f259edbf13d6638', '[\"*\"]', '2024-04-15 18:50:39', NULL, '2024-04-15 15:16:09', '2024-04-15 18:50:39'),
(133, 'App\\Models\\User', 1, 'main', 'd0ff9a2a74867b11acf32a199a7fbb9411b5bf95926a4be9407c17da104221d3', '[\"*\"]', '2024-04-15 15:20:41', NULL, '2024-04-15 15:20:41', '2024-04-15 15:20:41'),
(134, 'App\\Models\\User', 1, 'main', 'f7df455f9a5790d165182c0bcbee36c7c52ac5fcb5c0d243ecdb9fd16e0e914d', '[\"*\"]', '2024-04-15 15:20:41', NULL, '2024-04-15 15:20:41', '2024-04-15 15:20:41'),
(135, 'App\\Models\\User', 1, 'main', '75e8a091d500eca392caaef6872c6c12b7f2f33acfd75517c715bc59b3a18434', '[\"*\"]', NULL, NULL, '2024-04-15 18:32:30', '2024-04-15 18:32:30'),
(136, 'App\\Models\\User', 1, 'main', '83a3756b4236a12c1ea17dfff64af8be22b3864a5777068d8ec27f31e9b55fa0', '[\"*\"]', '2024-04-15 19:57:35', NULL, '2024-04-15 19:25:01', '2024-04-15 19:57:35'),
(137, 'App\\Models\\User', 1, 'main', '198e78dd309f994346f1fe33d8bf0278e02dd86048b58430665a4b14c8cb5857', '[\"*\"]', '2024-04-17 17:19:17', NULL, '2024-04-15 20:02:31', '2024-04-17 17:19:17'),
(138, 'App\\Models\\User', 1, 'main', 'f53c42469138dac570717cc34cfde72f701f5f8ba8e5e88e20ba2bfb8c100280', '[\"*\"]', '2024-04-16 15:32:36', NULL, '2024-04-16 15:31:40', '2024-04-16 15:32:36'),
(139, 'App\\Models\\User', 1, 'main', '512d81b8de19ac14edfeceb9c7ce8ae96ad6075b47f5f4b56525d30cc16da2cb', '[\"*\"]', '2024-04-16 23:50:27', NULL, '2024-04-16 17:36:01', '2024-04-16 23:50:27'),
(140, 'App\\Models\\User', 1, 'main', 'fa5413cd348c969d3c77d57cb60e4f7192807e98a7f542fbd1c9b8d0a33c3a15', '[\"*\"]', '2024-04-16 19:48:29', NULL, '2024-04-16 18:18:39', '2024-04-16 19:48:29'),
(141, 'App\\Models\\User', 1, 'main', '55801b91a0ac5c72ea44e188d99b7b06830d99ba05ea7ad8ec4ec620ddf20bb9', '[\"*\"]', '2024-04-17 16:29:22', NULL, '2024-04-17 03:51:18', '2024-04-17 16:29:22'),
(142, 'App\\Models\\User', 1, 'main', '2aa311f9fa8c8a7dd6febaab99ed2576321b38190912e99ed8b5b3cc8dd68652', '[\"*\"]', '2024-04-17 16:56:29', NULL, '2024-04-17 16:56:29', '2024-04-17 16:56:29'),
(143, 'App\\Models\\User', 1, 'main', '375208f18ffc36f6a25652549a22daf5a5f3e29c74ec38044a94b0bcdfbc3f3a', '[\"*\"]', '2024-04-19 16:18:15', NULL, '2024-04-19 16:18:14', '2024-04-19 16:18:15'),
(144, 'App\\Models\\User', 1, 'main', '6c51abcad3264bfabf1dc0c4641fc7c44a85a33fbb3c46644d40047b6df89199', '[\"*\"]', '2024-04-19 17:06:41', NULL, '2024-04-19 16:55:47', '2024-04-19 17:06:41'),
(145, 'App\\Models\\User', 6, 'main', '5280ec83e9bf2b468eb6286bbc226b3bccb16345e5cb256360caba676dbef5c3', '[\"*\"]', '2024-04-19 17:37:50', NULL, '2024-04-19 17:21:13', '2024-04-19 17:37:50'),
(146, 'App\\Models\\User', 1, 'main', '66f9eedf7b19dc8aaee7eda1e4099650e6d57c99960229b898dc2992396a83d6', '[\"*\"]', '2024-04-19 18:00:29', NULL, '2024-04-19 17:38:41', '2024-04-19 18:00:29'),
(147, 'App\\Models\\User', 1, 'main', 'f0edc8b9eb16c74ac7f97b4e6632c5a6e54ec47c22aeb854dae258201868666c', '[\"*\"]', '2024-04-19 18:48:05', NULL, '2024-04-19 18:48:05', '2024-04-19 18:48:05'),
(148, 'App\\Models\\User', 1, 'main', '245018ddf70610335ff4ba79d3084b88fbade99fa9ddb5e5b3e3ee8f30785e3c', '[\"*\"]', '2024-04-19 20:43:27', NULL, '2024-04-19 20:41:36', '2024-04-19 20:43:27'),
(149, 'App\\Models\\User', 1, 'main', 'cb68288ccfd4cbc3c264df278381cf8ec0daa725f995e3125d1a88b4f9b494f0', '[\"*\"]', '2024-04-19 21:43:38', NULL, '2024-04-19 21:43:38', '2024-04-19 21:43:38');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', NULL, '$2y$10$Uuwalxc6BtNZrumgVmY/ieGFAm1190SDQn/kulUb1qK05k.j4ZI0W', NULL, '2024-04-11 18:03:01', '2024-04-11 18:03:01'),
(2, 'Ana', 'ana@gmail.com', NULL, '$2y$10$M5S2dFdTT1JU2X86s81BPu6fEkB6dkygCE7TBS7MQAVKvt7LGp/92', NULL, '2024-04-12 16:59:17', '2024-04-12 20:53:40'),
(3, 'Caio', 'caio@gmail.com', NULL, '$2y$10$.7lYYNygQq4oJtZbhB11xecDc9OfulR.O5MoUYWGqwOLfaA6UNSrC', NULL, '2024-04-12 21:54:05', '2024-04-13 07:46:37'),
(6, 'Maria Carolina', 'mc@milestone.com', NULL, '$2y$10$5edm9UgJX8oRs7o9b6icB.gtU6ww2Q0KoBqLrxQ507rSAxj0xDEwS', NULL, '2024-04-19 17:06:36', '2024-04-19 17:06:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `general_cards`
--
ALTER TABLE `general_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general_cards`
--
ALTER TABLE `general_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
