import { Component } from '@angular/core';
import { CapicuaComponent } from './capicua/capicua.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CapicuaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capicua-checker';
}
