import { NextResponse } from 'next/server'
import {
  techIcon,
  innovation,
  onlinePresence,
  WebResultTag,
  techStack,
  achievements,
} from '@/app/types/menu'

const techIconList: techIcon[] = [
  {
    image: '/images/home/techIcons/reactjs.svg',
    darkImg: '/images/home/techIcons/reactjs-darkicon.svg',
    title: 'React JS',
  },
  {
    image: '/images/home/techIcons/nextjs.svg',
    darkImg: '/images/home/techIcons/nextjs-darkicon.svg',
    title: 'Next JS',
  },
  {
    image: '/images/home/techIcons/php.svg',
    darkImg: '/images/home/techIcons/php-darkicon.svg',
    title: 'PHP',
  },
  {
    image: '/images/home/techIcons/tailwind.svg',
    darkImg: '/images/home/techIcons/tailwind-darkicon.svg',
    title: 'Tailwind CSS',
  },
  {
    image: '/images/home/techIcons/javascript.svg',
    darkImg: '/images/home/techIcons/javascript-darkicon.svg',
    title: 'JavaScript',
  },
  {
    image: '/images/home/techIcons/typescript.svg',
    darkImg: '/images/home/techIcons/typescript-darkicon.svg',
    title: 'TypeScript',
  },
  {
    image: '/images/home/techIcons/github.svg',
    darkImg: '/images/home/techIcons/github-darkicon.svg',
    title: 'GitHub',
  },
  {
    image: '/images/home/techIcons/aws.svg',
    darkImg: '/images/home/techIcons/aws-darkicon.svg',
    title: 'AWS',
  },
  {
    image: '/images/home/techIcons/html.svg',
    darkImg: '/images/home/techIcons/html-darkicon.svg',
    title: 'HTML',
  },
  {
    image: '/images/home/techIcons/css.svg',
    darkImg: '/images/home/techIcons/css-darkicon.svg',
    title: 'CSS',
  },
  {
    image: '/images/home/techIcons/shopify.svg',
    darkImg: '/images/home/techIcons/shopify-darkicon.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/techIcons/wordpress.svg',
    darkImg: '/images/home/techIcons/wordpress-darkicon.svg',
    title: 'WordPress',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Frontend\nDevelopment',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Tools &\nWorkflow',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX\nDesign',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Performance &\nOptimization',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Web\nDevelopment',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/online_img_1.png',
    title: 'IndiqueHair',
    tag: ['UX Research', 'Interface Design'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Mom & Paw',
    tag: ['Dashboard Design', 'API Integration'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.png',
    title: 'Main Hardware',
    tag: ['E-commerce Development', 'PDP Design'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.png',
    title: 'Hostbooks',
    tag: ['UX Research', 'Modern Tools Implementation'],
    link: '',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategy',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const techStackList: techStack[] = [
  {
    image: '/images/home/techStack/reactjs.svg',
    darkImg: '/images/home/techStack/reactjs-darkicon.svg',
    title: 'React JS',
  },
  {
    image: '/images/home/techStack/nextjs.svg',
    darkImg: '/images/home/techStack/nextjs-darkicon.svg',
    title: 'Next JS',
  },
  {
    image: '/images/home/techStack/php.svg',
    darkImg: '/images/home/techStack/php-darkicon.svg',
    title: 'PHP',
  },
  {
    image: '/images/home/techStack/tailwind.svg',
    darkImg: '/images/home/techStack/tailwind-darkicon.svg',
    title: 'Tailwind CSS',
  },
  {
    image: '/images/home/techStack/javascript.svg',
    darkImg: '/images/home/techStack/javascript-darkicon.svg',
    title: 'JavaScript',
  },
  {
    image: '/images/home/techStack/typescript.svg',
    darkImg: '/images/home/techStack/typescript-darkicon.svg',
    title: 'TypeScript',
  },
  {
    image: '/images/home/techStack/github.svg',
    darkImg: '/images/home/techStack/github-darkicon.svg',
    title: 'GitHub',
  },
  {
    image: '/images/home/techStack/aws.svg',
    darkImg: '/images/home/techStack/aws-darkicon.svg',
    title: 'AWS',
  },
  {
    image: '/images/home/techStack/html.svg',
    darkImg: '/images/home/techStack/html-darkicon.svg',
    title: 'HTML',
  },
  {
    image: '/images/home/techStack/css.svg',
    darkImg: '/images/home/techStack/css-darkicon.svg',
    title: 'CSS',
  },
  {
    image: '/images/home/techStack/shopify.svg',
    darkImg: '/images/home/techStack/shopify-darkicon.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/techStack/wordpress.svg',
    darkImg: '/images/home/techStack/wordpress-darkicon.svg',
    title: 'WordPress',
  },
  {
    image: '/images/home/techStack/googlecloud.svg',
    darkImg: '/images/home/techStack/googlecloud-darkicon.svg',
    title: 'Google Cloud',
  },
  {
    image: '/images/home/techStack/vscode.svg',
    darkImg: '/images/home/techStack/vscode-darkicon.svg',
    title: 'VS Code',
  },
  {
    image: '/images/home/techStack/firebase.svg',
    darkImg: '/images/home/techStack/firebase-darkicon.svg',
    title: 'Firebase',
  },
  {
    image: '/images/home/techStack/postmanapi.svg',
    darkImg: '/images/home/techStack/postmanapi-darkicon.svg',
    title: 'Postman API',
  },
  {
    image: '/images/home/techStack/graphql.svg',
    darkImg: '/images/home/techStack/graphql-darkicon.svg',
    title: 'GraphQL',
  },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions',
    year: '2023',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    techIconList,
    innovationList,
    onlinePresenceList,
    WebResultTagList,
    techStackList,
    achievementsList,
  });
};
