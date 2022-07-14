import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNGModule } from '../prime-ng.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule, PrimeNGModule
  ],
  exports: [SidebarComponent, ToolbarComponent]
})
export class SharedModule { }
