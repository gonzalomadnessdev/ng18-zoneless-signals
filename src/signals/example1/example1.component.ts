import { Component, OnInit, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RickAndMortyService } from '../../services/rickandmorty.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'example1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class Example1Component implements OnInit {
  tick = signal(0);
  message = signal("");

  //distintas maneras de manejar un resultado http con signals
  characters = signal<any>(null);
  _characters : Signal<null>;
  characters$;

  constructor(private rym: RickAndMortyService) {
    this.characters$ = this.rym.getCharacters().pipe(map(r => r.results));
    this._characters = toSignal<any>(this.rym.getCharacters().pipe(map(r => r.results)))
  }

  ngOnInit(): void {
    setInterval(()=> {this.tick.update(v => v + 1)} , 1000)
    this.getChars()
  }

  submit() {
    this.message.set("hola")
  }

  getChars() {
    this.rym.getCharacters().pipe(map(r => r.results)).subscribe((res) => {
      this.characters.set(res)
    })

  }
}
