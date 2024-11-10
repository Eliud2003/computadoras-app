import { Component } from '@angular/core';
import { Computadora } from '../../../models/Computadora';
import { ComputadorasjsonService } from '../../services/computadorasjson.service';

@Component({
  selector: 'app-lista-computadoras',
  standalone: true,
  imports: [],
  templateUrl: './lista-computadoras.component.html',
  styleUrl: './lista-computadoras.component.css'
})
export class ListaComputadorasComponent {
  title="hola";
  computer:Computadora[]=[];
  constructor(private miServicio:ComputadorasjsonService){    
  }
  ngOnInit():void{
    this.getComputoras();
  }
    
  
  getComputoras():void{
    this.miServicio.getPc().subscribe((data:Computadora[])=>{
      this.computer=data;
      console.log(this.computer[0]);
    }
      
  )};

}
