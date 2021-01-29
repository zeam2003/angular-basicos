import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  borrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe() {
    console.log('borrando');
    this.borrado = this.heroes.shift() || '';
    
  }

}
