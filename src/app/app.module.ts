import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { AccomodationComponent } from './Component/accomodation/accomodation.component';
import { GalleryComponent } from './Component/gallery/gallery.component';
import { ContactComponent } from './Component/contact/contact.component';
import { BookingComponent } from './Component/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AccomodationComponent,
    GalleryComponent,
    ContactComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
