import { Component, OnInit } from '@angular/core';

import { CHARACTERS} from './mock.characters';
import { CharacterInterface } from '../interfaces/character-interface';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor() { }

  characters: CharacterInterface[] = CHARACTERS;

  isHero(character: CharacterInterface): boolean { return character.type === "Hero"; } 

  ngOnInit() {
  }

}
