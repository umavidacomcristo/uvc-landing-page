import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'uvc-landing-page';


  items: NbMenuItem[] = [
    {
      title: 'home',
      link: '/'
    },
    {
      title: 'dashboard',
      link: 'dashboard'
    }
   ];


   constructor(
     private deviceDetector: DeviceDetectorService,
     private router: Router){}
  ngOnInit(): void {
    if(this.deviceDetector.isDesktop()){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/splash'])
    }
  }


}
