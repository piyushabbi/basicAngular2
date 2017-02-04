import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <section>
      <ul>
        <li> <a routerLink="/">Home</a> </li>
        <li> <a routerLink="/about">About</a> </li>
      </ul>
    </section>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent  {

}
