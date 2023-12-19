import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projeto } from 'src/app/models/Projeto';
import { ProjetoService } from 'src/app/services/projeto-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar Projeto";

  constructor(private projetoService: ProjetoService, private router: Router) { }

  ngOnInit(): void { }

  createProjeto(projeto: Projeto){
    this.projetoService.CreateProjeto(projeto).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}
