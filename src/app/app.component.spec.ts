import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        LoginComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testApp');
  });

  it('validation fail email', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    let event = {
      preventDefault() {
        'hola';
      }
    };
    login.email = 'hola';
    login.pass = '12345';
    login.validationCredentials(event);
  });

  it('validation fail pass', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    let event = {
      preventDefault() {
        'hola';
      }
    };
    login.email = 'hola@hola.com';
    login.pass = '1234';
    login.validationCredentials(event);
  });

  it('validation empty fields', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    let event = {
      preventDefault() {
        'hola';
      }
    };
    login.email = '';
    login.pass = '';
    login.validationCredentials(event);
  });

  it('validation Ok', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    let event = {
      preventDefault() {
        'hola';
      }
    };
    login.email = 'hola@hola.com';
    login.pass = '123456';
    login.validationCredentials(event);
  });


  it('check remember account', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    let event = {
      target: {
        checked: true
      }
    };
    login.email = 'hola@hola.com';
    login.pass = '12345';
    login.checkRemember(event);
  });
});
