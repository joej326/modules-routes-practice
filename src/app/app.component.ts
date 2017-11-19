import { Component } from '@angular/core';
import { GetApiService } from './get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  apiName;

  constructor(private getApiService: GetApiService) { }


  getApi(){
    this.getApiService.getData()
      .subscribe(
        (data)=> {
          this.apiName = data['city'].name;
        },
        (error)=> {
          console.log(error);
        },
        ()=> {
          console.log('completed');
        },
      )
  }
}
