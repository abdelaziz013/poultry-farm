import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private loadingCtrl: LoadingController,
    private alertController: AlertController
    ) { }

  /**
   * Shows loading
   * param message
   *
   * @returns loading  spinner
   */

  showLoading(message: string): Observable<HTMLIonLoadingElement> {
    return from(this.loadingCtrl.create({ keyboardClose: true, message }));
  }

  /**
   * Shows alert
   * param message
   */
   showAlert(header: string, message: any) {
    from(
      this.alertController.create({
        cssClass: 'my-custom-class',
        header,
        message: `${message}`,
        buttons: [
          {
            text: 'Ok',
            role: 'cancel',
            cssClass: 'warning'
          }
        ]
      })
    ).subscribe((alert: HTMLIonAlertElement) => {
      alert.present();
    });
  }
}
