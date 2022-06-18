import { Router } from '@angular/router';

export class AppRoutes {
  constructor(private router: Router) {}


  employee() {
    this.router.navigate(['./employee']);
  }
}
