import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ceo-message',
  templateUrl: './ceo-message.component.html',
  styleUrls: ['./ceo-message.component.css']
})
export class CeoMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript();
  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/js/main.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
}

}
