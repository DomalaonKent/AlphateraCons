import { Injectable } from '@angular/core';

export interface DashboardStats {
  totalOrders: number;
  pendingOrders: number;
  completedOrders: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  // TODO: Palitan ng actual API calls
  getStats(): DashboardStats {
    return {
      totalOrders: 0,
      pendingOrders: 0,
      completedOrders: 0
    };
  }

  getUserGreeting(name: string): string {
    const hour = new Date().getHours();
    if (hour < 12) return `Good morning, ${name}!`;
    if (hour < 18) return `Good afternoon, ${name}!`;
    return `Good evening, ${name}!`;
  }
}