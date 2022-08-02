/* eslint-disable @typescript-eslint/member-ordering */
import {  Component, EventEmitter,  OnInit, Output,  } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatetimeChangeEventDetail, IonDatetimeCustomEvent } from '@ionic/core';
import { format, parseISO } from 'date-fns';
@Component({
  selector: 'app-farm-data',
  templateUrl: './farm-data.component.html',
  styleUrls: ['./farm-data.component.scss'],
})
export class FarmDataComponent implements OnInit{
  @Output()
  formReady = new EventEmitter<FormGroup>();

  farmDataForm: FormGroup = this.fb.group({
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
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit() {

    this.formReady.emit(this.farmDataForm);
}
  get formControles() {
    return this.farmDataForm.controls;
  }

  setDateTime(e: IonDatetimeCustomEvent<DatetimeChangeEventDetail>, controlName: string) {
    const formattedString = format(parseISO(e.detail.value as string), 'MMM d, yyyy');
    this.farmDataForm.controls[controlName].setValue(formattedString);
  }
}
