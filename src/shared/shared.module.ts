import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from "shared/pipes/filter.pipe";

@NgModule({
  declarations: [
      FilterPipe
  ],
  imports: [
    BrowserModule
  ],
  exports:[FilterPipe]
})
export class SharedModule { }
