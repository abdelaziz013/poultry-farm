/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatetimeChangeEventDetail, IonDatetimeCustomEvent, SelectCustomEvent } from '@ionic/core';
import { format, parseISO } from 'date-fns';
import { Observable } from 'rxjs';
import { FarmData } from 'src/app/models/Farm.model';
import { FarmService } from 'src/app/services/farmService/farm.service';
@Component({
  selector: 'app-farm-data',
  templateUrl: './farm-data.component.html',
  styleUrls: ['./farm-data.component.scss'],
})
export class FarmDataComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  farm$: Observable<{
    farmData: FarmData[];
  }> = this.farmService.Farms$;


  farmDataForm: FormGroup = this.fb.group({
    day: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    date: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
    farm: new FormControl('', {
      updateOn: 'change',

    }),
    code: new FormControl('', {
      updateOn: 'change',
      validators: [Validators.required]
    }),
  });
  constructor(private fb: FormBuilder, private farmService: FarmService) { }
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

  setFarmCodeValue(e: SelectCustomEvent) {
    this.farmDataForm.controls.code.setValue(e.detail.value);
  }
}
