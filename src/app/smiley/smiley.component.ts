import { Component } from '@angular/core';
// import {AsistenteService} from '../asistente.service';

@Component({
  selector: 'app-smiley',
  templateUrl: './smiley.component.html',
  styleUrls: ['./smiley.component.scss']
})
export class SmileyComponent {
  //cramos el array
  emojis = ['😀', '😁', '😂', 
  '😃',  '😄',  '😅', '😆', '😉', 
  '😊', '😋', '😎', '😍', '😘', '😗', 
  '😙', '😚', '😐', '😑', '😶'];
   

}
