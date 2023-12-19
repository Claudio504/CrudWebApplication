import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Projeto } from 'src/app/models/Projeto';
import { ProjetoService } from 'src/app/services/projeto-service.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputdata:any
  projeto!: Projeto;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private projetoService: ProjetoService, private router: Router, private ref:MatDialogRef<ExcluirComponent>){}

  ngOnInit(): void {
      this.inputdata = this.data;

      this.projetoService.GetProjeto(this.inputdata.id).subscribe(data => {
          this.projeto = data.dados;
      });
  }

  excluir(){
    this.projetoService.ExcluirProjeto(this.inputdata.id).subscribe(data => {
       this.ref.close();
       window.location.reload();
    });
  }

}
