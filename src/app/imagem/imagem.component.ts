/**
 * @author Gabriel Araújo e Andrey Nardy
 */

import { Component } from '@angular/core';
import { FrasesComponent } from '../frases/frases.component';
import { BotaoComponent } from '../botao/botao.component';

@Component({
  selector: 'app-imagem',
  imports: [FrasesComponent, BotaoComponent],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.scss'
})
export class ImagemComponent {
  protected phrases: Array<string> = [
    "Acredite em você e tudo será possível.",
    "Cada pequeno passo é um progresso em direção ao seu objetivo.",
    "A persistência é o caminho do êxito.",
    "Não desista, grandes conquistas exigem tempo e esforço.",
    "Seja a mudança que você deseja ver no mundo.",
    "O sucesso começa quando você decide tentar.",
    "Fracassar é apenas uma oportunidade para recomeçar com mais inteligência.",
    "Seu único limite é a mente que você impõe a si mesmo.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "A jornada pode ser difícil, mas a recompensa vale a pena."
  ];
  protected selectedPhrase: string = ''

  imageSource = '/biscoito.png';
  phrasesOpen = false

  public constructor() {
    this.selectRandomPhrase();
  }

  quebrar() {
    this.imageSource = '/biscoito-aberto.png'
    this.phrasesOpen = true
  }

  reiniciar() {
    this.selectRandomPhrase();
    this.imageSource = '/biscoito.png'
    this.phrasesOpen = false
  }

  protected selectRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length)
    this.selectedPhrase = this.phrases[index]
  }
}
