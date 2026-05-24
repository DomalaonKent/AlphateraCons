import { Injectable } from '@angular/core';

export interface ContactInfo {
  address: string;
  city: string;
  province: string;
  zipCode: string;
  country: string;
  phone: string;
  tin: string;
  email: string;
  emailAlt: string;
  hours: string;
  hoursAlt: string;
  lat: number;
  lng: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  getContactInfo(): ContactInfo {
    return {
      address: 'Anonas Street, Gate 2, SPPVS',
      city: 'Bibincahan, Sorsogon City',
      province: 'Sorsogon',
      zipCode: '4700',
      country: 'Philippines',
      phone: '+63 (961) 616-7332',
      tin: '616-593-756-000',
      email: 'info@alphatera.com',
      emailAlt: 'sales@alphatera.com',
      hours: 'Monday – Saturday: 8:00 AM – 5:00 PM',
      hoursAlt: 'Sunday: Closed',
      lat: 12.9826047,
      lng: 124.0064862
    };
  }

  getFaqs(): FaqItem[] {
    return [
      {
        question: 'How do I request a quotation?',
        answer: 'You can fill out our Technical Inquiry Form on this page, call us directly at +63 (961) 616-7332, or email us at sales@alphatera.com. We respond within 24 business hours.'
      },
      {
        question: 'Do you offer delivery services?',
        answer: 'Yes! We offer timely and safe delivery of construction materials and equipment directly to your project site. Coverage areas span multiple provinces across the Philippines.'
      },
      {
        question: 'What types of materials do you supply?',
        answer: 'We supply concrete & steel materials, structural components, electrical & plumbing materials, tools & accessories, and heavy equipment for rental. Contact us for a full catalog.'
      },
      {
        question: 'Can I visit your warehouse?',
        answer: 'Absolutely. We are open Monday to Saturday, 8:00 AM to 5:00 PM at Anonas Street, Gate 2, SPPVS, Bibincahan, Sorsogon City. We welcome walk-ins and scheduled visits.'
      },
      {
        question: 'Do you work with large-scale infrastructure projects?',
        answer: 'Yes. We have extensive experience supplying materials for highways, bridges, commercial towers, industrial complexes, and residential developments across the Philippines.'
      }
    ];
  }

  getSocialLinks(): SocialLink[] {
    return [
      {
        name: 'Facebook',
        url: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`
      },
      {
        name: 'LinkedIn',
        url: '#',
        icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`
      },
      {
        name: 'Instagram',
        url: '#',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`
      }
    ];
  }
}