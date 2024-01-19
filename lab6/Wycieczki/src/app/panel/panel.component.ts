import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';
import { User } from '../model/user';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit{

  constructor(public afAuth: AngularFireAuth, public service: AuthService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  users: User[] = [];

  async getUsers() {
    this.users = await this.service.getAllUsers();
  }

  changeToLocal() {
    this.afAuth.setPersistence('local');
  }
  changeToSession() {
    this.afAuth.setPersistence('session');
  }
  changeToNone() {
    this.afAuth.setPersistence('none');
  }
  changeClient(user: User) {
    let index = this.findIndex(user.uid);
    if(this.users[index].roles.client == true) this.users[index].roles.client = false;
    else this.users[index].roles.client = true;
    this.service.userUpdate(this.users[index]);
  }
  changeAdmin(user: User) {
    let index = this.findIndex(user.uid);
    if(this.users[index].roles.admin == true) this.users[index].roles.admin = false;
    else this.users[index].roles.admin = true;
    console.log(this.users[index].roles.admin);
    this.service.userUpdate(this.users[index]);
  }
  changeMenager(user: User) {
    let index = this.findIndex(user.uid);
    if(this.users[index].roles.menager == true) this.users[index].roles.menager = false;
    else this.users[index].roles.menager = true;
    this.service.userUpdate(this.users[index]);
  }
  changeBanned(user: User) {
    let index = this.findIndex(user.uid);
    if(this.users[index].roles.banned == true) this.users[index].roles.banned = false;
    else this.users[index].roles.banned = true;
    this.service.userUpdate(this.users[index]);
  }

  findIndex(uid: string): number {
    let index = 0;
    for(index; index < this.users.length; index++) {
      if(uid == this.users[index].uid) return index;
    }
    return 0;
  }
}
