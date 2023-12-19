import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projeto } from 'src/app/models/Projeto';
import { ProjetoService } from 'src/app/services/projeto-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  btnAcao = "Gravar";
  btnTitulo = "Editar Projeto";
  projeto!: Projeto;

  constructor(private projetoService: ProjetoService, private router: Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projetoService.GetProjeto(id).subscribe((data) => {
        this.projeto = data.dados;
    });
  }

  async editProjeto(projeto : Projeto){
      this.projetoService.EditProjeto(projeto).subscribe(data => {
        this.router.navigate(['/']);
      });
  }
}
