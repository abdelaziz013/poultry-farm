/* eslint-disable @typescript-eslint/naming-convention */
import { ReceptionService } from './../../../services/receptionService/reception.service';
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatetimeChangeEventDetail, IonDatetimeCustomEvent } from '@ionic/core';
import { format, parseISO } from 'date-fns';
import { FarmService } from 'src/app/services/farmService/farm.service';
import { Reception } from 'src/app/models/Reception.model';
import { AppService } from 'src/app/services/application/app.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reception-form',
  templateUrl: './reception-form.page.html',
  styleUrls: ['./reception-form.page.scss']
})
export class ReceptionFormPage implements OnInit {
  receptionForm: FormGroup = new FormGroup({
    carNo: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    driverName: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    leaveTime: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    poultryNo: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    arrivalTime: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    cant: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    slaughterStart: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),

    slaughterEnd: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    executionNo: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    outPutVoucher: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    })
  });
  get formControles() {
    return this.receptionForm.controls;
  }
  constructor(private receptionService: ReceptionService,
     private appService: AppService,
     private router: Router,
     ) {}

  ngOnInit() {

  }
  addChildForm(name: string, group: FormGroup) {
    this.receptionForm.addControl(name, group);
  }
  submit() {
    let loading: HTMLIonLoadingElement;
    if (!this.receptionForm.valid) {
      return;
    }
    const {
      carNo,
      driverName,
      leaveTime,
      poultryNo,
      arrivalTime,
      cant,
      slaughterStart,
      slaughterEnd,
      executionNo,
      outPutVoucher
    } = this.receptionForm.value;
    const payLoad: Reception = {
      CarChickenDeath: cant.toString(),
      CarNumber: carNo,
      DriverName: driverName,
      Execution: executionNo.toString(),
      ExitID: outPutVoucher,
      FarmCode: this.receptionForm.value.farmData.code.toString(),
      FinishStaughter: slaughterEnd,
      HourArrival: arrivalTime,
      HourLeft: leaveTime,
      NumberofChicken: poultryNo.toString(),
      ReceptionDate: this.receptionForm.value.farmData.date,
      StartStaughter: slaughterStart
      // TotalHealthy: 100,
    };

    this.appService.showLoading('....إضافة سيارة').pipe(
      switchMap((loadingEl)=>{
        loading=loadingEl;
        loading.present();
        return this.receptionService.addReception(payLoad);

      })
    ).subscribe((res)=>{
      loading.dismiss();
      this.router.navigate(['reception']);
    },(error)=>{
      loading.dismiss();
      this.appService.showAlert('خطأ','خطأ عند التسجيل');
    });

  }

  setDateTime(e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>, controlName: string) {
    const dateTimeOption = controlName === 'date' ? 'MMM d, yyyy' : 'HH:mm a';
    const formattedString = format(parseISO(e.detail.value as string), dateTimeOption);
    this.receptionForm.controls[controlName].setValue(formattedString);
  }
}
