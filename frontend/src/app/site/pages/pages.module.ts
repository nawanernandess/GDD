import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfessorPageComponent } from './professor-page/professor-page.component';
import { AlunoPageComponent } from './aluno-page/aluno-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';

import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    SharedModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    ModalModule.forRoot(),
  ],
  declarations: [AlunoPageComponent, ProfessorPageComponent],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
})
export class PagesModule {}
