import React from 'react';

export interface Stat {
  label: string;
  value: string;
  subtext?: string;
  icon?: React.ReactNode;
}

export interface Post {
  id: number;
  likes: string;
  comments: string;
  shares: string;
  caption: string;
  image?: string;
  views?: string;
  url?: string;
  tiktokUrl?: string;
}

export interface Demographics {
  gender: { name: string; value: number; color: string }[];
  age: { name: string; value: number }[];
  countries: { name: string; value: number; flag: string }[];
}

export interface Profile {
  name: string;
  realName: string;
  handle: string;
  bio: string;
  tags: string[];
  avatar: string;
  totalFollowers: string;
  engagementRate: string;
  totalPosts: number;
  socials: {
    tiktok: string;
    instagram: string;
    email: string;
    youtube: string;
  };
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  startingPrice?: string; // Optional, can serve as a "starting at"
}

export interface ContentPillar {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}