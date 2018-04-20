import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CustomersComponent } from './components/customers/customers.component';

import { WeatherService } from './services/weather.service';

const appRoutes : Routes = [
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'customers', component:CustomersComponent} 
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
