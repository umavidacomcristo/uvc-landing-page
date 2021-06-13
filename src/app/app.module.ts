import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbMenuModule, NbButtonModule, NbActionsModule, NbInputModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MaterialModule } from './material.module';
import { TeamComponent } from './components/shared/team/team.component';
import { SplashComponent } from './components/shared/splash/splash.component';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TeamComponent,
    SplashComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    NbInputModule,

    NbCardModule,
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbActionsModule,
    FlexLayoutModule,

    MaterialModule
  ],
  providers: [Window, Document ],
  bootstrap: [AppComponent]
})
export class AppModule { }
