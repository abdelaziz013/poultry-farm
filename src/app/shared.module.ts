import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FarmDataComponent } from './components/farm-data/farm-data.component';




@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports: [HeaderComponent,ReactiveFormsModule, FormsModule]
})
export class SharedModule { }
