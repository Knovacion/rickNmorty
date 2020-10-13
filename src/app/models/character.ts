import { Episodios } from './episodios';
import { Locacion } from './locacion';
import { Origen } from './origen';

export class Character {
    created:string;
    episode:Episodios[];
    gender:string;
    id:number;
    image:string;
    location:Locacion[];
    name:string;
    origin:Origen[];
    species:string;
    status:string;
    type:any;
    url:string;


    

}