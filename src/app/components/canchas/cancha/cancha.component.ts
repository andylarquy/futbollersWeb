import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cancha',
  templateUrl: './cancha.component.html',
  styleUrls: ['./cancha.component.css']
})
export class CanchaComponent implements OnInit {
  public cancha:{
    id: string;
    nombre: string;
    cesped: string;
    imagen: string;
  }={
     id: '1',
     nombre: 'laPeor',
     cesped: 'sintetico',
     imagen: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg'
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.cancha.id = this.route.snapshot.params.id;
    
  }

}
