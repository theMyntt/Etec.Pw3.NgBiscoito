/**
 * @author Gabriel Araújo e Andrey Nardy
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.scss'
})
export class FrasesComponent {
  @Input()
  public selectedPhrase: string = ''
}
