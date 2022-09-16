import { LoginAlunoModel } from 'src/app/model/loginAluno.model';
import { TemaService } from 'src/app/service/tema.service';
import { Component, OnInit } from '@angular/core';
import { AlunoModel } from 'src/app/model/aluno.model';
import { TemaModel } from 'src/app/model/tema.model';
import { AlunoService } from 'src/app/service/Aluno.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-aluno-page',
  templateUrl: './aluno-page.component.html',
  styleUrls: ['./aluno-page.component.scss'],
})
export class AlunoPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acao'];
  alunos: AlunoModel[];
  temas: TemaModel[];
  temaAdicionado: boolean = false;

  alunoLogin: LoginAlunoModel;

  constructor(
    private alunoService: AlunoService,
    private temaService: TemaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.obterAlunos();
    this.obterTemas();
  }

  obterAlunos() {
    this.alunoService.obtendoAlunos().subscribe((alunos) => {
      this.alunos = alunos;
    });
  }

  obterTemas() {
    this.temaService.obtendoTemas().subscribe((temas) => {
      this.temas = temas;
    });
  }
}
