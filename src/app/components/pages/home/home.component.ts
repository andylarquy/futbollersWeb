import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public canchas:{
    id: String;
    nombre:String;
    cesped: String;
    imagen: String;
  }[]=[
    {id:'1',
    nombre: 'Lamejor',
    cesped: 'pasto',
    imagen: 'https://ichef.bbci.co.uk/news/320/cpsprodpb/238D/production/_95410190_gettyimages-488144002.jpg',
    },

    {id:'2',
    nombre: 'LaPeor',
    cesped: 'Piso',
    imagen: 'https://www.hoysejuega.com/uploads/Modules/ImagenesComplejos/800_600_power-6-canchas-de-futbol.jpg',
    },

    {id:'3',
    nombre: 'Regular',
    cesped: 'alfombra',
    imagen: 'https://cunadelfutsal.com/wp-content/uploads/2019/01/13775493_1181360461885398_4753585116881659558_n-e1494184130427.jpg',
    },

    {id:'4',
    nombre: 'CasiBuena',
    cesped: 'jabon',
    imagen: 'https://3.bp.blogspot.com/-1LvBa-i2AEM/VDuJdEavsjI/AAAAAAAAAEg/RjjQbYSPewc/s1600/barcancha.jpg',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
