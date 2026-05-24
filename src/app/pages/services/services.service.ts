import { Injectable } from '@angular/core';

export interface ServiceItem {
  title: string;
  image: string;
  icon: string;
  desc: string;
  features: string[];
}

export interface CommitmentItem {
  icon: string;
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
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title: 'QUALITY',
        desc: 'High-quality materials and services that meet industry standards.'
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22c-4.97-2.5-8-7.1-8-11V5l8-3 8 3v6c0 3.9-3.03 8.5-8 11z"/><path d="M9 12l2 2 4-4"/></svg>`,
        title: 'SAFETY',
        desc: 'Safety is our priority in every project and operation.'
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>`,
        title: 'PERFORMANCE',
        desc: 'We deliver with efficiency, accuracy, and reliability.'
      },
      {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>`,
        title: 'PARTNERSHIP',
        desc: 'We build long-term partnerships through trust and integrity.'
      }
    ];
  }

  getCoreServices(): ServiceItem[] {
    return [
      {
        title: 'DELIVERY SERVICES',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
        desc: 'Timely and safe delivery of construction materials, equipment, and supplies straight to your project site.',
        features: ['On-time delivery', 'Wide coverage area', 'Safe and secure transport', 'Real-time coordination']
      },
      {
        title: 'MATERIAL SUPPLY',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
        desc: 'High-quality construction materials sourced from trusted manufacturers to meet your project specifications.',
        features: ['Concrete & Steel Materials', 'Structural Components', 'Electrical & Plumbing Materials', 'Tools & Accessories']
      },
      {
        title: 'EQUIPMENT RENTAL',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2"/></svg>`,
        desc: 'Reliable and well-maintained construction equipment available for short-term or long-term rental.',
        features: ['Heavy Equipment', 'Construction Machines', 'Tools & Accessories', 'Flexible Rental Terms']
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