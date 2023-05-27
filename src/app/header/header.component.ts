import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideMenu: EventEmitter<boolean> =
  new EventEmitter<boolean>();

  opened =  true;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  sidenavToggle(){
  this.opened = !this.opened;
  this.toggleSideMenu.emit(this.opened);
  }

  signOut(){
    this.router.navigate(['/login']);
  }

}
