import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  slideOptions = {
    slidesPerView: 1.2
  }

  constructor(
    public toastCtrl: ToastController,
  ) {}


  

  ngOnInit() {
    
  }

  
  

}
