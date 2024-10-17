import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  clientData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (!navigation?.extras.state) {
      router.navigate(["/"])
    }
    this.clientData = navigation?.extras.state;
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
