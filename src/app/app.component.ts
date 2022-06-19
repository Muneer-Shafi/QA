import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test-qa';
  constructor(
    private router: Router,
    private api: ApiService
  ) {}

  employee() {
    this.router.navigate(['./employee']);
  }


  quiz() {
    this.router.navigate(['./quiz']);
  }
}
