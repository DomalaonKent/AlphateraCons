import { Injectable } from '@angular/core';

export interface TeamMember {
  name: string;
  role: string;
}

export interface DepartmentItem {
  name: string;
  icon: string;
  count: number;
  desc: string;
}

export interface TeamStatItem {
  value: string;
  label: string;
  icon: string;
}

export type DeptFilter = 'All';

@Injectable({
  providedIn: 'root'
})
export class OurTeamService {

  getTeamMembers(): TeamMember[] {
    return [
      { name: 'Cielito Zamar Lachica', role: 'President, Authorized Managing Officer (AMO)' },
      { name: 'Mary Rose D. Lachica', role: 'Chief Financial Officer (CFO)' },
      { name: 'Engr. Dana Camille G. Dioquino', role: 'Project Engineer / STE' },
      { name: 'Clarence Jann B. Biron', role: 'Executive Security & Authorized Representative' },
      { name: 'John Carrey B. Lachica', role: 'Construction Safety Health Officer 1' },
      { name: 'Joseph Domagco', role: 'Construction Foreman' },
    ];
  }

  getDepartments(): DepartmentItem[] { return []; }

  getTeamStats(): TeamStatItem[] {
    return [
      { value: '6', label: 'Core Team Members', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
      { value: '20+', label: 'Combined Years Experience', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>` },
      { value: '100%', label: 'Committed to Excellence', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>` },
      { value: '98%', label: 'Client Satisfaction Rate', icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 6 9 17 4 12"/></svg>` },
    ];
  }

  getFilterCategories(): DeptFilter[] { return ['All']; }

  filterMembers(members: TeamMember[], dept: DeptFilter): TeamMember[] { return members; }
}