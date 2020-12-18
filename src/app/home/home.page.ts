import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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

  newPatients = [
    {
      name: "Akshay",
      remainingDays: 10,
      address: "Thrissur, kerala",
      age: 40,
      status: "home quarantine"
    },
    {
      name: "Ajay",
      remainingDays: 15,
      address: "shornur, palakkad",
      age: 30,
      status: "home quarantine"
    },
    {
      name: "Jagan",
      remainingDays: 20,
      address: "wadakkanchery, thrissur",
      age: 20,
      status: "home quarantine"
    }
  ];

  recentPatients = [
    {
      name: "Akshay",
      remainingDays: 10,
      address: "Thrissur, kerala",
      age: 40,
      status: "home quarantine"
    },
    {
      name: "Ajay",
      remainingDays: 15,
      address: "shornur, palakkad",
      age: 30,
      status: "home quarantine"
    },
    {
      name: "Jagan",
      remainingDays: 20,
      address: "wadakkanchery, thrissur",
      age: 20,
      status: "home quarantine"
    },
    {
      name: "Ajay",
      remainingDays: 15,
      address: "shornur, palakkad",
      age: 30,
      status: "home quarantine"
    },
    {
      name: "Akshay",
      remainingDays: 10,
      address: "Thrissur, kerala",
      age: 40,
      status: "home quarantine"
    },
  ]

  constructor(
    public toastCtrl: ToastController,
    private router: Router,
  ) {}


  

  ngOnInit() {
    
  }

  openDetailsWithState(item: any) {    
    let navigationExtras: NavigationExtras ={
      state: {
        user: item
      }
    }
    this.router.navigate(['patient-details'], navigationExtras);
  }

  
  

}
