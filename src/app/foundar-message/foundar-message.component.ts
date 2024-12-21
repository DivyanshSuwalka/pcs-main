import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foundar-message',
  templateUrl: './foundar-message.component.html',
  styleUrls: ['./foundar-message.component.css']
})
export class FoundarMessageComponent implements OnInit {

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
