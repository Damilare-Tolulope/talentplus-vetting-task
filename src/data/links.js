import { path } from "../constants/path";
import facebook from '../assets/images/socials/facebook.png';
import twitter from '../assets/images/socials/twitter.png';
import youtube from '../assets/images/socials/youtube.png';
import instagram from '../assets/images/socials/instagram.png';
import discord from '../assets/images/socials/discord.png';

export const links = [
    { label: "Home", link: path.HOME },
    { label: "About Us", link: path.ABOUT },
    { label: "Courses", link: path.COURSES },
    { label: "Testimonials", link: path.TESTIMONIAL },
    { label: "Community", link: path.COMMUNITY }
]

export const footerLinks = {
    usefulLinks: [
        { label: "Home", link: path.HOME },
        { label: "About Us", link: path.HOME },
        { label: "Our Courses", link: path.HOME },
        { label: "Testimonials", link: path.HOME },
        { label: "Our Community", link: path.HOME },
    ],
    community: [
        { label: "Help Centers", link: path.HOME },
        { label: "Partners", link: path.HOME },
        { label: "Suggestion", link: path.HOME },
        { label: "Blog", link: path.HOME },
        { label: "Newsletter", link: path.HOME },
    ],
    social: [
        { label: facebook, link: "#", name: "Facebook"},
        { label: twitter, link: "#", name: "Twitter"},
        { label: youtube, link: "#", name: "Youtube"},
        { label: instagram, link: "#", name: "Instagram"},
        { label: discord, link: "#", name: "Discord"},
    ]
}