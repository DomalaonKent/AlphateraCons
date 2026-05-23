import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  getPageTitle(): string {
    return 'About Alphatera Construction Supply';
  }

  getCompanyDescription(): string {
    return 'We are a trusted construction and engineering partner delivering high-quality solutions for infrastructure, commercial, industrial, and development projects.';
  }

  getMission(): string {
    return 'To provide reliable construction, engineering, and industrial support solutions that deliver quality, safety, efficiency, and long-term value for every client and project we serve.';
  }

  getVision(): string {
    return 'To become one of the leading and most trusted construction and engineering support companies known for excellence, innovation, dependable service, and strong client partnerships.';
  }
}