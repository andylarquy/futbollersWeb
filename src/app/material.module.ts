import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule
  } from '@angular/material';


//guardo los modulos de angular en esta constante para que sea mas facil. 
const modulos = [
  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [    CommonModule,modulos  ],
    exports:[modulos]
})
export class MaterialModule { }
