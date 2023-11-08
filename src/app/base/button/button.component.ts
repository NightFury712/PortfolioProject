import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input()
  icon: string = 'icon-email-24'

  @Input()
  text: string = 'EMAIL'
  @Input()
  borderRadius: number = 4

  ngOnInit(): void {
  }

}
