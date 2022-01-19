import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;
  message: string;
  statusClass: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getInputs(tag, value: string) {
    if (value && tag && tag === 'email') {
      this.email = value ? value : '';
    }
    if (value && tag && tag === 'pass') {
      this.pass = value ? value : '';
    }

  }

  checkRemember(event) {
    let result: boolean;
    let credentials: object = {};
    result = event.target.checked;

    if (result) {
      credentials = {
        email: this.email,
        pass: this.pass
      };
      localStorage.setItem('credentials', JSON.stringify(credentials));
    }
  }

  validationCredentials(event) {
    event.preventDefault();
    let validation: RegExp;
    validation = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,4})+$');
    let validationOk = validation.test(this.email);
    if (!validationOk) {
      this.message = 'Campos incorrectos: debes poner un email válido.';
      this.deleteMessage('ko');
    }

    if (validationOk && this.pass.length >= 5) {
      this.message = 'Bienvenido ' + this.email + ', ya estás logueado';
      this.deleteMessage('ok');
    }

    if (this.pass && this.pass.length < 5) {
      this.message = 'Campos incompletos: contraseña mínimo 5 carácteres';
      this.deleteMessage('ko');
    }

    if (!this.email && !this.pass || !this.email || !this.pass) {
      this.message = 'Campos incompletos, recuerda rellenar todos los campos.';
      this.deleteMessage('ko');
    }
  }

  deleteMessage(status: string) {

    if (status === 'ok') {
      this.statusClass = 'login-ok';
      this.setResetParameters();
    }

    if (status === 'ko') {
      this.statusClass = 'login-ko';
      this.setResetParameters();
    }

  }

  setResetParameters() {
    setTimeout(() => {
      this.message = '';
    }, 6000);
  }

  checkValidInput(validator: string) {
    let result: string;
    if (validator !== '' && validator.length >= 5) {
      result = validator;
      return result;
    }
  }
}
