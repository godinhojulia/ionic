import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dadosPost= [{
   "imagem": "../assets/strangerthings3.jpeg",
   "nome": "Stranger Things",
   "subtitle": "Suspense, Ficção",
   "numeroLikes": 123,
   "numeroDeslikes": 32,
   "estadoDeslike": false,
   "anexo": 'string',
   "numeroCompartilhamentos": 50,
   "tem_spoiler": true,
   "nota": 4.5,

 },
 {
 "imagem": "../assets/gossipgirl.jpg",
 "nome": "Gossip Girl",
 "subtitle": "Drama, Romance",
 "numeroLikes": 140,
 "numeroDeslikes": 53,
 "estadoDeslike": false,
 "anexo": 'string',
 "numeroCompartilhamentos": 50,
 "tem_spoiler": false,
 "nota": '4.0',

}];
  constructor(public alertController: AlertController, public toastController: ToastController) {


  }
  async alerta() {
    const alert = await this.alertController.create({
      header: 'Irado!',
      subHeader: 'Gostaria de compartilhar essa série?',
      buttons: ['Sim', 'Não']
    });

  await alert.present();
}
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada à "Minha lista"',
      duration: 3000
    });

  toast.present();
}



  like(serie: any){
    if(serie.estadoLike){
      serie.numeroLikes--;
    } else{
      serie.numeroLikes++;
      if(serie.estadoDeslike){
      serie.numeroDeslikes--;
    }
    }
    serie.estadoLike=!serie.estadoLike;
    serie.estadoDeslike=false;
  }

   deslike(serie: any){
    if(serie.estadoDeslike){
      serie.numeroDeslikes--;
    } else{
      serie.numeroDeslikes++;
      if(serie.estadoLike){
      serie.numeroLikes--;
    }
    }
    serie.estadoDeslike=!serie.estadoDeslike;
    serie.estadoLike=false;
  }

   mudaCor(serie: any){
    if(serie.estadoDeslike==false){
      //color = 'red';
      serie.numeroDeslikes++;
      serie.estadoDeslike=true;
    } else{
      //color = 'blue';
      serie.estadoLike=false;
      serie.numeroLikes--;
    }
  }
}
