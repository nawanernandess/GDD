import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule, MatListModule, MatToolbarModule],
  declarations: [SideNavComponent, HeaderComponent, FooterComponent],
  exports: [SideNavComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
