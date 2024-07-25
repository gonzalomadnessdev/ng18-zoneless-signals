import { Component, computed, input } from '@angular/core';
import { IUser } from '../user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'example3child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example3child.component.html',
  styleUrl: './example3child.component.scss'
})
export class Example3childComponent {

  user = input.required<IUser>({ alias: 'selectedUser' })
  imgSrc = computed(() => '/example3/img/' + this.user().id + '.png')

}
