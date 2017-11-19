import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.sass']
})
export class ParamsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params)=> console.log(params['id'])
        )
  }
  

  

}
