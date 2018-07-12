import { Component } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private quotesSerivce: QuotesService){}

  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
  }

  // implements OnInit
  // ngOnInit(){
  //  this.quoteGroup = this.navParams.data;
  //}

  onAddToFavorites(selectedQuote: Quote){
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Confirm?',
      buttons: [{
        text: 'Yes, go ahead',
        handler:() => {this.quotesSerivce.addQuoteToFavorites(selectedQuote);}
      },
      {
        text: 'No, I changed my mind!',
        role: 'cancle',
        handler: () => {console.log('Cancelled');}
      }]
    });
    alert.present();
  }

  isFavorite(quote: Quote){
    return this.quotesSerivce.isQuoteFavorite(quote);
  }

  onRemoveFromFavorites(quote: Quote){
    this.quotesSerivce.removeQuoteFromFavorites(quote);
  }

}
