import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing Componets 
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'profile',component:ProfileComponent },

  // {path:'profile',redirectTo:'login',pathMatch:'full' },
  
  {path:'profile/edit',component:ProfileEditComponent },
  {path:'signup',component:SignupComponent },
  {path:'login',component:LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const Components=[
  ProfileComponent,
    ProfileEditComponent,
    SignupComponent,
    LoginComponent
]