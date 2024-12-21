import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-speak',
  templateUrl: './employee-speak.component.html',
  styleUrls: ['./employee-speak.component.css']
})
export class EmployeeSpeakComponent implements OnInit {

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
