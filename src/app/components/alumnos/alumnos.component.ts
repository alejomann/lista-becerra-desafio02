import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos = [
    {
      nombre: "Lionel",
      apellido: 'Messi',
      nacionalidad: 'Argentino',
      asistencias: [{clase1:1,clase2:1,clase3:1,clase4:0,clase5:1,clase6:1,clase7:0,clase8:1,clase9:1,clase10:1}],
      promedio : [{nota1:10,nota2:8,nota3:7,nota4:9}]
    },{
      nombre: "Mohamed",
      apellido: 'Salah',
      nacionalidad: 'Egipcio',
      asistencias: [{clase1:1,clase2:0,clase3:1,clase4:1,clase5:1,clase6:0,clase7:0,clase8:1,clase9:1,clase10:1}],
      promedio : [{nota1:10,nota2:7,nota3:7,nota4:8}]
    },{
      nombre: "Robert",
      apellido: 'Lewandowski',
      nacionalidad: 'Polaco',
      asistencias: [{clase1:0,clase2:0,clase3:1,clase4:0,clase5:1,clase6:0,clase7:0,clase8:1,clase9:1,clase10:1}],
      promedio : [{nota1:5,nota2:6,nota3:7,nota4:1}]
    },{
      nombre: "Cristiano",
      apellido: 'Ronaldo',
      nacionalidad: 'Portugues',
      asistencias: [{clase1:1,clase2:0,clase3:1,clase4:0,clase5:1,clase6:1,clase7:0,clase8:1,clase9:1,clase10:1}],
      promedio : [{nota1:9,nota2:8,nota3:6,nota4:4}]
    },{
      nombre: "Erling",
      apellido: 'Haaland',
      nacionalidad: 'Noruego',
      asistencias: [{clase1:1,clase2:1,clase3:1,clase4:1,clase5:1,clase6:1,clase7:1,clase8:1,clase9:1,clase10:0}],
      promedio : [{nota1:9,nota2:10,nota3:9,nota4:8}]
    }
  ]

  totalClases:number = 10;
  totalTareas:number = 4;
  ahora = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
