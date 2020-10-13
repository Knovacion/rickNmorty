import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class RickNMortyService {


  constructor(protected http: HttpClient) { }
  readonly charUrl:string = 'https://rickandmortyapi.com/api/character';
  
  getCharacter()
{
  return this.http.get<Character>(this.charUrl);
}
}

