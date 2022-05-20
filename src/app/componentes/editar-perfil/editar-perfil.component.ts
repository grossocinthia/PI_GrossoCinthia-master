import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/personaService';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {


  persona: any ;

  

  constructor(private datosPersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
   
      this.datosPersona.verPersona().subscribe(data =>{
      console.log(data);
      this.persona=data[0];
      
    });
      }
    
      onUpdate(id: number) {
        this.datosPersona.editarPersona(id, this.persona).subscribe(
          data => {
            console.log(data);
            this.datosPersona.editarPersona;
            this.ngOnInit();
        this.router.navigate(['/portfolio']);
      },
     
    );
  }

}