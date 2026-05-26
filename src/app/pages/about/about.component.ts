import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
  private router = inject(Router);

  activeSlide = 0;
  private autoSlideInterval: any;

  whyItems = [
    {
      image: 'assets/images/qualityassu.jfif',
      title: 'QUALITY ASSURED',
      description: 'We deliver durable, high-quality materials and reliable engineering solutions that meet industry standards and requirements.'
    },
    {
      image: 'assets/images/on time delivery.webp',
      title: 'ON-TIME DELIVERY',
      description: 'We value your time and ensure fast, efficient, and dependable project support and material delivery.'
    },
    {
      image: 'assets/images/safetyfirst.jpg',
      title: 'SAFETY FIRST',
      description: 'Safety is integrated into every stage of our operations, ensuring secure and compliant project execution.'
    },
    {
      image: 'assets/images/trusterpartner.webp',
      title: 'TRUSTED PARTNER',
      description: 'We build strong relationships through integrity, transparency, professionalism, and consistent performance.'
    },
    {
      image: 'assets/images/innovative.jpg',
      title: 'INNOVATIVE SOLUTIONS',
      description: 'We continuously improve our services and technical capabilities to meet the evolving needs of our clients and industries.'
    },
    {
      image: 'assets/images/responsivesupp.jpg',
      title: 'RESPONSIVE SUPPORT',
      description: '24/7 availability to answer your needs, providing immediate assistance and technical guidance whenever required.'
    }
  ];

  capabilities = [
    {
      title: 'MATERIALS SUPPLY',
      description: 'We supply a comprehensive range of construction materials including structural steel, concrete products, lumber, rebar, pipes, fittings, and all essential building supplies to keep your project running without delays.',
      image: 'assets/images/Matsupply.jpg',
      iconImage: 'assets/images/Matsupply.jpg'
    },
    {
      title: 'EQUIPMENT RENTAL',
      description: 'Access a wide fleet of construction and industrial equipment for rent — from heavy machinery, cranes, and excavators to power tools, scaffolding, and pumping systems. Flexible rental terms suited to your project timeline.',
      image: 'assets/images/equipmentrent.avif',
      iconImage: 'assets/images/equipmentrent.avif'
    },
    {
      title: 'DELIVERY SERVICES',
      description: 'Reliable, on-time delivery of materials and equipment directly to your project site. Our logistics team ensures safe handling, proper documentation, and efficient routing — so your operations never stop due to supply delays.',
      image: 'assets/images/deliveryserv.jpg',
      iconImage: 'assets/images/deliveryserv.jpg'
    },
    {
      title: 'PROJECT SUPPORT',
      description: 'We provide end-to-end project support from planning to completion — coordinating materials, logistics, and technical resources to ensure your project stays on schedule and within budget.',
      image: 'assets/images/projectsupp.webp',
      iconImage: 'assets/images/projectsupp.webp'
    },
    {
      title: 'SITE CONSULTATION',
      description: 'Our experienced engineers and consultants provide expert on-site assessment, technical guidance, and tailored recommendations to help you build smarter, safer, and more efficiently.',
      image: 'assets/images/sitecons.jpg',
      iconImage: 'assets/images/sitecons.jpg'
    }
  ];

  stats = [
    { value: '500+',  label: 'Projects Completed', icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>` },
    { value: '1000+', label: 'Happy Clients',       icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
    { value: '5000+', label: 'Products Available',  icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>` },
    { value: '10+',   label: 'Years Experience',    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
    { value: '24/7',  label: 'Customer Support',    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8540A" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` }
  ];

  ngOnInit() { this.startAutoSlide(); }
  ngOnDestroy() { this.stopAutoSlide(); }

  startAutoSlide() { this.autoSlideInterval = setInterval(() => this.nextSlide(), 5000); }
  stopAutoSlide() { if (this.autoSlideInterval) clearInterval(this.autoSlideInterval); }

  nextSlide() {
    this.activeSlide = this.activeSlide < this.capabilities.length - 1 ? this.activeSlide + 1 : 0;
  }
  prevSlide() {
    this.activeSlide = this.activeSlide > 0 ? this.activeSlide - 1 : this.capabilities.length - 1;
  }
  goToSlide(index: number) {
    this.activeSlide = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  goTo(path: string) { this.router.navigate([path]); }
}