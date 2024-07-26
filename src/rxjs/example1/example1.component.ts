import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RickAndMortyService } from '../../services/rickandmorty.service';
import { HttpClient } from '@angular/common/http';
import { debounce, debounceTime, delay, EMPTY, fromEvent, map, Observable, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'rxjs-example1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example1.component.html',
  styleUrl: './example1.component.scss'
})
export class Example1Component implements OnInit, AfterViewInit {

  @ViewChild('btn') btn!: ElementRef<HTMLButtonElement>;
  users$! : Observable<any>

  constructor(private http: HttpClient) {

  }

  ngAfterViewInit(): void {
    this.users$ = fromEvent(this.btn.nativeElement, 'click')
      .pipe(
        debounceTime(250),
        startWith('https://api.github.com/users'),
        map(() => {
          var randomOffset = Math.floor(Math.random()*500);
          return 'https://api.github.com/users?since=' + randomOffset;
        }),
        switchMap(url => this.http.get<any>(url)),
        map(users => { users.length = 3 ; return users}),
        tap((c) => console.log(c))
      )
  }

  ngOnInit(): void {

  }



}
