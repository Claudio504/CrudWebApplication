import { Component, OnInit } from '@angular/core';
import { ProjetoService } from 'src/app/services/projeto-service.service';
import { Projeto } from '../../models/Projeto';
import { ExcluirComponent } from '../../components/excluir/excluir.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  projetos: Projeto[] = [];
  projetosGeral: Projeto[] = [];
  columnsToDisplay = ['Situacao', 'Nome', 'DataDeCriacao', 'DataDeAlteracao', 'Ações', 'Action'];  

  constructor(private projetoService : ProjetoService, public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.projetoService.GetProjetos().subscribe((data) => {
      const dados = data.dados;
       dados.map((item) => {
         item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR');
         item.dataDeAlteracao = new Date(item.dataDeAlteracao!).toLocaleDateString('pt-BR');
       });

      this.projetosGeral = dados;
      this.projetos = dados;
    })
  }

  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.projetos = this.projetosGeral.filter(projeto => {
      return projeto.nome.toLowerCase().includes(value);
    })
  }

  openDialog(id : number){
    this.matDialog.open(ExcluirComponent,{
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    })
  }
}



