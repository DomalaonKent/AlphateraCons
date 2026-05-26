import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ProjectsService,
  ProjectItem,
  ProjectStatItem,
  TestimonialItem,
  FilterCategory
} from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  private router = inject(Router);
  private projectsService = inject(ProjectsService);

  allProjects: ProjectItem[] = [];
  filteredProjects: ProjectItem[] = [];
  projectStats: ProjectStatItem[] = [];
  testimonials: TestimonialItem[] = [];
  filterCategories: FilterCategory[] = [];

  activeFilter: FilterCategory = 'All';
  activeTestimonial = 0;
  selectedProject: ProjectItem | null = null;

  ngOnInit(): void {
    this.allProjects      = this.projectsService.getProjects();
    this.filteredProjects  = [...this.allProjects];
    this.projectStats     = this.projectsService.getProjectStats();
    this.testimonials     = this.projectsService.getTestimonials();
    this.filterCategories = this.projectsService.getFilterCategories();
  }

  applyFilter(category: FilterCategory): void {
    this.activeFilter     = category;
    this.filteredProjects = this.projectsService.filterProjects(this.allProjects, category);
  }

  setTestimonial(index: number): void {
    this.activeTestimonial = index;
  }

  openProject(project: ProjectItem): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  goTo(path: string): void { this.router.navigate([path]); }

  goToContacts(): void {
    this.router.navigate(['/dashboard'], { fragment: 'contacts' });
  }

  goToServices(): void {
    this.router.navigate(['/dashboard/services']);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed': return 'status-completed';
      case 'Ongoing':   return 'status-ongoing';
      case 'Upcoming':  return 'status-upcoming';
      default:          return '';
    }
  }
}