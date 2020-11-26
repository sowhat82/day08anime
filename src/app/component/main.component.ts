import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/motorcycle.json',
  }

  constructor(private router: Router, private ngzone: NgZone) { }

  ngOnInit(): void {
  }

  loopComplete(){
    this.ngzone.run(() =>this.router.navigate(['/searchlist']) )
    
  }

}
