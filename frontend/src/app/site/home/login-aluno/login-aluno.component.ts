import { AuthService } from '../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginAlunoModel } from 'src/app/model/loginAluno.model';
import { AlunoService } from 'src/app/service/Aluno.service';

@Component({
  selector: 'app-login-aluno',
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.scss'],
})
export class LoginAlunoComponent implements OnInit {
  loginAluno: LoginAlunoModel = new LoginAlunoModel();
  alunosCadastrados: LoginAlunoModel[];

  alunos: any;

  constructor(
    private authService: AuthService,
    private alunoService: AlunoService
  ) {}

  ngOnInit() {
    this.carregarCadastroLogin();
  }

  carregarCadastroLogin() {
    this.alunoService.obterAlunosCadastrados().subscribe((aluno) => {
      this.alunos = aluno;
    });
  }

  fazerLoginAluno() {
    if (
      !this.alunos.find(
        (x) =>
          x.email == this.loginAluno.email && x.senha == this.loginAluno.senha
      )
    ) {
      this.alunoService.mostrarMenssagem('Conta não encontrada!');
      return;
    }

    this.alunos.find((dataAluno) => {
      if (
        dataAluno.email == this.loginAluno.email &&
        dataAluno.senha == this.loginAluno.senha
      ) {
        console.log('aqui', dataAluno);
        this.authService.fazerLoginAluno(this.loginAluno, dataAluno);
      }
    });
  }
}
