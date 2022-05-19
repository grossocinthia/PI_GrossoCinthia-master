import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyectoService';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
 

  proyectoList: any ;

  

  constructor(private datosproyecto: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
   
      this.datosproyecto.verProyecto().subscribe(data =>{
      console.log(data);
      this.proyectoList=data[0];
      
    });
      }
    
      onUpdate(id: number) {
        this.datosproyecto.editarProyecto(id, this.proyectoList).subscribe(
          data => {
            console.log(data);
            this.datosproyecto.editarProyecto;
            this.ngOnInit();
        this.router.navigate(['/portfolio']);
      },
     
    );
  }

}