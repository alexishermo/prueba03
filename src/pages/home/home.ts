import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OtherPage } from '../otherPage/otherPage'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formulario:FormGroup;
  public datos:any={usuario:"",contrasena:""};
  public otherPage:any=OtherPage;

  constructor(public navCtrl: NavController, public fb: FormBuilder) {
    this.formulario=this.fb.group({
      'usuario':['',[Validators.required, Validators.pattern("alexis")]],
      'contrasena':['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });
  }

}
