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
    const{chestContusions,wings,legs,backScratches,machineDamage,execution,
      diagnosis, causes, recommendation
    }=this.qualityForm.value;
  }
  addChildForm(name: string, group: FormGroup) {
    this.qualityForm.addControl(name, group);
  }
}
