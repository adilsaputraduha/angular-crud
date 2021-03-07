import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddMahasiswaComponent } from './component/add-mahasiswa/add-mahasiswa.component';
import { ListMahasiswaComponent } from './component/list-mahasiswa/list-mahasiswa.component';
import { DetailMahasiswaComponent } from './component/detail-mahasiswa/detail-mahasiswa.component';

const routes: Routes = [
  { path: 'mahasiswa', component: ListMahasiswaComponent },
  { path: 'mahasiswa/:nobp', component: DetailMahasiswaComponent },
  { path: 'add', component: AddMahasiswaComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
