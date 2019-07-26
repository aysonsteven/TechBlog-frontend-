import { NgModule } from '@angular/core';

import { RegistrationComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [
        RegistrationComponent,
        LoginComponent
    ],
    providers: [],
})
export class AuthenticationModule { }
