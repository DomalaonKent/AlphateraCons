import { Injectable } from '@angular/core';

export interface ServiceItem {
  title: string;
  image: string;
  iconImage: string;   
  icon: string;
  desc: string;
  features: string[];
}

export interface CommitmentItem {
  icon: string;
  image: string; 
  title: string;
  desc: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface IndustryItem {
  label: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  getCommitments(): CommitmentItem[] {
  return [
    {
      image: 'assets/images/quality.jpg',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      title: 'QUALITY',
      desc: 'High-quality materials and services that meet industry standards.'
    },
    {
      image: 'assets/images/safetyy.jfif',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c-4.97-2.5-8-7.1-8-11V5l8-3 8 3v6c0 3.9-3.03 8.5-8 11z"/><path d="M9 12l2 2 4-4"/></svg>`,
      title: 'SAFETY',
      desc: 'Safety is our priority in every project and operation.'
    },
    {
      image: 'assets/images/perfomance.jfif',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>`,
      title: 'PERFORMANCE',
      desc: 'We deliver with efficiency, accuracy, and reliability.'
    },
    {
      image: 'assets/images/partnerships.webp',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>`,
      title: 'PARTNERSHIP',
      desc: 'We build long-term partnerships through trust and integrity.'
    }
  ];
}

  getCoreServices(): ServiceItem[] {
  return [
    {
      title: 'MATERIALS SUPPLY',
      image: 'assets/images/Matsupply.jpg',
      iconImage: 'assets/images/Matsupply.jpg',
      icon: ``,
      desc: 'We supply a comprehensive range of construction materials including structural steel, concrete products, lumber, rebar, pipes, fittings, and all essential building supplies to keep your project running without delays.',
      features: ['Structural Steel & Rebar', 'Concrete & Lumber', 'Pipes & Fittings', 'Tools & Accessories']
    },
    {
      title: 'EQUIPMENT RENTAL',
      image: 'assets/images/equipmentrent.avif',
      iconImage: 'assets/images/equipmentrent.avif',
      icon: ``,
      desc: 'Access a wide fleet of construction and industrial equipment for rent — from heavy machinery, cranes, and excavators to power tools, scaffolding, and pumping systems.',
      features: ['Heavy Machinery & Cranes', 'Excavators & Loaders', 'Scaffolding & Power Tools', 'Flexible Rental Terms']
    },
    {
      title: 'DELIVERY SERVICES',
      image: 'assets/images/deliveryserv.jpg',
      iconImage: 'assets/images/deliveryserv.jpg',
      icon: ``,
      desc: 'Reliable, on-time delivery of materials and equipment directly to your project site. Our logistics team ensures safe handling, proper documentation, and efficient routing.',
      features: ['On-time Delivery', 'Wide Coverage Area', 'Safe & Secure Transport', 'Real-time Coordination']
    },
    {
      title: 'PROJECT SUPPORT',
      image: 'assets/images/projectsupp.webp',
      iconImage: 'assets/images/projectsupp.webp',
      icon: ``,
      desc: 'We provide end-to-end project support from planning to completion — coordinating materials, logistics, and technical resources to ensure your project stays on schedule and within budget.',
      features: ['End-to-End Coordination', 'Materials Management', 'Logistics Planning', 'Budget Monitoring']
    },
    {
      title: 'SITE CONSULTATION',
      image: 'assets/images/sitecons.jpg',
      iconImage: 'assets/images/sitecons.jpg',
      icon: ``,
      desc: 'Our experienced engineers and consultants provide expert on-site assessment, technical guidance, and tailored recommendations to help you build smarter, safer, and more efficiently.',
      features: ['On-site Assessment', 'Technical Guidance', 'Safety Compliance', 'Expert Recommendations']
    }
  ];
}

  getStats(): StatItem[] {
    return [
      {
        value: '500+',
        label: 'Projects Completed',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2"/></svg>`
      },
      {
        value: '1000+',
        label: 'Happy Clients',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
      },
      {
        value: '5000+',
        label: 'Products Available',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
      },
      {
        value: '10+',
        label: 'Years Experience',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>`
      }
    ];
  }

  getIndustries(): IndustryItem[] {
    return [
      { label: 'INFRASTRUCTURE', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80' },
      { label: 'COMMERCIAL',     image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80' },
      { label: 'INDUSTRIAL',     image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { label: 'RESIDENTIAL',    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80' },
      { label: 'DEVELOPMENT',    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80' }
    ];
  }
}