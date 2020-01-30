import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dadosPost;
  constructor(public alertController: AlertController, public toastController: ToastController) {
    this.dadosPost= {
     "nome": "João da Silva",
     "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     "horario": "17:52",
     "numeroLikes": 123,
     "numeroDeslikes": 32,
     "episodio": 3,
     "comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     "estadoLike": false,
     "estadoDeslike": false,
     "anexo": 'string',
     "numeroCompartilhamentos": 50,

   };

  }
  async alerta() {
    const alert = await this.alertController.create({
      header: 'Irado!',
      subHeader: 'Gostaria de avaliar essa série?',
      buttons: ['Não', 'Sim']
    });

  await alert.present();
}
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada à "Minha lista"',
      duration: 2000,
    });

  toast.present();
  }


  like(dadosPost: any){
    if(this.dadosPost.estadoLike){
      this.dadosPost.numeroLikes--;
    } else{
      this.dadosPost.numeroLikes++;
      if(this.dadosPost.estadoDeslike){
      this.dadosPost.numeroDeslikes--;
    }
    }
    this.dadosPost.estadoLike=!this.dadosPost.estadoLike;
    this.dadosPost.estadoDeslike=false;
  }

   deslike(dadosPost: any){
    if(this.dadosPost.estadoDeslike){
      this.dadosPost.numeroDeslikes--;
    } else{
      this.dadosPost.numeroDeslikes++;
      if(this.dadosPost.estadoLike){
      this.dadosPost.numeroLikes--;
    }
    }
    this.dadosPost.estadoDeslike=!this.dadosPost.estadoDeslike;
    this.dadosPost.estadoLike=false;
  }

   mudaCor(dadosPost: any){
    if(this.dadosPost.estadoDeslike==false){
      //color = 'red';
      this.dadosPost.numeroDeslikes++;
      this.dadosPost.estadoDeslike=true;
    } else{
      //color = 'blue';
      this.dadosPost.estadoLike=false;
      this.dadosPost.numeroLikes--;
    }
  }
}
