import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crudAngular';

  constructor(private api: ApiService) {}

  async ngOnInit() {
    await this.api.getDataMahasiswa().subscribe((data) => {
      if (data['success']) {
        console.log(data);
      }
    });
  }
}
