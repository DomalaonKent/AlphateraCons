import { Injectable } from '@angular/core';

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  image: string;
  description: string;
  highlights: string[];
  value: string;
}

export interface ProjectStatItem {
  value: string;
  label: string;
  icon: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export type FilterCategory = 'All' | 'Infrastructure' | 'Commercial' | 'Industrial' | 'Residential';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getProjects(): ProjectItem[] {
  return [
    {
      id: 1,
      title: 'THE APEX PLAZA',
      category: 'Commercial',
      location: 'Sorsogon City, Philippines',
      year: '2024',
      status: 'Completed',
      image: 'assets/images/6860e008-8d8e-4bcb-b6fc-502a3f2832a0.jfif',
      description: 'A commercial development project fully supplied and supported by Alphatera Construction Supply.',
      highlights: ['Full material supply', 'On-time delivery', 'Quality assured materials', 'End-to-end project support'],
      value: '₱0'
    },
  ];
}

  getProjectStats(): ProjectStatItem[] {
    return [
      {
        value: '500+',
        label: 'Projects Delivered',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
      },
      {
        value: '₱12B+',
        label: 'Total Project Value',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
      },
      {
        value: '18',
        label: 'Provinces Covered',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 13 8 13s8-7.75 8-13a8 8 0 0 0-8-8z"/></svg>`
      },
      {
        value: '98%',
        label: 'Client Satisfaction',
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`
      }
    ];
  }

  getTestimonials(): TestimonialItem[] {
    return [
      {
        name: 'Engr. Ramon Villanueva',
        role: 'Project Manager',
        company: 'MetroInfra Corp.',
        quote: 'Alphatera delivered materials ahead of schedule and maintained consistent quality throughout our highway project. Their team coordination was exceptional.',
        avatar: 'RV'
      },
      {
        name: 'Arch. Clara Santos',
        role: 'Principal Architect',
        company: 'Santos & Partners',
        quote: 'Working with Alphatera on the Grandview Tower was seamless. They understood our technical specifications and executed with zero compromise on quality.',
        avatar: 'CS'
      },
      {
        name: 'Mr. Joel Reyes',
        role: 'Operations Director',
        company: 'Southport Holdings',
        quote: 'Their equipment rental fleet is well-maintained and the support team is responsive 24/7. We\'ve built 3 projects together and will continue to rely on Alphatera.',
        avatar: 'JR'
      }
    ];
  }

  getFilterCategories(): FilterCategory[] {
    return ['All', 'Infrastructure', 'Commercial', 'Industrial', 'Residential'];
  }

  filterProjects(projects: ProjectItem[], category: FilterCategory): ProjectItem[] {
    if (category === 'All') return projects;
    return projects.filter(p => p.category === category);
  }
}