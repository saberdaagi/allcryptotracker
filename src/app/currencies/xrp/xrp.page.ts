import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from 'src/app/model/crypto-coin';
import { CoingeckoConsumerService } from 'src/app/services/CoingeckoConsumerService';

@Component({
  selector: 'app-xrp',
  templateUrl: './xrp.page.html',
  styleUrls: ['./xrp.page.scss'],
})
export class XrpPage implements OnInit {

  selectedFiat = 'USD';
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  xrp$: CryptoCoin;
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    this.changeFiat();
    console.log('bit', this.xrp$);
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat, 'ripple').toPromise();
  }

  async changeFiat(){
    let d = await this.callService();
    this.xrp$ = d[0];
  }

}
