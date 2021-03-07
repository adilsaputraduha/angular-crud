import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDataMahasiswa() {
    return this.http.get(`http://localhost:8080/mahasiswa`);
  }

  getDataMahasiswaById(id) {
    return this.http.get(`http://localhost:8080/mahasiswa/` + id);
  }

  addDataMahasiswa(data) {
    return this.http.post(`http://localhost:8080/mahasiswa/`, data);
  }

  editDataMahasiswa(id, data) {
    return this.http.put(`http://localhost:8080/mahasiswa/edit/` + id, data);
  }

  deleteDataMahasiswa(data) {
    return this.http.post(`http://localhost:8080/mahasiswa/delete/`, data);
  }
}
