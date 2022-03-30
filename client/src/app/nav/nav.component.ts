import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogout: boolean = false;
  model: any = {};

  constructor(public accountService: AccountService, 
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  
  login() {
    this.accountService.login(this.model).subscribe(result => {
      this.isLogout = false;
      this.router.navigateByUrl('/members');
    }, err => {
      this.toaster.error(err.error);
    });
  }

  logout() {
    this.isLogout = true;
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

}
