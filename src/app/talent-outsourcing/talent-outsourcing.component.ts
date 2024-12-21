import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent-outsourcing',
  templateUrl: './talent-outsourcing.component.html',
  styleUrls: ['./talent-outsourcing.component.css']
})
export class TalentOutsourcingComponent implements OnInit {

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
