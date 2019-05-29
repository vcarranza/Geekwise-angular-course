import { CharacterInterface } from '../interfaces/character-interface';

export const CHARACTERS: CharacterInterface[] = [
    {   id:1, 
        name: 'Bob', 
        type: 'Hero', 
        image: '',
        abilities: ['sight', 'walking', 'breathing'], 
        description:'Just walking with some boring guy who doesnt leave me alone'
    },
    {   id:2, 
        name: 'Bob\s mistress', 
        image: '',
        type: 'mistress', 
        abilities: ['Mind control over bob'], 
        description:'Can control bob and all guys.'
    },
    {   id:3, 
        name: 'Bob\s sister', 
        image: '',
        type: 'sister', 
        abilities: ['Mind control over bob as well'], 
        description:'Can control bob and mistress.'
    },
    {   id:4, 
        name: 'Bob\s cat', 
        image: '',
        type: 'cats', 
        abilities: ['Mind control over cats'], 
        description:'Can control the cats.'
    },
    {   id:5, 
        name: 'Bob\s dog', 
        image: '',
        type: 'dog', 
        abilities: ['Mind control over dogs'], 
        description:'Can control the dogs.'
    },
];