import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ToastController, NavController, LoadingController, AlertController } from '@ionic/angular';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  moblieNum: number;
  password: string = "";

  constructor(
    private loading: LoadingController,
    private http: HttpClient, 
    private toastCtrl: ToastController,
    private storage: Storage,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  async GetOtp() {

    if(this.moblieNum.toString().length != 10) {
      this.presentToast("Please provide a valid mobile number");
    }else if (this.password.length < 6) {
      this.presentToast("Password should be atleast 6 characters");
    }
    else {

      let loader = await this.loading.create({
        message: 'Processing please wait...',
      });

      loader.present().then(() => {

        this.storage.set('phone', this.moblieNum);
        this.storage.set('password', this.password);
        loader.dismiss();
        this.navCtrl.navigateRoot('/home');
        
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
