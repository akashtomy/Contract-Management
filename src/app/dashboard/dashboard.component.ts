import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = true;
  opened =  false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  show(toggle:boolean) {
      this.opened = !this.opened;
  }

  hide(e: any) {
    // if (!this.isPanelOpen && !this.sidenavService.isLocked) {
      this.opened= false;
    // }
    return
  }

  navigateTo(path:string){
   this.router.navigate([path]);
   this.opened = false;
  }

}
