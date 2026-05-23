import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  private aboutService = inject(AboutService);

  activeSlide = 0;
  private autoSlideInterval: any;

  whyItems = [
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
      title: 'QUALITY ASSURED',
      description: 'We deliver durable, high-quality materials and reliable engineering solutions that meet industry standards and requirements.'
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
      title: 'ON-TIME DELIVERY',
      description: 'We value your time and ensure fast, efficient, and dependable project support and material delivery.'
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
      title: 'SAFETY FIRST',
      description: 'Safety is integrated into every stage of our operations, ensuring secure and compliant project execution.'
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      title: 'TRUSTED PARTNER',
      description: 'We build strong relationships through integrity, transparency, professionalism, and consistent performance.'
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
      title: 'INNOVATIVE SOLUTIONS',
      description: 'We continuously improve our services and technical capabilities to meet the evolving needs of our clients and industries.'
    },
    {
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      title: 'RESPONSIVE SUPPORT',
      description: '24/7 availability to answer your needs, providing immediate assistance and technical guidance whenever required.'
    }
  ];

  capabilities = [
    {
      title: 'MATERIALS SUPPLY',
      description: 'We supply a comprehensive range of construction materials including structural steel, concrete products, lumber, rebar, pipes, fittings, and all essential building supplies to keep your project running without delays.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
    },
    {
      title: 'EQUIPMENT RENTAL',
      description: 'Access a wide fleet of construction and industrial equipment for rent — from heavy machinery, cranes, and excavators to power tools, scaffolding, and pumping systems. Flexible rental terms suited to your project timeline.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
    },
    {
      title: 'DELIVERY SERVICES',
      description: 'Reliable, on-time delivery of materials and equipment directly to your project site. Our logistics team ensures safe handling, proper documentation, and efficient routing — so your operations never stop due to supply delays.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`
    }
  ];

  stats = [
    { value: '500+',  label: 'Projects Completed', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` },
    { value: '1000+', label: 'Happy Clients',       icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
    { value: '5000+', label: 'Products Available',  icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>` },
    { value: '10+',   label: 'Years Experience',    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
    { value: '24/7',  label: 'Customer Support',    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % this.capabilities.length;
  }

  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + this.capabilities.length) % this.capabilities.length;
  }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}