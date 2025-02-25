import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  imageSource = '/biscoito.png'

  changeImageSource() {
    if (this.imageSource == '/biscoito.png')
      this.imageSource = '/biscoito-aberto.png'
    else
      this.imageSource = '/biscoito.png'
  }
}
