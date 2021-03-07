import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list-mahasiswa',
  templateUrl: './list-mahasiswa.component.html',
  styleUrls: ['./list-mahasiswa.component.css'],
})
export class ListMahasiswaComponent implements OnInit {
  currentMahasiswa;

  constructor(private api: ApiService) {}

  async ngOnInit() {
    await this.api.getDataMahasiswa().subscribe((data) => {
      if (data['success']) {
        this.currentMahasiswa = data['data'];
        console.log(data);
      }
    });
  }
}
