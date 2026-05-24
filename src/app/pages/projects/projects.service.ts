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
        title: 'METRO NORTH HIGHWAY EXPANSION',
        category: 'Infrastructure',
        location: 'Bulacan, Philippines',
        year: '2024',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80',
        description: 'A major highway expansion project covering 42 km of new road infrastructure to ease metro congestion and improve logistics flow across the northern corridor.',
        highlights: ['42 km road expansion', '6 overpasses constructed', '3 drainage systems upgraded', 'Completed ahead of schedule'],
        value: '₱1.2B'
      },
      {
        id: 2,
        title: 'GRANDVIEW COMMERCIAL TOWER',
        category: 'Commercial',
        location: 'Makati, Philippines',
        year: '2024',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80',
        description: 'A 32-storey mixed-use commercial tower featuring office spaces, retail floors, and rooftop facilities with full structural and material supply by Alphatera.',
        highlights: ['32-storey structure', 'LEED-certified design', 'Full material supply', 'Structural steel framework'],
        value: '₱850M'
      },
      {
        id: 3,
        title: 'SOUTHPORT INDUSTRIAL COMPLEX',
        category: 'Industrial',
        location: 'Batangas, Philippines',
        year: '2023',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
        description: 'A sprawling industrial complex spanning 15 hectares, including warehouse facilities, logistics terminals, and a dedicated power substation.',
        highlights: ['15 hectare development', '4 warehouse buildings', 'Dedicated substation', 'Heavy equipment rental'],
        value: '₱680M'
      },
      {
        id: 4,
        title: 'ALVA HEIGHTS SUBDIVISION',
        category: 'Residential',
        location: 'Cavite, Philippines',
        year: '2023',
        status: 'Completed',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80',
        description: 'A premium residential subdivision of 250 homes with complete amenities including clubhouse, parks, sports facilities, and underground utility infrastructure.',
        highlights: ['250 residential units', 'Clubhouse & amenities', 'Underground utilities', 'Complete material supply'],
        value: '₱520M'
      },
      {
        id: 5,
        title: 'LAGUNA BRIDGE REHABILITATION',
        category: 'Infrastructure',
        location: 'Laguna, Philippines',
        year: '2024',
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=700&q=80',
        description: 'Rehabilitation and structural reinforcement of three major bridge crossings connecting key municipalities, using advanced composite steel and concrete solutions.',
        highlights: ['3 bridge structures', 'Structural reinforcement', 'Traffic management plan', '18-month timeline'],
        value: '₱390M'
      },
      {
        id: 6,
        title: 'NUVALI TECH PARK PHASE 2',
        category: 'Commercial',
        location: 'Santa Rosa, Laguna',
        year: '2025',
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=80',
        description: 'Phase 2 of the Nuvali Tech Park development includes three mid-rise office buildings, a data center wing, and expanded parking infrastructure.',
        highlights: ['3 office buildings', 'Data center facility', '5,000 sqm expansion', 'Smart building systems'],
        value: '₱720M'
      },
      {
        id: 7,
        title: 'CEBU PORT LOGISTICS HUB',
        category: 'Industrial',
        location: 'Cebu City, Philippines',
        year: '2025',
        status: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
        description: 'Construction of a modern port logistics hub with container yards, cold storage facilities, and automated cargo handling systems.',
        highlights: ['Container yard & terminal', 'Cold storage warehouse', 'Automated handling', '20-hectare footprint'],
        value: '₱950M'
      },
      {
        id: 8,
        title: 'SIERRA VERDE ECO RESIDENCES',
        category: 'Residential',
        location: 'Antipolo, Rizal',
        year: '2025',
        status: 'Upcoming',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80',
        description: 'An eco-friendly residential development featuring 180 homes built with sustainable materials, solar-ready roofing, and rainwater collection infrastructure.',
        highlights: ['180 eco-friendly homes', 'Solar-ready systems', 'Rainwater collection', 'Sustainable materials'],
        value: '₱460M'
      }
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