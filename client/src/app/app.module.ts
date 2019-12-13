import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { AdminOptionsComponent } from './components/admin-options/admin-options.component';
import { UserOptionsComponent } from './components/user-options/user-options.component';
import { CreateComponent } from './components/admin-options/create/create.component';
import { ViewComponent } from './components/admin-options/view/view.component';
import { UpdateComponent } from './components/admin-options/update/update.component';
import { DeleteComponent } from './components/admin-options/delete/delete.component';
import { UpdateUserComponent } from './components/user-options/update-user/update-user.component';
import { CreateUserComponent } from './components/user-options/create-user/create-user.component';
import { ViewUserComponent } from './components/user-options/view-user/view-user.component';
import { DeleteUserComponent } from './components/user-options/delete-user/delete-user.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthUserGuard } from './guard/auth-user.guard';

const routes: Routes = [
  {path:'', redirectTo:"/loginAdmin", pathMatch:'full' },
  {path:'loginAdmin',component: LoginAdminComponent},
  {path:'loginUser',component:LoginUserComponent},
  {path:'registerUser',component:RegisterUserComponent},
  {path:'adminOptions',component:AdminOptionsComponent,canActivate:[AuthGuard]},
  {path:'adminCreate',component:CreateComponent,canActivate:[AuthGuard]},
  {path:'adminUpdate',component:UpdateComponent,canActivate:[AuthGuard]},
  {path:'adminView',component:ViewComponent,canActivate:[AuthGuard]},
  {path:'adminDelete',component:DeleteComponent,canActivate:[AuthGuard]},
  {path:'userOptions',component:UserOptionsComponent,canActivate:[AuthUserGuard]},
  {path:'userCreate',component:CreateUserComponent,canActivate:[AuthUserGuard]},
  {path:'userUpdate',component:UpdateUserComponent,canActivate:[AuthUserGuard]},
  {path:'userView',component:ViewUserComponent,canActivate:[AuthUserGuard]},
  {path:'userDelete',component:DeleteUserComponent,canActivate:[AuthUserGuard]},
  {path:"**",component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginAdminComponent,
    LoginUserComponent,
    RegisterUserComponent,
    AdminOptionsComponent,
    UserOptionsComponent,
    CreateComponent,
    ViewComponent,
    UpdateComponent,
    DeleteComponent,
    UpdateUserComponent,
    CreateUserComponent,
    ViewUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
