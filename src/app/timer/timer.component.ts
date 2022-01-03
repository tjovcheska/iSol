import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit { 

  message = "One time use only. Limited time special offer. Excludes subscriptions, kits, bundles, and sale items.";
  logo = "BULLETPROOF";
  constructor() { }

  ngOnInit() {
    //this.countdownTimer();
  }

  mins: number = 14;
  secs: number = 59;

  countDownDate: number = new Date().getTime() + 900000;
  
  x = setInterval(() => {
    
    //console.log(countDownDate);
    
    var now = new Date().getTime();
    //console.log(now);
        
    var distance = this.countDownDate - now;

    this.mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this. secs = Math.floor((distance % (1000 * 60)) / 1000);
    
  }, 1000);
}

  



