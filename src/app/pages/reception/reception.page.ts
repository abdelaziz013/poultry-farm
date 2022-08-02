/* eslint-disable @typescript-eslint/member-ordering */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.page.html',
  styleUrls: ['./reception.page.scss'],
})
export class ReceptionPage implements OnInit {
  @Output()
  formReady = new EventEmitter<FormGroup>();

  receptionForm: FormGroup = this.fb.group({
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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formReady.emit(this.receptionForm)
  }//

  get formControles() {
    return this.receptionForm.controls;
  }
}
