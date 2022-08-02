import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptionFormPageRoutingModule } from './reception-form-routing.module';

import { ReceptionFormPage } from './reception-form.page';
import { SharedModule } from 'src/app/shared.module';
import { FarmDataComponent } from '../../../components/farm-data/farm-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptionFormPageRoutingModule,
    SharedModule
  ],
  declarations: [ReceptionFormPage,FarmDataComponent]
})
export class ReceptionFormPageModule {}
