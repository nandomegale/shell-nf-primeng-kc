import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { tap } from 'rxjs';
@Component({
  selector: 'app-home',
  imports: [RouterLink, ButtonModule],
  template: `
    <p-button [routerLink]="['remote']" label="call remote"> </p-button><br />
    <p-button label="make http request" (click)="makeHttpRequest()"></p-button>
  `,
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly #http = inject(HttpClient);
  makeHttpRequest() {
    this.#http.get('https://pokeapi.co/api/v2/pokemon/ditto').pipe(tap(console.log)).subscribe();
  }
}
