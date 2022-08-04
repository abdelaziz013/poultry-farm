/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { FarmData, FarmResponseData } from 'src/app/models/Farm.model';
import { ErrorService } from '../error/error.service';


@Injectable({
  providedIn: 'root'
})
export class FarmService {

  Farms$: Observable<{farmData: FarmData[]}>= this.http.get<FarmResponseData>(`${environment.apiURL}/Farms`).pipe(
      map(result => ({
        farmData: result.data.map(e => ({
          id: e.id,
          farmName: e.attributes.FarmName
        }))
      })),
      catchError(err => this.errorService.handleError(err))
    );



  constructor(private http: HttpClient,private errorService: ErrorService) {}

  getFarms() {
    return this.http.get<FarmResponseData>(`${environment.apiURL}/Farms`).pipe(
      map(result => ({
        data: result.data.map(e => ({
          id: e.id,
          farmName: e.attributes.FarmName
        }))
      })),
      catchError(err => this.errorService.handleError(err))
    );
  }

  addFarm(farmData: FarmData) {
    const payload = { data: { ...farmData} };
    return this.http.post(`${environment.apiURL}/Farms`, payload);
  }


}
