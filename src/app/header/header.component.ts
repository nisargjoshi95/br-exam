import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.pug',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() panelOpen: string = 'left';
  @Output() closePanel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.closePanel.emit();
  }

}
