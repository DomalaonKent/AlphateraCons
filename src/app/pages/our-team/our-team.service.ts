import { Injectable } from '@angular/core';

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  bio: string;
  skills: string[];
  initials: string;
  color: string;
  linkedin?: string;
  email?: string;
  yearsExp: number;
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

export type DeptFilter = 'All' | 'Management' | 'Engineering' | 'Operations' | 'Support';

@Injectable({
  providedIn: 'root'
})
export class OurTeamService {

  getTeamMembers(): TeamMember[] {
    return [
      {
        name: 'Eduardo Reyes',
        role: 'Chief Executive Officer',
        department: 'Management',
        bio: 'With over 25 years in the construction and supply industry, Eduardo leads Alphatera with a vision for quality, growth, and client excellence.',
        skills: ['Strategic Planning', 'Business Development', 'Client Relations'],
        initials: 'ER',
        color: '#C0420A',
        email: 'e.reyes@alphatera.com',
        yearsExp: 25
      },
      {
        name: 'John Dela Cruz',
        role: 'Project Manager',
        department: 'Management',
        bio: 'John oversees all active construction supply projects, ensuring timelines, budgets, and quality standards are consistently met across all engagements.',
        skills: ['Project Planning', 'Team Leadership', 'Risk Management'],
        initials: 'JD',
        color: '#1a3a6b',
        email: 'j.delacruz@alphatera.com',
        yearsExp: 12
      },
      {
        name: 'Maria Santos',
        role: 'Procurement Head',
        department: 'Management',
        bio: 'Maria leads all procurement and vendor partnerships, ensuring Alphatera sources only top-grade materials at competitive market prices.',
        skills: ['Vendor Management', 'Cost Negotiation', 'Supply Chain'],
        initials: 'MS',
        color: '#7c3aed',
        email: 'm.santos@alphatera.com',
        yearsExp: 10
      },
      {
        name: 'Engr. Michael Tan',
        role: 'Senior Structural Engineer',
        department: 'Engineering',
        bio: 'Michael brings 15 years of structural engineering expertise, providing technical consultation for clients on material selection and load requirements.',
        skills: ['Structural Analysis', 'AutoCAD', 'Material Testing'],
        initials: 'MT',
        color: '#0e7490',
        email: 'm.tan@alphatera.com',
        yearsExp: 15
      },
      {
        name: 'Engr. Daniel Cruz',
        role: 'Site Engineer',
        department: 'Engineering',
        bio: 'Daniel manages on-site inspections and material compliance checks, ensuring every delivery meets the project\'s technical specifications.',
        skills: ['Site Inspection', 'Quality Control', 'Civil Engineering'],
        initials: 'DC',
        color: '#065f46',
        email: 'd.cruz@alphatera.com',
        yearsExp: 8
      },
      {
        name: 'Engr. Lisa Gomez',
        role: 'Civil & MEP Specialist',
        department: 'Engineering',
        bio: 'Lisa specializes in mechanical, electrical, and plumbing material specifications, coordinating technical requirements between clients and suppliers.',
        skills: ['MEP Planning', 'Technical Specs', 'Material Sourcing'],
        initials: 'LG',
        color: '#92400e',
        email: 'l.gomez@alphatera.com',
        yearsExp: 9
      },
      {
        name: 'Michael Tan',
        role: 'Logistics Manager',
        department: 'Operations',
        bio: 'Heading the logistics division, he ensures every construction material reaches client sites on schedule through a reliable fleet and route network.',
        skills: ['Fleet Management', 'Route Planning', 'Inventory Control'],
        initials: 'MT',
        color: '#1e3a5f',
        email: 'logistics@alphatera.com',
        yearsExp: 11
      },
      {
        name: 'Ana Reyes',
        role: 'Safety Officer',
        department: 'Operations',
        bio: 'Ana implements and monitors safety protocols across all warehouse and delivery operations, maintaining Alphatera\'s zero-incident safety record.',
        skills: ['OSHA Standards', 'Safety Audits', 'Risk Assessment'],
        initials: 'AR',
        color: '#7f1d1d',
        email: 'a.reyes@alphatera.com',
        yearsExp: 7
      },
      {
        name: 'Jose Bautista',
        role: 'Field Supervisor',
        department: 'Operations',
        bio: 'Jose coordinates field teams and delivery crews, acting as the bridge between the logistics hub and client project sites for seamless service.',
        skills: ['Team Coordination', 'Field Operations', 'Client Communication'],
        initials: 'JB',
        color: '#3b0764',
        email: 'j.bautista@alphatera.com',
        yearsExp: 6
      },
      {
        name: 'Clara Mendoza',
        role: 'Customer Relations Head',
        department: 'Support',
        bio: 'Clara leads the client support team, handling inquiries, quotations, and after-service follow-ups to ensure full satisfaction on every order.',
        skills: ['Client Management', 'Issue Resolution', 'Sales Support'],
        initials: 'CM',
        color: '#831843',
        email: 'c.mendoza@alphatera.com',
        yearsExp: 8
      },
      {
        name: 'Ryan Villanueva',
        role: 'Finance & Admin Officer',
        department: 'Support',
        bio: 'Ryan oversees financial reporting, billing, and administrative operations, ensuring transparency and accuracy in all company transactions.',
        skills: ['Financial Reporting', 'Budgeting', 'Admin Management'],
        initials: 'RV',
        color: '#14532d',
        email: 'r.villanueva@alphatera.com',
        yearsExp: 5
      },
      {
        name: 'Sophia Lim',
        role: 'Marketing & Digital Head',
        department: 'Support',
        bio: 'Sophia drives Alphatera\'s brand visibility and digital presence, managing campaigns, social media, and client outreach strategies.',
        skills: ['Digital Marketing', 'Brand Strategy', 'Content Creation'],
        initials: 'SL',
        color: '#1e3a5f',
        email: 's.lim@alphatera.com',
        yearsExp: 4
      }
    ];
  }

  getDepartments(): DepartmentItem[] {
    return [
      {
        name: 'Management',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        count: 3,
        desc: 'Leadership, procurement, and project oversight'
      },
      {
        name: 'Engineering',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/></svg>`,
        count: 3,
        desc: 'Structural, civil, and MEP specialists'
      },
      {
        name: 'Operations',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
        count: 3,
        desc: 'Logistics, safety, and field operations'
      },
      {
        name: 'Support',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
        count: 3,
        desc: 'Client relations, finance, and marketing'
      }
    ];
  }

  getTeamStats(): TeamStatItem[] {
    return [
      {
        value: '12+',
        label: 'Core Team Members',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
      },
      {
        value: '120+',
        label: 'Combined Years Experience',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/></svg>`
      },
      {
        value: '4',
        label: 'Specialized Departments',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-4 0v2M8 7V5a2 2 0 0 0-4 0v2"/></svg>`
      },
      {
        value: '98%',
        label: 'Client Satisfaction Rate',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`
      }
    ];
  }

  getFilterCategories(): DeptFilter[] {
    return ['All', 'Management', 'Engineering', 'Operations', 'Support'];
  }

  filterMembers(members: TeamMember[], dept: DeptFilter): TeamMember[] {
    if (dept === 'All') return members;
    return members.filter(m => m.department === dept);
  }
}