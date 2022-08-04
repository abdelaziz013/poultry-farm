/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatetimeChangeEventDetail,  IonDatetimeCustomEvent} from '@ionic/core';
import { format, parseISO } from 'date-fns';
import { switchMap } from 'rxjs/operators';
import { Quality } from 'src/app/models/Quality.model';
import { AppService } from 'src/app/services/application/app.service';
import { QualityService } from 'src/app/services/quality/quality.service';
@Component({
  selector: 'app-quality',
  templateUrl: './quality.page.html',
  styleUrls: ['./quality.page.scss'],
})
export class QualityPage implements OnInit {
  qualityForm: FormGroup = new FormGroup({
    chestContusions: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    wings: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    legs: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    backScratches: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    machineDamage: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    execution: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    diagnosis: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    causes: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    recommendation: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
  });
  get formControles() {
    return this.qualityForm.controls;
  }
  constructor( private appService: AppService,
    private router: Router,
    private qualityService: QualityService
    ) { }
  ngOnInit() {
  }
  submit() {
    let loading: HTMLIonLoadingElement;
    if (!this.qualityForm.valid) {
      return;
    }
    const{chestContusions,wings,legs,backScratches,machineDamage,execution,
      diagnosis, causes, recommendation
    }=this.qualityForm.value;

    const payload: Quality={
      FarmCode:this.qualityForm.value.farmData.code.toString(),
      ReceptionDate: this.qualityForm.value.farmData.date,
      ChestContusions: chestContusions.toString(),
      Wings: wings.toString(),
      Legs: legs.toString(),
      BackScratches: backScratches.toString(),
      MachineDamage: machineDamage.toString(),
      ManufactureExecution: execution.toString(),
      Diagnostic: diagnosis,
      Reasons: causes,
      Procedure: recommendation,
    };


    this.appService.showLoading('....إضافة تقرير جودة').pipe(
      switchMap((loadingEl)=>{
        loading=loadingEl;
        loading.present();
        return this.qualityService.addQualityReport(payload);

      })
    ).subscribe((res)=>{
      loading.dismiss();
      this.router.navigate(['reception']);
    },(error)=>{
      loading.dismiss();
      this.appService.showAlert('خطأ','خطأ عند التسجيل');
    });


  }


  addChildForm(name: string, group: FormGroup) {
    this.qualityForm.addControl(name, group);
  }
}
