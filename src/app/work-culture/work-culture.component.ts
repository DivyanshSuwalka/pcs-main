import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-culture',
  templateUrl: './work-culture.component.html',
  styleUrls: ['./work-culture.component.css']
})
export class WorkCultureComponent implements OnInit {

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
