/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatetimeChangeEventDetail, IonDatetimeCustomEvent } from '@ionic/core';

import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-reception-form',
  templateUrl: './reception-form.page.html',
  styleUrls: ['./reception-form.page.scss']
})
export class ReceptionFormPage implements OnInit {
  receptionForm: FormGroup = new FormGroup({
    day: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    receptionDate: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    farm: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    code: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
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
  constructor() {}

  ngOnInit() {}

  submit() {
    if (!this.receptionForm.valid) {
      return;
    }
    console.log(this.receptionForm.value);
  }

  setDateTime(e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>, controlName: string) {
    const dateTimeOption = controlName === 'receptionDate' ? 'MMM d, yyyy' : 'HH:mm a';
    const formattedString = format(parseISO(e.detail.value as string), dateTimeOption);
    this.receptionForm.controls[controlName].setValue(formattedString);
  }
}
