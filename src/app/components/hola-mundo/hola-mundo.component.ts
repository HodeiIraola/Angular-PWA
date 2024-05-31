import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  titulo : string = "Hola Mundo desde el componente HolaMundoComponent";
  color : string = "blue";
  //Opcional el encapsulamiento
  public alumnos : string[] = ["David","Inigo","Fatima"];

  mostrarDiv : boolean = false;

  alternarDivs(){
    this.mostrarDiv = !this.mostrarDiv;
  }

  agregarAlumno(txtAlmuno : HTMLInputElement){
    this.alumnos.push(txtAlmuno.value);
    txtAlmuno.value = "";
  }

  /*agregarAlumno(almuno : string){
    this.alumnos.push(almuno);
  }*/
}
