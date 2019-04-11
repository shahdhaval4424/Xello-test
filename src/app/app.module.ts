import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { XellotooltipDirective } from '../directive/diretives';
import { XellotooltipComponent } from './xellotooltip-component/xellotooltip-component';


@NgModule({
  declarations: [
    AppComponent,
    XellotooltipDirective,
    XellotooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [XellotooltipComponent],
})
export class AppModule { }
