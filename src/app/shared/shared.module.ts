import { NgModule } from '@angular/core';
import { PrimeNGModule } from '../prime-ng.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent

  ],
  imports: [
    PrimeNGModule,

  ],
  exports: [
    SidebarComponent
  ]

})
export class SharedModule { }
