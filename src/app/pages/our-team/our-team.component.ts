import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  OurTeamService,
  TeamMember,
  DepartmentItem,
  TeamStatItem,
  DeptFilter
} from './our-team.service';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {
  private router = inject(Router);
  private teamService = inject(OurTeamService);

  allMembers: TeamMember[] = [];
  filteredMembers: TeamMember[] = [];
  departments: DepartmentItem[] = [];
  teamStats: TeamStatItem[] = [];
  filterCategories: DeptFilter[] = [];

  activeFilter: DeptFilter = 'All';
  selectedMember: TeamMember | null = null;

  ngOnInit(): void {
    this.allMembers      = this.teamService.getTeamMembers();
    this.filteredMembers  = [...this.allMembers];
    this.departments     = this.teamService.getDepartments();
    this.teamStats       = this.teamService.getTeamStats();
    this.filterCategories = this.teamService.getFilterCategories();
  }

  applyFilter(dept: DeptFilter): void {
    this.activeFilter    = dept;
    this.filteredMembers = this.teamService.filterMembers(this.allMembers, dept);
  }

  openMember(member: TeamMember): void {
    this.selectedMember = member;
  }

  closeMember(): void {
    this.selectedMember = null;
  }

  goTo(path: string): void { this.router.navigate([path]); }

  goToContacts(): void {
    this.router.navigate(['/dashboard'], { fragment: 'contacts' });
  }

  goToProjects(): void {
    this.router.navigate(['/dashboard/projects']);
  }
}