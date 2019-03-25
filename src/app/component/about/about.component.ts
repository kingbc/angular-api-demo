import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit, DoCheck, OnDestroy{

  name = '123';
  newName: any;
  timer1:any;
  timer2:any;

  constructor() {
    this.fun1();
  }

  ngOnInit() {
    console.log('onInit')
  }

  // 变量监听
  ngDoCheck(): void {
    if (this.name == '张三') {
      console.log('正确');
      console.log(this.newName)
    }
  }

  ojbk() {
    this.newName = 123;
  }

  // 异步处理
  async fun1() {

    let fun2=()=>{
      return new Promise(resolve => {
        let i:number = 0;
        this.timer1 = setInterval(() => {
          i++;
          console.log(`fun2:${i}`);
          if (i == 20) {
            resolve(i);
            clearInterval(this.timer1);
          }
        }, 100)
      })

    };
    let fun3=()=>{
      return new Promise(resolve => {
        let b:number = 0;
        this.timer2 = setInterval(() => {
          b++;
          console.log(`fun3:${b}`);
          if (b == 10) {
            resolve(b);
            clearInterval(this.timer2);
          }
        }, 200)
      })

    };



    let num2=await fun2();
    let num3=await fun3();
    console.log(num2,num3)
  }

  ngOnDestroy(): void {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }

}
