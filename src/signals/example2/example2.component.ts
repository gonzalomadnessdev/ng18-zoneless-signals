import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'example2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.scss'
})
export class Example2Component {

  user = signal({ name: "", lastname: "", cash: 0 })
  users = signal([{ name: "", lastname: "", cash: 1000 }, { name: "", lastname: "", cash: 50 }])

  totalCash = computed(() => this.user().cash + this.users().map(u => u.cash).reduce((a, b) => a + b, 0))

  cashEffect = effect(()=> {
    console.log(`The cash is: ${this.totalCash()}`)
  });

  constructor(){
    effect(() => {
      console.log(`The user is: ${JSON.stringify(this.user())}`);
    });
  }

  ngOnInit(): void {
  }

  test() {
    this.user.update(u => { u.lastname = "Albornoz"; u.cash = 5000; return { ...u } })
    this.users.update(u => { u[0].name = "Gonza"; u[1].cash = 2000; return [...u] })
  }
}
