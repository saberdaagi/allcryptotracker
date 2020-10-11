import { Component, OnInit } from '@angular/core';
import { CryptoCoin } from 'src/app/model/crypto-coin';
import { CoingeckoConsumerService } from 'src/app/services/CoingeckoConsumerService';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.page.html',
  styleUrls: ['./ethereum.page.scss'],
})
export class EthereumPage implements OnInit {

  selectedFiat = 'USD';
  fiats = ['USD', 'EUR', 'GBP', 'JPY'];
  eth$: CryptoCoin;
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    this.changeFiat();
  }

  callService(){
    return this.coinProvider.getCoinInfo(this.selectedFiat, 'ethereum').toPromise();
  }

  async changeFiat(){
    let d = await this.callService();
    this.eth$ = d[0];
  }

}
