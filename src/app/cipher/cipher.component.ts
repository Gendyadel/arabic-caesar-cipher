import { Component } from '@angular/core';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.scss']
})
export class CipherComponent {
  arabicLetters = [
    'أ', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط',
    'ظ', 'ع', 'غ', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ي'
  ];

  inputText: string = '';
  shift: number = 0;
  outputText: string = '';

  // Function to encode the text using Caesar Cipher
  encode(): void {
    this.outputText = this.caesarCipher(this.inputText, this.shift);
  }

  // Function to decode the text using Caesar Cipher
  decode(): void {
    this.outputText = this.caesarCipher(this.inputText, -this.shift);
  }

  // Caesar Cipher logic
  caesarCipher(text: string, shift: number): string {
    let result = '';

    for (let char of text) {
      const index = this.arabicLetters.indexOf(char);
      if (index === -1) {
        result += char; // If not an Arabic letter, keep the character unchanged
      } else {
        let newIndex = (index + shift) % this.arabicLetters.length;
        if (newIndex < 0) newIndex += this.arabicLetters.length; // Handle negative shifts
        result += this.arabicLetters[newIndex];
      }
    }

    return result;
  }
}
