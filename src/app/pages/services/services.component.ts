import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServicesService, ServiceItem, CommitmentItem, StatItem, IndustryItem } from './services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  private router = inject(Router);
  private servicesService = inject(ServicesService);

  commitments: CommitmentItem[] = [];
  coreServices: ServiceItem[] = [];
  stats: StatItem[] = [];
  industries: IndustryItem[] = [];

  ngOnInit(): void {
    this.commitments  = this.servicesService.getCommitments();
    this.coreServices = this.servicesService.getCoreServices();
    this.stats        = this.servicesService.getStats();
    this.industries   = this.servicesService.getIndustries();
  }

  goToContacts(): void {
    this.router.navigate(['/dashboard'], { fragment: 'contacts' });
  }

  goToAbout(): void {
    this.router.navigate(['/dashboard/about']);
  }
}