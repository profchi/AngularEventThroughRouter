import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emit-event-through-router-outlet';

  constructor(private router: Router){
    
  }

  navigate(url: string){
    this.router.navigate([url]);
  }
}
