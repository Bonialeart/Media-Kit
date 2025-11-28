
import { Demographics, Post, Profile, Stat, Service, ContentPillar } from './types';
import React from 'react';
import { Palette, Smartphone, Video, Zap, PenTool, MonitorPlay, Search, Trophy } from 'lucide-react';

export const PROFILE: Profile = {
  name: "Bonialeart",
  realName: "Alejandro Bonilla",
  handle: "@bonialeart",
  bio: "Venezuelan Digital Illustrator & Creative Educator helping aspiring artists master tools like Clip Studio Paint & Photoshop. My videos are in Spanish, bridging the gap between complex creative software and fun, accessible art.",
  tags: ["Digital Illustration", "Tech Reviews", "Art Tutorials", "Software Tips"],
  avatar: "https://dl.dropboxusercontent.com/scl/fi/0526t9aznxnyggm1od1qw/Logocolor.jpg?rlkey=fr11c0m6eps3ll1rb839msxji&st=ewqvingz",
  totalFollowers: "9.8K",
  engagementRate: "18.55%",
  totalPosts: 39,
  socials: {
    tiktok: "https://www.tiktok.com/@bonialeart",
    instagram: "https://www.instagram.com/bonialeart",
    email: "collabs@bonialeart.com",
    youtube: "https://www.youtube.com/@bonialeart"
  }
};

export const KEY_STATS: Stat[] = [
  { label: "Followers", value: "9.8K" },
  { label: "Engagement Rate", value: "18.55%" },
  { label: "Total Posts", value: "39" },
];

export const STRIP_STATS: Stat[] = [
  { label: "Total Likes", value: "179.7K" },
  { label: "Avg. Views", value: "57.5K" },
  { label: "Avg. Likes", value: "8K" },
];

export const DEMOGRAPHICS: Demographics = {
  gender: [
    { name: 'Male', value: 54, color: '#ec4899' },
    { name: 'Female', value: 46, color: '#fbcfe8' },
  ],
  age: [
    { name: '13-17', value: 0 },
    { name: '18-24', value: 49.8 },
    { name: '25-34', value: 39.8 },
    { name: '35-44', value: 6.8 },
    { name: '45-54', value: 2.2 },
    { name: '55-64', value: 1.4 },
    { name: '65+', value: 0 },
  ],
  countries: [
    { name: 'Mexico', value: 27.4, flag: '🇲🇽' },
    { name: 'Venezuela', value: 14.5, flag: '🇻🇪' },
    { name: 'Colombia', value: 12.9, flag: '🇨🇴' },
    { name: 'Argentina', value: 10.5, flag: '🇦🇷' },
    { name: 'España', value: 9.8, flag: '🇪🇸' },
    { name: 'Others', value: 24.9, flag: '🌍' },
  ]
};

export const SERVICES: Service[] = [
  {
    title: "Dedicated Video",
    description: "A 60s vertical video fully dedicated to showcasing your product, its features, and how it fits into a creative workflow.",
    icon: React.createElement(Smartphone, { size: 32 }),
    startingPrice: "$1,500"
  },
  {
    title: "Integrated Mention",
    description: "A 30-45s segment seamlessly integrated into one of my regular art tutorials or tech reviews.",
    icon: React.createElement(Video, { size: 32 }),
    startingPrice: "$900"
  },
  {
    title: "IG Story Set",
    description: "A set of 3 frames (Hook, Info/Demo, CTA) with link sticker to drive direct traffic to your landing page.",
    icon: React.createElement(Zap, { size: 32 }),
    startingPrice: "$500"
  }
];

export const CONTENT_PILLARS: ContentPillar[] = [
  {
    title: "Digital Art Tips",
    description: "Tutorials & process",
    icon: React.createElement(Palette, { className: "text-pink-600", size: 24 }),
    color: "bg-pink-100"
  },
  {
    title: "Tech Reviews",
    description: "Gadgets for creatives",
    icon: React.createElement(MonitorPlay, { className: "text-blue-600", size: 24 }),
    color: "bg-blue-100"
  },
  {
    title: "Creative Tools",
    description: "Software & apps",
    icon: React.createElement(PenTool, { className: "text-purple-600", size: 24 }),
    color: "bg-purple-100"
  },
  {
    title: "Speedpaints",
    description: "Satisfying timelapses",
    icon: React.createElement(Zap, { className: "text-yellow-600", size: 24 }),
    color: "bg-yellow-100"
  },
  {
    title: "Artist Reviews",
    description: "Analyzing styles",
    icon: React.createElement(Search, { className: "text-green-600", size: 24 }),
    color: "bg-green-100"
  },
  {
    title: "Art Challenges",
    description: "Viral trends & fun",
    icon: React.createElement(Trophy, { className: "text-red-600", size: 24 }),
    color: "bg-red-100"
  }
];

export const TOP_POSTS: Post[] = [
  {
    id: 1,
    views: "49.1k",
    likes: "8.2k",
    comments: "142",
    shares: "520",
    caption: "Listo para llevar tu animación al siguiente nivel? Aqui 5 libros de animacion que te ayudarán The Animator",
    url: "https://www.dropbox.com/scl/fi/ahbc4rglzsp7z9k0n9t21/Mejores-libros-de-arte.mp4?rlkey=w0c1708kql7xr4d0fixin1sd9&st=b7ud40re&raw=1",
    tiktokUrl: "https://www.tiktok.com/@bonialeart/video/7516201587828591877?lang=en"
  },
  {
    id: 2,
    views: "392.4k",
    likes: "51k",
    comments: "850",
    shares: "8.7k",
    caption: "AFFINITY AHORA ES GRATIS La app profesional de diseño que todos esperaban • Diseño vectorial, edición de fotos...",
    url: "https://www.dropbox.com/scl/fi/kmr6amag83bwa93lo5qof/Afiinity-Gratis.mp4?rlkey=gdworsbbzxhawp1imguqskl80&st=w9xtr4tz&raw=1",
    tiktokUrl: "https://www.tiktok.com/@bonialeart/video/7568148809679752504?lang=en"
  },
  {
    id: 3,
    views: "568.5k",
    likes: "820",
    comments: "45",
    shares: "120",
    caption: "Tutorial de como pintar agua en digital. ⚡ Aprende a crear texturas realistas en pocos pasos.",
    url: "https://www.dropbox.com/scl/fi/55a0bllef3sd07trotq4w/Agua-tutorial.mp4?rlkey=f1vmv8n05a387778insr4g753&st=xgc3cqar&raw=1",
    tiktokUrl: "https://www.tiktok.com/@bonialeart/video/7519910057329429766?lang=en"
  },
  {
    id: 4,
    views: "26.7k",
    likes: "4913",
    comments: "89",
    shares: "402",
    caption: "La mejor página para conseguir inspiración de Arte Digital y concept art | IAMAG",
    url: "https://www.dropbox.com/scl/fi/ue08rbqcfm0rg81ks64lt/IAMAG.mp4?rlkey=c001i8ratt9xdq5ufardsu72v&st=admjzjwn&raw=1",
    tiktokUrl: "https://www.tiktok.com/@bonialeart/video/7517418556884274438?lang=en"
  }
];