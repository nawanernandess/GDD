import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { HomeComponent } from './home.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { LoginProfessorComponent } from './login-professor/login-professor.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  declarations: [HomeComponent, LoginAlunoComponent, LoginProfessorComponent],
})
export class HomeModule {}
