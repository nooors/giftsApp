import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [ButtonModule, SidebarModule, ToolbarModule]
})
export class PrimeNGModule { }
