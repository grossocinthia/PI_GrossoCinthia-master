import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/service/personaService';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Persona:any;

  constructor(
    private datospersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) {
    
    this.datospersona.verPersona().subscribe(
    data => {
      console.log(data);
      this.Persona = data[0];
    },
   
  ); }

  ngOnInit(): void {
  }

  
}

