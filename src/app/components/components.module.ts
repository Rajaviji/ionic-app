import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'; 
import { StartComponent } from './start/start.component';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [StartComponent,SlidesComponent,LogoComponent],
  exports:[StartComponent,SlidesComponent,LogoComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ]
})
export class ComponentsModule { }
