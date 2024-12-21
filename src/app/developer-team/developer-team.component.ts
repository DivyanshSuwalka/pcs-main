import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-team',
  templateUrl: './developer-team.component.html',
  styleUrls: ['./developer-team.component.css']
})
export class DeveloperTeamComponent implements OnInit {

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
