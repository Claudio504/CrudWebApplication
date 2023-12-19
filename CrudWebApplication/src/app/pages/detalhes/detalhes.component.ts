import { Component, OnInit } from '@angular/core';
import { ProjetoService } from 'src/app/services/projeto-service.service';
import { Projeto } from 'src/app/models/Projeto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

   projeto?: Projeto;
   id!:number;

  constructor(private projetoService: ProjetoService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.id =  Number(this.route.snapshot.paramMap.get("id"));

    this.projetoService.GetProjeto( this.id).subscribe((data) => {
        const dados = data.dados;
        dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString("pt-BR");
        dados.dataDeAlteracao = new Date(dados.dataDeAlteracao!).toLocaleDateString("pt-BR");
        this.projeto = dados;
    });
  }

  InativaProjeto() {
    this.projetoService.InativaProjeto(this.id).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
