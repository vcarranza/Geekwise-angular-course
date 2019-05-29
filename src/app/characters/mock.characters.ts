import { CharacterInterface } from '../interfaces/character-interface';

export const CHARACTERS: CharacterInterface[] = [
    {   id:1, 
        name: 'Bob', 
        type: 'Hero', 
        image: 'https://media.gannett-cdn.com/29906170001/29906170001_5827876728001_5827873655001-vs.jpg?pubId=29906170001&quality=50',
        abilities: ['sight', 'walking', 'breathing'], 
        description:'Just walking with some boring guy who doesnt leave me alone'
    },
    {   id:2, 
        name: 'Bob\s mistress', 
        image: 'https://thumbs-prod.si-cdn.com/rEAijwAeUa9KFkm0aem0yN6A6qM=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/d1/58/d158701b-58cf-4fcc-aa1b-204c91438260/super-villains-always-lose-1024-576.jpg',
        type: 'Villain', 
        abilities: ['Mind control over bob'], 
        description:'Can control bob and all guys.'
    },
    {   id:3, 
        name: 'Bob\s sister', 
        image: 'https://static1.squarespace.com/static/59c73941bebafb0293c8f06e/59cc6c290abd041a4c5b2a90/59d1eee0f6576e06c37bf3a5/1506930402656/seaweed-splash-4.jpg?format=1500w',
        type: 'sister', 
        abilities: ['Mind control over bob as well'], 
        description:'Can control bob and mistress.'
    },
    {   id:4, 
        name: 'Bob\s cat', 
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        type: 'cats', 
        abilities: ['Mind control over cats'], 
        description:'Can control the cats.'
    },
    {   id:5, 
        name: 'Bob\s dog', 
        image: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
        type: 'dog', 
        abilities: ['Mind control over dogs'], 
        description:'Can control the dogs.'
    },
];