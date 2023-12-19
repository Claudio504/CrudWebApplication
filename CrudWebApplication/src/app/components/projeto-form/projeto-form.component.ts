import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Projeto } from 'src/app/models/Projeto';

@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Projeto>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosProjeto: Projeto | null = null;

  projetoForm!: FormGroup;
  ativo: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.projetoForm = new FormGroup ({
      id: new FormControl(this.dadosProjeto ? this.dadosProjeto.id : 0),
      nome: new FormControl(this.dadosProjeto ? this.dadosProjeto.nome : '', [Validators.required]),
      ativo:  new FormControl(this.dadosProjeto ? this.dadosProjeto?.ativo : true),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAlteracao: new FormControl(new Date())
    });
  }

  get nome() {
    return this.projetoForm.get('nome')!;
  }

  submit() {
    this.onSubmit.emit(this.projetoForm.value);
  }

}
