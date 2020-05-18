import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../rickandmorty.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InfoLocationComponent } from '../info-location/info-location.component';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {
  
  info: any = [];

  constructor(private rickAndMortyAPI: RickandmortyService, private modalService: NgbModal) { }

  ngOnInit() {
    this.obtenerDatos(10);
  }

  cargarDatos(cantidad)
  {
    console.log("Cantidad "+cantidad);
  }

  obtenerDatos(numerukis)
  {
    this.rickAndMortyAPI.obtenerMultiplesPersonajes(numerukis).subscribe(
       data => {
          this.info = data;
       },
       error => {
         alert(error);
       }
    );
  }

  open(url)
  {
    const componentRef = this.modalService.open(InfoLocationComponent);
    componentRef.componentInstance.url = url;
  }
}
