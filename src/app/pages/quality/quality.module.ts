import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QualityPageRoutingModule } from './quality-routing.module';

import { QualityPage } from './quality.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualityPageRoutingModule,
    SharedModule
  ],
  declarations: [QualityPage]
})
export class QualityPageModule {}
