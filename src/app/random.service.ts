import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  generarNumerosAleatorios(cantidad)
  {
    const numeros = [];
    for(let index = 0; index < cantidad; index ++)
    {
      const numero = this.generarNumeroAleatorio();
      numeros.push(numero);
    }

    return numeros;
  }
  
  generarNumeroAleatorio(min = 1, max = 494)
  {
    return Math.floor(
      Math.random() * (max - min) + min
    );
  }
}
