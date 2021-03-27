import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth-service';
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { TechPageComponent } from './pages/tech-page/tech-page.component';
import { MechPageComponent } from './pages/mech-page/mech-page.component';
import { MockinterComponent } from './mockinter/mockinter.component';
import { InfotechPageComponent } from './pages/infotech-page/infotech-page.component';
import { ExtcPageComponent } from './pages/extc-page/extc-page.component';

const appRoutes : Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashBoardComponent},
  {path: 'mockinterview', component: MockinterComponent},
  {path: '', component: BasicPageComponent},
  {path: 'techpage', component: TechPageComponent},
  {path: 'mechpage', component: MechPageComponent},
  {path: 'infotechpage', component: InfotechPageComponent},
  {path: 'extcpage', component: ExtcPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DashBoardComponent,
    BasicPageComponent,
    TechPageComponent,
    MechPageComponent,
    MockinterComponent,
    InfotechPageComponent,
    ExtcPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
