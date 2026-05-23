import { Component, OnInit, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginService } from '../login/login.service';
import { DashboardService, DashboardStats } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);
  private loginService = inject(LoginService);
  private dashboardService = inject(DashboardService);

  user: any;
  greeting = '';
  sidebarNarrow = false;
  sidebarVisible = false;
  isMobile = false;
  activeSection = 'home';
  isChildRoute = false;  // ← DAGDAG

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
    { name: 'Material Supply',    desc: 'Quality materials for every construction need.',                 icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>' },
    { name: 'Equipment Rental',   desc: 'Rent reliable equipment for your project requirements.',        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2"/></svg>' },
    { name: 'Delivery Services',  desc: 'Timely and safe delivery straight to your construction site.', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>' },
    { name: 'Project Support',    desc: 'We support your project from start to completion.',             icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
    { name: 'Site Consultation',  desc: 'Expert advice to help you build smarter and better.',           icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
  ];

  projects = [
    { name: 'THE APEX PLAZA',       type: 'Commercial Building' },
    { name: 'RIVERDALE BRIDGE',     type: 'Infrastructure Project' },
    { name: 'INDUSTRIAL WAREHOUSE', type: 'Industrial Construction' },
  ];

  stats: DashboardStats = { totalOrders: 0, pendingOrders: 0, completedOrders: 0 };

  ngOnInit(): void {
    // ← DAGDAG: check kung nasa child route na agad
    this.isChildRoute = this.router.url.includes('/dashboard/about');

    // ← DAGDAG: listen sa future navigation
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: any) => {
      this.isChildRoute = e.url.includes('/dashboard/about');
      if (!this.isChildRoute) {
        setTimeout(() => this.setupScrollSpy(), 300);
      }
    });

    this.user = this.loginService.getUser();
    const name = this.user?.name || 'Partner';
    this.greeting = this.dashboardService.getUserGreeting(name);
    this.stats = this.dashboardService.getStats();
    this.checkMobile();

    if (!this.isChildRoute) {
      this.setupScrollSpy();
      setTimeout(() => {
        const el = document.querySelector('.hero') as HTMLElement;
        if (el) el.style.backgroundImage = "url('assets/images/logback.jpg')";
      }, 0);
    }
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

  goToAbout(): void {
    this.router.navigate(['/dashboard/about']);
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}