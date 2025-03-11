/**
 * @author Gabriel Araújo e Andrey Nardy
 */

import { Component } from '@angular/core';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-imagem',
  imports: [FrasesComponent],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  imageSource = '/biscoito.png';
  phrasesOpen = false

  changeImageSource() {
    if (this.imageSource == '/biscoito.png') {
      this.phrasesOpen = true
      this.imageSource = '/biscoito-aberto.png'
    }
    else {
      this.phrasesOpen = false
      this.imageSource = '/biscoito.png'
    }
  }


}
