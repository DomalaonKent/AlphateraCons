import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OurTeamService, TeamMember, TeamStatItem } from './our-team.service';

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

  filteredMembers: TeamMember[] = [];
  teamStats: TeamStatItem[] = [];

  ngOnInit(): void {
    this.filteredMembers = this.teamService.getTeamMembers();
    this.teamStats       = this.teamService.getTeamStats();
  }

  goTo(path: string): void { this.router.navigate([path]); }
  goToContacts(): void { this.router.navigate(['/dashboard'], { fragment: 'contacts' }); }
}