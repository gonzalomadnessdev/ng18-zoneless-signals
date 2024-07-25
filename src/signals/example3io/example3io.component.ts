import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { Example3childComponent } from './example3child/example3child.component';
import { IUser } from './user.interface';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'example3',
  standalone: true,
  imports: [CommonModule, Example3childComponent, ReactiveFormsModule],
  templateUrl: './example3io.component.html',
  styleUrl: './example3io.component.scss'
})
export class Example3ioComponent {

  users = [
    { name: "John", lastname: "Doe", id: 1 },
    { name: "Cosme", lastname: "Fulanito", id: 2 },
  ];

  userCtrl = new FormControl<number>(0);
  user: WritableSignal<IUser>;

  constructor() {
    const initialUser = this.users[0];
    this.user = signal<IUser>(initialUser)
    this.userCtrl.setValue(initialUser.id)

    this.userCtrl.valueChanges.subscribe(id => {
      const user = this.users.find(_u => _u.id == id);
      if (user) {
        this.user.set(user)
      }
    })
  }

  onSelect(event: Event) {
    const id = Number((event.target as HTMLSelectElement).value);
    const user = this.users.find(_u => _u.id == id);
    if (user) {
      this.user.set(user)
    }
  }


}


