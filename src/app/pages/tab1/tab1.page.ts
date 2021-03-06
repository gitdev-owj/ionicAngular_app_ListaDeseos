import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseoService: DeseosService,
               private router: Router,
               private alertCtrl: AlertController) {
    
  }

  async agregarLista(){

    //this.router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
       ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if(data.titulo.length === 0 ){
              return;
            }
             
            this.deseoService.crearLista(data.titulo);
            //crear la lista 

          }
        }
      ]
    });
    alert.present();
  }
}
