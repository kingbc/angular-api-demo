import { Component, OnInit, OnDestroy, AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit {

  public clickNum:number=0;

  constructor(
    public router: Router
  ) {
    console.log('组件--home')

  }

  ngOnInit() {
    console.log('组件--home被选定，ngOnInit')
  }

  ngAfterContentInit(): void {
    console.log('组件--home被选定，ngAfterContentInit早于contentChecked执行')
  }

  ngAfterContentChecked(): void {
    console.log('组件--home被选定，ngAfterContentChecked早于ViewInit执行')
  }

  ngAfterViewInit(): void {
    console.log('组件--home被选定，ngAfterViewInit早于ViewChecked执行')
  }

  // 组件被选定时执行的方法
  ngAfterViewChecked(): void {
    console.log('组件--home被选定，ngAfterViewChecked晚于ViewInit执行')
  }

  // 组件被销毁时执行的方法
  ngOnDestroy(): void {
    console.log('组件--home被销毁')
  }

  //跳转新页面
  openAbout() {
    this.router.navigateByUrl('appAbout');
  }

  //同一组件同时绑定单击和双击事件处理方法
  //鼠标单击
  singleClick(){
    this.clickNum++;
    setTimeout(()=>{
      if(this.clickNum==2){
       this.doubleClick();
      }else if(this.clickNum==1) {
        console.log('点击事件');
      }
      this.clickNum=0;
    },300)
  }

  //鼠标双击
  doubleClick(){
    console.log('双击事件')
  }
}
