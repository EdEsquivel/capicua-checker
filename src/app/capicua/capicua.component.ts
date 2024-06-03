import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Importar CommonModule y FormsModule
  templateUrl: './capicua.component.html',
  styleUrls: ['./capicua.component.css']
})
export class CapicuaComponent {
  inputNum: string = '';
  esCapicua: boolean | null = null;

  checkCapicua() {
    const num = this.inputNum;

    if (num.length < 2) {
      this.esCapicua = null;
      return;
    }

    this.esCapicua = num === num.split('').reverse().join('');
  }
}
