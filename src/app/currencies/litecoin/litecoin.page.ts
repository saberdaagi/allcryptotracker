import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from 'src/app/model/crypto-coin';
import { CoingeckoConsumerService } from 'src/app/services/CoingeckoConsumerService';

@Component({
  selector: 'app-litecoin',
  templateUrl: './litecoin.page.html',
  styleUrls: ['./litecoin.page.scss'],
})
export class LitecoinPage implements OnInit {

  selectedFiat = 'USD';
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  ltc$: CryptoCoin;
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    this.changeFiat();
    console.log('bit', this.ltc$);
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat, 'litecoin').toPromise();
  }

  async changeFiat(){
    let d = await this.callService();
    this.ltc$ = d[0];
  }

}
