import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Green Leaves';

  //Variables
  _name: string;
  _email: string;
  _telphone: string;
  _date: string;
  _city: string = "";

  searching: boolean = false;

  @ViewChild('errorModal') errorModal: ElementRef;

  cities = ["11111111", "2222222", "3333333"]
  errorList = [];

  constructor(private modalService: NgbModal) {

  }

  public showSearchResults(event: any): void {
    if (event.target.value.length >= 3) {
      this.searching = true;
    } else {
      this.searching = false;
    }
  }

  //Geonames: dannsant123---yxyrappe-3726@yopmail.com

  //Validaciones
  validateEmail(email): boolean {
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regexp.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  validateTelphone(telphone): boolean {
    let regexp = new RegExp(/^[+]*[#]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
    if (regexp.test(telphone)) {
      return true;
    } else {
      return false;
    }
  }

  send() {
    this.errorList = []
    if (!this._name || this._name.length == 0) {
      this.errorList.push('Datos incompletos: Por favor agregue el nombre');
    }
    if (!this._email || this._email.length == 0) {
      this.errorList.push('Datos incompletos: Por favor agregue el E-mail');
    } else {
      if (!this.validateEmail(this._email)) {
        this.errorList.push('Email inválido');
      }
    }
    if (!this._telphone || this._telphone.length == 0) {
      this.errorList.push('Datos incompletos: Por favor agregue el Teléfono');
    } else {
      if (!this.validateTelphone(this._telphone)) {
        this.errorList.push('Teléfono inválido');
      }
    }

    if (!this._date || this._date.length == 0) {
      this.errorList.push('Por favor agregue una fecha válida');
    }
    if (!this._city || this._city.length == 0) {
      this.errorList.push('Datos incompletos: Por favor agregue la ciudad');
    }


    if (this.errorList.length != 0) {
      this.modalService.open(this.errorModal);
    }
  }

}
