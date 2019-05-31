import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CHARACTERS } from '../characters/mock.characters';
import { CharacterInterface } from '../interfaces/character-interface';
import { Character } from '../models/character';

@Component({
  selector: 'app-individual-character',
  templateUrl: './individual-character.component.html',
  styleUrls: ['./individual-character.component.css']
})
export class IndividualCharacterComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  character: CharacterInterface;

  
  getCurrentCharacter(): void {
    const id = (this.router.snapshot.paramMap.get('id'));
    this.character = CHARACTERS.find(Character => Character.id === +id);
  }
  ngOnInit() {
    this.getCurrentCharacter();
  }

}
