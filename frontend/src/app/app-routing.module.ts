import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoPageComponent } from './site/pages/aluno-page/aluno-page.component';
import { ProfessorPageComponent } from './site/pages/professor-page/professor-page.component';

const routes: Routes = [
  {
    path: 'aluno2',
    component: AlunoPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'professor2',
    component: ProfessorPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
