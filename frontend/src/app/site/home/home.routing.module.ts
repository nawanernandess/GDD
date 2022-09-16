import { LoginProfessorComponent } from './login-professor/login-professor.component';
import { LoginAlunoComponent } from './login-aluno/login-aluno.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

const homeRoutes: any = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'aluno', pathMatch: 'full' },
      {
        path: 'aluno',
        component: LoginAlunoComponent,
      },
      { path: 'professor', component: LoginProfessorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
