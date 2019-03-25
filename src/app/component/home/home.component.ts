import { Component, OnInit, OnDestroy, AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit {

  constructor(
    public router: Router
  ) {
    console.log('组件--home')

  }

  ngOnInit() {
    console.log('组件--home被选定，最早执行')
  }

  ngAfterContentInit(): void {
    console.log('组件--home被选定，早于contentChecked执行')
  }

  ngAfterContentChecked(): void {
    console.log('组件--home被选定，早于ViewInit执行')
  }

  ngAfterViewInit(): void {
    console.log('组件--home被选定，早于ViewChecked执行')
  }

  // 组件被选定时执行的方法
  ngAfterViewChecked(): void {
    console.log('组件--home被选定，晚于ViewInit执行')
  }

  // 组件被销毁时执行的方法
  ngOnDestroy(): void {
    console.log('组件--home被销毁')
  }

  //跳转新页面
  openAbout() {
    this.router.navigateByUrl('appAbout');
  }
}
