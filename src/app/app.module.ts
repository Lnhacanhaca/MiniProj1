import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FullBannerComponent } from './shared/full-banner/full-banner.component';
import { QuemSouContainerComponent } from './shared/quem-sou-container/quem-sou-container.component';
import { ServicesContainerComponent } from './shared/services-container/services-container.component';
import { SkillContainerComponent } from './shared/skill-container/skill-container.component';
import { HobbiesContainerComponent } from './shared/hobbies-container/hobbies-container.component';
import { ContactContainerComponent } from './shared/contact-container/contact-container.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    QuemSouContainerComponent,
    ServicesContainerComponent,
    SkillContainerComponent,
    HobbiesContainerComponent,
    ContactContainerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
