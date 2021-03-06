import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMahasiswaComponent } from './component/add-mahasiswa/add-mahasiswa.component';
import { ListMahasiswaComponent } from './component/list-mahasiswa/list-mahasiswa.component';
import { DetailMahasiswaComponent } from './component/detail-mahasiswa/detail-mahasiswa.component';

@NgModule({
  declarations: [AppComponent, AddMahasiswaComponent, ListMahasiswaComponent, DetailMahasiswaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
