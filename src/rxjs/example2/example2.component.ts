import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'rxjs-example2',
  standalone: true,
  imports: [],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss'
})
export class Example2Component implements OnInit {

  cold$ = new Observable((subscriber) => {
    setTimeout(()=>{
      subscriber.next(1);
      setTimeout(()=>{
        subscriber.next(2);
        setTimeout(()=>{
          subscriber.next(3);
        }, 500)
      }, 500)
    }, 500)
  });

  hot = new Subject();
  hot$ = this.hot.asObservable();

  coldSubscriber1!: Subscription;
  coldSubscriber2!: Subscription;

  hotSubscriber1!: Subscription;
  hotSubscriber2!: Subscription;

  constructor() {

  }

  async ngOnInit(): Promise<void> {
    this.testCold();
    this.testHot();

    await sleep(500)
    this.hot.next('a')
    await sleep(500)
    this.hot.next('b')
    await sleep(500)
    this.hot.next('c')
  }

  async testCold(){
    console.log("Se suscribe COLD 1")
    this.coldSubscriber1 = this.cold$.subscribe(n => console.log(n + " (cold 1)"))
    await sleep(2000)
    console.log("Se suscribe COLD 2")
    this.coldSubscriber2 = this.cold$.subscribe(n => console.log(n + " (cold 2)"))
  }

  async testHot(){
    console.log("Se suscribe HOT 1")
    this.hotSubscriber1 = this.hot$.subscribe(n => console.log(n + " (hot 1)"))
    await sleep(2000)
    console.log("Se suscribe HOT 2")
    this.hotSubscriber2 = this.hot$.subscribe(n => console.log(n + " (hot 2)"))
  }

}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}
