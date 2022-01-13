import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import  Web3  from 'web3';
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'usb-nft';
  web3: any;
  account: any;
//   window: any;
//   accounts: Array<String>;

  constructor(){
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
//     if (window.ethereum === undefined) {
//         alert('Non-Ethereum browser detected. Install MetaMask');
//       } else {
//         if (typeof window.web3 !== 'undefined') {
//           this.web3 = window.web3.currentProvider;
//         } else {
//           this.web3 = new Web3.providers.HttpProvider('http://localhost:8545');
//         }
//         console.log('transfer.service :: constructor :: window.ethereum');
//         window.web3 = new Web3(window.ethereum);
//         console.log('transfer.service :: constructor :: this.web3');
//         console.log(this.web3);
//         this.enable = this.enableMetaMaskAccount();
//       }
  }

  async connectWallet(){

//     console.log(window.ethereum)
    if (window.ethereum) {
      const accounts = await window.ethereum.send('eth_requestAccounts');
      this.account = accounts.result[0]
      console.log(this.account)
      console.log(accounts);
//       window.web3 = new Web3(window.ethereum);
//       window.web3 = new Web3(window.web3.currentProvider);
      return true;
    }
    return false
  }
}
