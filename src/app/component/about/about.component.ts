import {Component, OnInit, DoCheck} from '@angular/core';
import {async} from "rxjs/internal/scheduler/async";
import {__await} from "tslib";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit, DoCheck {

  name = '123';
  newName: any;

  constructor() {
    this.fun1();
  }

  ngOnInit() {
    console.log('onInit')
  }

  ngDoCheck(): void {
    if (this.name == '张三') {
      console.log('正确');
      console.log(this.newName)
    }
  }

  ojbk() {
    this.newName = 123;
  }

  async fun1() {

    let fun2=()=>{
      return new Promise(resolve => {
        let i:number = 0;
        let timer1 = setInterval(() => {
          i++;
          console.log(`fun2:${i}`);
          if (i == 20) {
            resolve(i);
            clearInterval(timer1);
          }
        }, 200)
      })

    }
    let fun3=()=>{
      return new Promise(resolve => {
        let b:number = 0;
        let timer2 = setInterval(() => {
          b++;
          console.log(`fun3:${b}`);
          if (b == 10) {
            resolve(b);
            clearInterval(timer2);
          }
        }, 1000)
      })

    }



    let num2=await fun2();
    let num3=await fun3();
    console.log(num2,num3)
  }


}
