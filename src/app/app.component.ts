import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';
import { StackComponent } from './stack/stack.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomComponent, StackComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Landing';
}
