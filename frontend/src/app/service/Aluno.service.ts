import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { AlunoModel } from '../model/aluno.model';
import { Observable } from 'rxjs';
import { LoginAlunoModel } from '../model/loginAluno.model';
import { LoginProfessorModel } from '../model/loginProfessor.model';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  Url = 'http://localhost:3001/alunos';
  loginAlunoUrl = 'http://localhost:3001/loginAlunos';
  loginProfessorURL = 'http://localhost:3001/loginProfessor';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  mostrarMenssagem(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  obterProfessorCadastrado(): Observable<LoginProfessorModel> {
    return this.http.get<LoginProfessorModel>(this.loginProfessorURL);
  }

  obterAlunosCadastrados(): Observable<LoginAlunoModel[]> {
    return this.http.get<LoginAlunoModel[]>(this.loginAlunoUrl);
  }

  obtendoAlunos(): Observable<AlunoModel[]> {
    return this.http.get<AlunoModel[]>(this.Url);
  }

  obtendoAlunosPorId(id: number): Observable<AlunoModel> {
    const url = `${this.Url}/${id}`;
    return this.http.get<AlunoModel>(url);
  }

  adicionarNovoAluno(aluno: AlunoModel): Observable<AlunoModel> {
    return this.http.post<AlunoModel>(this.Url, aluno);
  }

  editarAluno(aluno: AlunoModel): Observable<AlunoModel> {
    const url = `${this.Url}/${aluno.id}`;
    return this.http.put<AlunoModel>(url, aluno);
  }

  deletarAluno(aluno: AlunoModel): Observable<AlunoModel> {
    const url = `${this.Url}/${aluno.id}`;
    return this.http.delete<AlunoModel>(url);
  }
}
