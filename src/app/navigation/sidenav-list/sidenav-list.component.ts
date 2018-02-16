import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth = false;
  subscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.subscription = this.authService.isLoggedIn
      .subscribe(
        authStatus => {
          this.isAuth = authStatus;
        }
      );
  }
  onLogOut() {
    this.authService.logout();
    this.onClose();
  }

  onClose() {
    this.closeSidenav.emit();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
