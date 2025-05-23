import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';
import { AboutProductComponent } from './about-product/about-product.component';



@NgModule({
  declarations: [
    AboutUsComponent,
    AboutCeoComponent,
    AboutProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
