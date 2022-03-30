import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter<boolean>();

  model: any = {};

  constructor(private accountService: AccountService, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.accountService.register(this.model).subscribe((register: User) => {
      this.cancel();
    }, err => {
      this.toastrService.error(err.error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
