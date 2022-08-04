import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Reception } from 'src/app/models/Reception.model';
import { environment } from 'src/environments/environment';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getReceptions() {
    return this.http.get(`${environment.apiURL}/Receptions`);
  }

  addReception(receptionData: Reception) {
    const payload = { data: { ...receptionData } };
    return this.http.post(`${environment.apiURL}/Receptions`, payload).pipe(
      catchError(err => this.errorService.handleError(err))
    );
  }
}
