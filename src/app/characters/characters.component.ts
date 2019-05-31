import { Component, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CHARACTERS} from './mock.characters';
import { CharacterInterface } from '../interfaces/character-interface';
import { Character } from '../models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnChanges {


  constructor(private route: ActivatedRoute) { }

  characters: CharacterInterface[];

  @Input() characters: CharacterInterface[];

  @Input() type:string | boolean;

  isHero(character: CharacterInterface): boolean { return character.type === "Hero"; } 

  renderCharacters(){
    this.type = this.route.snapshot.queryParamMap.get("type");
    if (this.type) {
      this.characters = CHARACTERS.filter(character => character.type === this.type);
    } else {
      this.type = false;
      this.characters = CHARACTERS;
    }
  }

  ngOnChanges(changes) {
    this.renderCharacters()
  }

}
