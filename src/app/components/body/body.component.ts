import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { RickNMortyService } from 'src/app/services/rick-nmorty.service';
import { Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
@Output() selEmmit = new EventEmitter<string>();
public listadoPj:any[];
public data: any[];
public ArrData:Character [];
public selectedChar:string='';

  constructor(public _char:RickNMortyService) { }

  ngOnInit() {
    this.selEmmit.emit();
    this.getCaracteres();
  }

  getCaracteres(){
    this._char.getCharacter().subscribe(res=>
      {   
          this.ArrData = res['results'];
          //console.log(this.ArrData);  
      });

  }
  getCaptureName(param:string)
  {
    this.selectedChar=param;
    this.selEmmit.emit(this.selectedChar);
  }
}
