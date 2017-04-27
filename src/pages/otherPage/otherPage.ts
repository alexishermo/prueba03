import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Final } from '../final/final';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
    templateUrl: "otherPage.html"
})

export class OtherPage {

    otherFormulario:FormGroup;
    public otherDatos:any={nombre:"",edad:"",autos:"",aviones:"", barcos:""};
    public final:any=Final;

    constructor(public navCtrl: NavController, public params: NavParams, public fb:FormBuilder){
        this.otherFormulario=this.fb.group({
            'nombre':['',[Validators.required]],
            'edad':['',[Validators.required]],
            'autos':[''],
            'aviones':[''],
            'barcos':['']
        });
    }
}//class