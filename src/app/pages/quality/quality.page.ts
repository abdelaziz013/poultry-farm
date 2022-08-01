/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatetimeChangeEventDetail,  IonDatetimeCustomEvent} from '@ionic/core';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-quality',
  templateUrl: './quality.page.html',
  styleUrls: ['./quality.page.scss'],
})
export class QualityPage implements OnInit {
  qualityForm: FormGroup = new FormGroup({
    day: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    qualityDate: new FormControl('', {
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
  constructor() { }
  ngOnInit() {
  }
  submit() {
    if (!this.qualityForm.valid) {
      return;
    }
    console.log(this.qualityForm.value);
  }
  setDateTime(e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>, controlName: string) {
    const formattedString = format(parseISO(e.detail.value as string), 'MMM d, yyyy');
    this.qualityForm.controls[controlName].setValue(formattedString);
  }
}
