import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { IndividualCharacterComponent } from './individual-character/individual-character.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'characters', component: CharactersComponent},
  { path: 'character/:id', component: IndividualCharacterComponent},
  { path: 'contacts', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
