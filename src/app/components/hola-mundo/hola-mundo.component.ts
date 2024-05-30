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
  color : String = "blue";
  //Opcional el encapsulamiento
  public alumnos : String[] = ["David","Inigo","Fatima"]
}
