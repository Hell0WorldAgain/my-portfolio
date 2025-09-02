import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "Awake",
        tagline: " Love technologies to work on and create awesome projects.",
        socialLinks: [
            {
                icon: "/images/home/footerSocialIcon/linkedin.svg",
                dark_icon: "/images/home/footerSocialIcon/linkedin_dark.svg",
                link: "https://www.linkedin.com/in/abhishek-choudhary-a63a40169/"
            },
            {
                icon: "/images/home/footerSocialIcon/github.svg",
                dark_icon: "/images/home/footerSocialIcon/github_dark.svg",
                link: "https://github.com/Hell0WorldAgain"
            },
            {
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/_naadaan.parinda_/"
            },
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact me", url: "/contact" },
            { name: "About", url: "/#aboutme" },
            { name: "Projects", url: "/#projects" },
            { name: "Skills", url: "/#techstack" },
        ]
    },
    contactDetails: {
        name:"Contact Details",
        address: "New Delhi, India",
        email: "corporateabhishek47@gmail.com",
        phone: "+91 997-303-9047"
    },
    copyright: "©2025. All Rights Reserved"
};

export const GET = async () => {
  return NextResponse.json({
    footerData
  });
};