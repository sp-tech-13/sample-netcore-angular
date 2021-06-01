import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.accountService.register(this.model).subscribe((register: User) => {
      this.cancel();
    }, err => {
      console.log(err);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
