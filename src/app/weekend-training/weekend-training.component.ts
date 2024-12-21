import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekend-training',
  templateUrl: './weekend-training.component.html',
  styleUrls: ['./weekend-training.component.css']
})
export class WeekendTrainingComponent implements OnInit {

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
