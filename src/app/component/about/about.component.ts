import {Component, OnInit, DoCheck, OnDestroy, NgZone} from '@angular/core';

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
  timer3:any;

  constructor(
    public zone:NgZone
  ) {
    this.fun1();

    // angular之外执行方法，当angular所有方法执行结束之后，此处执行方法不会渲染视图
    this.zone.runOutsideAngular(()=>{
      this.zoneFun()
    })
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

  //重新执行zoneFun()方法
  zoneRunFun() {
    this.zone.run(()=>{
      this.zoneFun()
    })
  }

  // 异步处理
  async fun1() {

    let fun2=()=>{
      return new Promise(resolve => {
        let i:number = 0;
        this.timer1 = setInterval(() => {
          i++;
          console.log(`fun2:${i}`);
          if (i == 5) {
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
          if (b ==5) {
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

  //ngZone
  zoneFun(){
    let num=0;
    this.timer3=setInterval(()=>{
      this.name=Math.random().toString();
      num++;
      console.log(num);
      if (num>100){
        clearInterval(this.timer3)
      }
    },500)

  }
  
  testFun(key){
    let str:string;
    switch (key) {
      case 1:str='1';break;
      case 2:str='2';break;
      case 3:str='3';break;
      default:str='undefined';break;
    }
    return str;
  }

  ngOnDestroy(): void {
    clearInterval(this.timer1);
    clearInterval(this.timer2);
  }

}
