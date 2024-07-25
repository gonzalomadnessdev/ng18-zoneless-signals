import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example1Component } from '../signals/example1/example1.component';
import { Example2Component } from '../signals/example2/example2.component';
import { Example3ioComponent } from '../signals/example3io/example3io.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Example1Component, Example2Component, Example3ioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {



}
