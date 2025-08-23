import { NextResponse } from "next/server";

const footerData = {
    brand: {
        name: "Awake",
        tagline: "Empowering businesses with innovative solutions. Let's create something amazing together.",
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
            // {
            //     icon: "/images/home/footerSocialIcon/twitter.svg",
            //     dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg",
            //     link: "https://twitter.com"
            // }
        ]
    },
    sitemap: {
        name: "Sitemap",
        links: [
            { name: "Contact us", url: "/contact" },
            { name: "About us", url: "/#aboutus" },
            { name: "Work", url: "/#work" },
            { name: "Services", url: "/#services" },
            { name: "Pricing", url: "/#pricing" }
        ]
    },
    // otherPages: {
    //     name: "Other Pages",
    //     links: [
    //         { name: "Error 404", url: "/not-found" },
    //         { name: "Terms & Conditions", url: "/terms-and-conditions" },
    //         { name: "Privacy Policy", url: "/privacy-policy" },
    //         { name: "Documentation", url: "/documentation" }
    //     ]
    // },
    contactDetails: {
        name:"Contact Details",
        address: "Chattarpur, New Delhi, India",
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