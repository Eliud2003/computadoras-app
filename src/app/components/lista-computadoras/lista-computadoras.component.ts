import { Component } from '@angular/core';
import { Computadora } from '../../../models/Computadora';
import { ComputadorasjsonService } from '../../services/computadorasjson.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-computadoras',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './lista-computadoras.component.html',
  styleUrl: './lista-computadoras.component.css'
})
export class ListaComputadorasComponent {
  title = "Catálogo de Computadoras";
  computer: Computadora[] = [];
  selectedComputer: Computadora | null = null;
  favorites: Set<number> = new Set();

  constructor(private miServicio: ComputadorasjsonService) {    
  }

  ngOnInit(): void {
    this.getComputadoras();
  }
    
  getComputadoras(): void {
    this.miServicio.getPc().subscribe((data: Computadora[]) => {
      this.computer = data;
      console.log(this.computer[0]);
    });
  }

  comprar(computer: Computadora): void {
    alert("Computadora " + computer.modelo + " comprada!");
  }

  verDetalles(computer: Computadora): void {
    this.selectedComputer = this.selectedComputer === computer ? null : computer;
  }

  toggleFavorito(id: number): void {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
    } else {
      this.favorites.add(id);
    }
  }

  isFavorite(id: number): boolean {
    return this.favorites.has(id);
  }
}