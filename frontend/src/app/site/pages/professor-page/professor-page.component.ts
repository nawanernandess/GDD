import { TemaModel } from './../../../model/tema.model';
import { AlunoService } from './../../../service/Aluno.service';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { AlunoModel } from 'src/app/model/aluno.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemaService } from 'src/app/service/tema.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.scss'],
})
export class ProfessorPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acao'];
  alunos: AlunoModel[];
  aluno: AlunoModel;

  temas: TemaModel[];
  tema: TemaModel;

  objetoAluno: AlunoModel = { id: 0, nomeAluno: '' };
  objetoTema: TemaModel = { id: 0, title: '' };

  constructor(
    private modalService: BsModalService,
    private temaService: TemaService,
    private alunoService: AlunoService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.carregarTela();
  }

  close() {
    this.modalService.hide();
  }

  carregarTela() {
    this.obterAlunos();
    this.obterTemas();
  }

  obterAlunos() {
    this.alunoService.obtendoAlunos().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }

  adicionarAluno() {
    this.alunoService.adicionarNovoAluno(this.objetoAluno).subscribe(() => {
      this.alunoService.mostrarMenssagem('Aluno adicionado');
      this.carregarTela();
    });
  }

  editarNomeAluno(editar: TemplateRef<any>, id: number): Promise<void> {
    let promise = new Promise<void>((resolve, reject) => {
      this.alunoService.obtendoAlunosPorId(id).subscribe(
        (alunoPorId) => {
          this.aluno = alunoPorId;
          resolve();
        },
        (reason) => {
          reject(reason);
        }
      );
    }).finally(() => this.modalService.show(editar));

    return promise;
  }

  atualizarNomeDoAluno() {
    this.alunoService.editarAluno(this.aluno).subscribe(() => {
      this.alunoService.mostrarMenssagem('Nome do aluno atualidado');
      this.carregarTela();
      this.modalService.hide();
    });
  }

  excluirAluno(excluir: TemplateRef<any>, id: number): Promise<void> {
    let promise = new Promise<void>((resolve, reject) => {
      this.alunoService.obtendoAlunosPorId(id).subscribe(
        (alunoPorId) => {
          this.aluno = alunoPorId;
          resolve();
        },
        (reason) => {
          reject(reason);
        }
      );
    }).finally(() => {
      this.modalService.show(excluir);
    });

    return promise;
  }

  deletarAluno() {
    this.alunoService.deletarAluno(this.aluno).subscribe(() => {
      this.alunoService.mostrarMenssagem('Aluno Excluido');
      this.carregarTela();
      this.modalService.hide();
    });
  }

  // TEMA
  obterTemas() {
    this.temaService.obtendoTemas().subscribe((temas) => {
      this.temas = temas;
    });
  }

  adicionarTema() {
    this.temaService.adicionarNovoTema(this.objetoTema).subscribe(() => {
      this.temaService.mostrarMenssagem('Tema adicionado');
      this.carregarTela();
    });
  }

  excluirTema(excluirTema: TemplateRef<any>, id: number): Promise<void> {
    let promise = new Promise<void>((resolve, reject) => {
      this.temaService.obtendoTemaPorId(id).subscribe(
        (temaPorId) => {
          this.tema = temaPorId;
          resolve();
        },
        (reason) => {
          reject(reason);
        }
      );
    }).finally(() => {
      this.modalService.show(excluirTema);
    });

    return promise;
  }

  deletarTema() {
    this.temaService.deletarTema(this.tema).subscribe(() => {
      this.temaService.mostrarMenssagem('Tema Excluído');
      this.carregarTela();
      this.modalService.hide();
    });
  }
}
