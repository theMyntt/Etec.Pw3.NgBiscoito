/**
 * @author Gabriel Araújo e Andrey Nardy
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.scss'
})
export class FrasesComponent {
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


  // A melhor forma era utilizando o ngOnInit da interface OnInit pois quando o componente eh inicializado, o angular chama o construtor dele 5 6 vezes...
  public constructor() {
    this.selectRandomPhrase()
  }

  protected selectRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length)
    this.selectedPhrase = this.phrases[index]
  }
}
