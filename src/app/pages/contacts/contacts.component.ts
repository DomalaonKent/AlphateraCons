import { Component, OnInit, OnDestroy, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService, ContactInfo, FaqItem, SocialLink } from './contacts.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, AfterViewInit, OnDestroy {
  private router = inject(Router);
  private contactsService = inject(ContactsService);

  contactInfo!: ContactInfo;
  faqs: FaqItem[] = [];
  socialLinks: SocialLink[] = [];

  activeFaq: number | null = null;

  // Form fields
  form = {
    name: '',
    email: '',
    phone: '',
    company: '',
    category: '',
    budget: '',
    message: '',
    agree: false
  };

  submitted = false;
  sending = false;

  private map: any;
  private L: any;

  ngOnInit(): void {
    this.contactInfo  = this.contactsService.getContactInfo();
    this.faqs         = this.contactsService.getFaqs();
    this.socialLinks  = this.contactsService.getSocialLinks();
  }

  ngAfterViewInit(): void {
    this.loadLeaflet();
  }

  private async loadLeaflet(): Promise<void> {
    if (typeof window === 'undefined') return;

    // Dynamically load Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id   = 'leaflet-css';
      link.rel  = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Dynamically load Leaflet JS
    await new Promise<void>((resolve) => {
      if ((window as any).L) { resolve(); return; }
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => resolve();
      document.body.appendChild(script);
    });

    this.L = (window as any).L;
    this.initMap();
  }

  private initMap(): void {
    const L = this.L;
    const { lat, lng } = this.contactInfo;

    this.map = L.map('contacts-map', {
      center: [lat, lng],
      zoom: 17,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Custom dark marker icon
    const icon = L.divIcon({
      className: '',
      html: `
        <div style="
          width:36px;height:36px;
          background:#C0420A;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          border:3px solid #fff;
          box-shadow:0 4px 16px rgba(0,0,0,0.5);
          display:flex;align-items:center;justify-content:center;
        ">
          <div style="transform:rotate(45deg);font-size:14px;color:#fff;margin-left:1px;margin-top:1px;">📍</div>
        </div>
      `,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -40]
    });

    L.marker([lat, lng], { icon })
      .addTo(this.map)
      .bindPopup(`
        <div style="font-family:'Barlow',sans-serif;padding:6px 2px;min-width:200px;">
          <strong style="font-size:.95rem;color:#0d1b2e;display:block;margin-bottom:4px;">
            Alphatera Construction Supply
          </strong>
          <span style="font-size:.8rem;color:#555;line-height:1.5;">
            Anonas St., Gate 2, SPPVS<br>
            Bibincahan, Sorsogon City<br>
            Sorsogon 4700, Philippines
          </span>
        </div>
      `, { maxWidth: 260 })
      .openPopup();
  }

  toggleFaq(i: number): void {
    this.activeFaq = this.activeFaq === i ? null : i;
  }

  submitForm(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending = true;
    setTimeout(() => {
      this.sending   = false;
      this.submitted = true;
      this.form = { name:'', email:'', phone:'', company:'', category:'', budget:'', message:'', agree: false };
    }, 1800);
  }

  resetForm(): void {
    this.submitted = false;
  }

  goToServices(): void {
    this.router.navigate(['/dashboard/services']);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }
}