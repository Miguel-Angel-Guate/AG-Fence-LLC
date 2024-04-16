
export interface SubmenuItem {
  title: string;
  link: string;
}

export interface MenuItem {
  title: string;
  link?: string; // Make link optional since submenu items won't directly have a link.
  submenu?: SubmenuItem[]; // Add an optional submenu property.
}

export interface Navs {
  _id: string;
  call: string;
  phone: string;
  menu: MenuItem[];
  menuMobile: MenuItem[];
}
// Define a type for the API response structure if it includes the `navs` property
export interface ApiNavsResponse {
  navs: Navs[];
}

export type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export interface IntroInterface {
  title: string;
  subtitle: string;
  description: string;
  secondDescription: string;
  commitments: string[];
}

export interface AdvantageProp {
  advantage: string[];
}

export interface CarouselProps {
  items: string[];
}


interface ServiceItem {
  title: string;
  description: string;
  button: string;
}

// Define the services interface
export interface Services {
  fence: ServiceItem;
  deck: ServiceItem;
  remodelation: ServiceItem;
}

export interface AGFencePoints {
  honesty: { value: string; subtitle: string };
  responsibility: { value: string; subtitle: string };
  estimate: { value: string; subtitle: string };
  price: { value: string; subtitle: string };
}


interface DetailContact {
  title: string;
  description: string;
  detailcontact: string;
}

export interface CompanyInfo {
  workHours: DetailContact;
  location: DetailContact;
  serviceArea: DetailContact;
  estimates: DetailContact;
  title: string;
  description: string;
  _id: string;
}

interface Project {
  _id: string;
  title: string;
  imageAlt: string;
}

export interface RecentProjects {
  title: string;
  subtitle: string;
  imageAlt: string;
  projects: Project[];
  seeMoreLink: string;
}
export interface TrustedBy {
  title: string;
  companies?: string[];
  _id: string;
}


export interface AboutHero {
  title: string;
  subtitle: string;
  description: string;
  commitments: string;
  _id: string;
}


interface Barguarantee {
  title: string;
  value: number;
  _id: string;
}

interface EstimadetSection {
  subtitle: string;
title: string;
gettingtouch: string;
barguarantee: {
  [key: string]: Barguarantee;
};
}

export interface AboutSections {
  estimadetsection: EstimadetSection;
}

export interface FormData  {
  name: string;
  email: string;
  message: string;
};