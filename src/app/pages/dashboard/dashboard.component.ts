import { Component, OnInit, AfterViewInit, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DashboardService, DashboardStats } from './dashboard.service';

const LAT  = 12.9826047;
const LNG  = 124.0064862;
const ZOOM = 17;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public router = inject(Router);
  private dashboardService = inject(DashboardService);

  sidebarNarrow = false;
  sidebarVisible = false;
  isMobile = false;
  activeSection = 'home';
  isChildRoute = false;

  private homeMap: any = null;

  teamIndex = 0;
  allTeam = [
    { name: 'John Dela Cruz',  role: 'Project Manager' },
    { name: 'Maria Santos',    role: 'Procurement Head' },
    { name: 'Michael Tan',     role: 'Logistics Manager' },
    { name: 'Daniel Cruz',     role: 'Site Engineer' },
    { name: 'Ana Reyes',       role: 'Safety Officer' },
    { name: 'Jose Bautista',   role: 'Field Supervisor' },
  ];
  get visibleTeam() {
    const perPage = this.isMobile ? 1 : 4;
    return this.allTeam.slice(this.teamIndex, this.teamIndex + perPage);
  }

  services = [
    {
      name: 'Material Supply',
      img:  'assets/images/Matsupply.jpg',
      desc: 'Quality materials for every construction need.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>'
    },
    {
      name: 'Equipment Rental',
      img:  'assets/images/equipmentrent.avif',
      desc: 'Rent reliable equipment for your project requirements.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2"/></svg>'
    },
    {
      name: 'Delivery Services',
      img:  'assets/images/deliveryserv.jpg',
      desc: 'Timely and safe delivery straight to your construction site.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>'
    },
    {
      name: 'Project Support',
      img:  'assets/images/projectsupp.webp',
      desc: 'We support your project from start to completion.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>'
    },
    {
      name: 'Site Consultation',
      img:  'assets/images/sitecons.jpg',
      desc: 'Expert advice to help you build smarter and better.',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
    },
  ];

  projects = [
    { name: 'THE APEX PLAZA',       type: 'Commercial Building' },
    { name: 'RIVERDALE BRIDGE',     type: 'Infrastructure Project' },
    { name: 'INDUSTRIAL WAREHOUSE', type: 'Industrial Construction' },
  ];

  stats: DashboardStats = { totalOrders: 0, pendingOrders: 0, completedOrders: 0 };

  ngOnInit(): void {
    this.isChildRoute = this.router.url.includes('/dashboard/about')
                     || this.router.url.includes('/dashboard/services')
                     || this.router.url.includes('/dashboard/projects')
                     || this.router.url.includes('/dashboard/our-team')
                     || this.router.url.includes('/dashboard/contacts');

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isChildRoute = e.url.includes('/dashboard/about')
                       || e.url.includes('/dashboard/services')
                       || e.url.includes('/dashboard/projects')
                       || e.url.includes('/dashboard/our-team')
                       || e.url.includes('/dashboard/contacts');
      if (!this.isChildRoute) {
        setTimeout(() => {
          this.setupScrollSpy();
          this.initMap();
        }, 300);
      }
    });

    this.stats = this.dashboardService.getStats();
    this.checkMobile();

    if (!this.isChildRoute) {
      this.setupScrollSpy();
      setTimeout(() => {
        const el = document.querySelector('.hero') as HTMLElement;
        if (el) el.style.backgroundImage = "url('assets/images/homeback.jpg')";
      }, 0);
    }
  }

  ngAfterViewInit(): void {
    if (!this.isChildRoute) {
      setTimeout(() => this.initMap(), 400);
    }
  }

  private initMap(): void {
    if (this.homeMap) {
      this.homeMap.remove();
      this.homeMap = null;
    }

    const el = document.getElementById('home-map');
    if (!el) return;

    import('leaflet').then(L => {
      const icon = L.divIcon({
        className: '',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="32" height="48">
                 <path fill="#C0420A" stroke="#fff" stroke-width="1.2"
                   d="M12 0C5.373 0 0 5.373 0 12c0 9 12 24 12 24S24 21 24 12C24 5.373 18.627 0 12 0z"/>
                 <circle fill="#fff" cx="12" cy="12" r="4.5"/>
               </svg>`,
        iconSize:   [32, 48],
        iconAnchor: [16, 48],
        popupAnchor:[0, -50]
      });

      this.homeMap = L.map('home-map', { zoomControl: true, scrollWheelZoom: false })
        .setView([LAT, LNG], ZOOM);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(this.homeMap);

      L.marker([LAT, LNG], { icon })
        .addTo(this.homeMap)
        .bindPopup(
          `<strong>Alphatera Construction Supply</strong><br>
           Anonas St., Gate 2, SPPVS<br>
           Bibincahan, Sorsogon City<br>
           Sorsogon 4700, Philippines`,
          { maxWidth: 220 }
        )
        .openPopup();
    });
  }

  @HostListener('window:resize')
  checkMobile(): void { this.isMobile = window.innerWidth <= 768; }

  setupScrollSpy(): void {
    const sections = ['home','about','services','projects','team','contacts'];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) this.activeSection = e.target.id; });
    }, { threshold: 0.35 });
    setTimeout(() => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 300);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    if (this.isMobile) this.sidebarVisible = false;
  }

  toggleSidebar(): void {
    if (this.isMobile) this.sidebarVisible = !this.sidebarVisible;
    else this.sidebarNarrow = !this.sidebarNarrow;
  }

  toggleNarrow(): void { this.sidebarNarrow = !this.sidebarNarrow; }
  closeSidebar(): void { this.sidebarVisible = false; }

  teamNext(): void {
    const perPage = this.isMobile ? 1 : 4;
    if (this.teamIndex + perPage < this.allTeam.length) this.teamIndex += 1;
  }
  teamPrev(): void {
    if (this.teamIndex > 0) this.teamIndex -= 1;
  }

  goToHome(): void     { this.router.navigate(['/dashboard']); }
  goToAbout(): void    { this.router.navigate(['/dashboard/about']); }
  goToServices(): void  { this.router.navigate(['/dashboard/services']); }
  goToProjects(): void  { this.router.navigate(['/dashboard/projects']); }
  goToOurTeam(): void   { this.router.navigate(['/dashboard/our-team']); }
  goToContacts(): void  { this.router.navigate(['/dashboard/contacts']); }
}