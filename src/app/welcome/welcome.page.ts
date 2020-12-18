import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController, NavController, LoadingController, AlertController } from '@ionic/angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  moblieNum: string = "";

  constructor(
    private loading: LoadingController,
    private http: HttpClient, 
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async GetOtp() {

    if(this.moblieNum.length < 10) {
      this.presentToast("Please provide a valid mobile number");
    }
    else {
      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = { headers: headers };


      let data = {
        number: this.moblieNum
      };

      let loader = await this.loading.create({
        message: 'Processing please wait...',
      });

      loader.present().then(() => {
        this.http.post('url', data, options)
          .map(res => res)
          .subscribe((res: any) => {
            
            console.log(res)
            loader.dismiss()         
            
          });
      });
    }

    
  }

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

}
