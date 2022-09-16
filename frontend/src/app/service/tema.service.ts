import { TemaModel } from './../model/tema.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  temaUrl = 'http://localhost:3001/tema';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  mostrarMenssagem(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  obtendoTemas(): Observable<TemaModel[]> {
    return this.http.get<TemaModel[]>(this.temaUrl);
  }

  obtendoTemaPorId(id: number): Observable<TemaModel> {
    const url = `${this.temaUrl}/${id}`;
    return this.http.get<TemaModel>(url);
  }

  adicionarNovoTema(tema: TemaModel): Observable<TemaModel> {
    return this.http.post<TemaModel>(this.temaUrl, tema);
  }

  editarTema(tema: TemaModel): Observable<TemaModel> {
    const url = `${this.temaUrl}/${tema.id}`;
    return this.http.put<TemaModel>(url, tema);
  }

  deletarTema(tema: TemaModel): Observable<TemaModel> {
    const url = `${this.temaUrl}/${tema.id}`;
    return this.http.delete<TemaModel>(url);
  }
}
