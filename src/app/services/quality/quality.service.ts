import { Quality } from './../../models/Quality.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '../error/error.service';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QualityService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }
  addQualityReport(qualityData: Quality) {
    const payload = { data: { ...qualityData} };
    return this.http.post(`${environment.apiURL}/Receptions`, payload).pipe(
      catchError(err => this.errorService.handleError(err))
    );
  }
}
