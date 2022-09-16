import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAlunoModel } from '../model/loginAluno.model';
import { LoginProfessorModel } from '../model/loginProfessor.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioAutenticado: boolean = false;
  alunosCadastrados: LoginAlunoModel[];
  alunos: any;

  constructor(private router: Router) {}

  fazerLoginAluno(aluno: LoginAlunoModel, data: any) {
    if (aluno.email === data.email && aluno.senha === data.senha) {
      this.usuarioAutenticado = true;
      this.router.navigate(['aluno2']);
    }
  }

  fazerLoginProfessor(professor: LoginProfessorModel, data: any) {
    if (
      professor.email === data.email &&
      professor.senha === data.senha &&
      professor.token === data.token
    ) {
      this.usuarioAutenticado = true;
      this.router.navigate(['professor2']);
    }
  }

  atenticacaoDeUsuario() {
    return this.usuarioAutenticado;
  }
}
