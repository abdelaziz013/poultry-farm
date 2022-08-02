import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QualityPageRoutingModule } from './quality-routing.module';
import { QualityPage } from './quality.page';
import { SharedModule } from 'src/app/shared.module';
import { FarmDataComponent } from 'src/app/components/farm-data/farm-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QualityPageRoutingModule,
    SharedModule
  ],
  declarations: [QualityPage,FarmDataComponent]
})
export class QualityPageModule {}
