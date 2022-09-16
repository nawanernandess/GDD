import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginProfessorModel } from 'src/app/model/loginProfessor.model';
import { AlunoService } from 'src/app/service/Aluno.service';

@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.scss'],
})
export class LoginProfessorComponent implements OnInit {
  loginProfessor: LoginProfessorModel = new LoginProfessorModel();
  professores: any;

  constructor(
    private authService: AuthService,
    private alunoService: AlunoService
  ) {}

  ngOnInit() {
    this.carregarCadastroLogin();
  }

  carregarCadastroLogin() {
    this.alunoService.obterProfessorCadastrado().subscribe((professor) => {
      this.professores = professor;
    });
  }

  fazerLoginProfessor() {
    if (
      !this.professores.find(
        (x) =>
          x.email == this.loginProfessor.email &&
          x.senha == this.loginProfessor.senha &&
          x.token == this.loginProfessor.token
      )
    ) {
      this.alunoService.mostrarMenssagem('Conta não encontrada!');
      return;
    }

    this.professores.find((dataProfessor) => {
      if (
        dataProfessor.email == this.loginProfessor.email &&
        dataProfessor.senha == this.loginProfessor.senha &&
        dataProfessor.token == this.loginProfessor.token
      ) {
        this.authService.fazerLoginProfessor(
          this.loginProfessor,
          dataProfessor
        );
        console.log('professor:', this.loginProfessor);
      }
    });
  }
}
