import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[border]'
})
export class BorderDirective implements OnInit {
  @Input() border: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setBorder(this.border);
  }

  private setBorder(createdDate: number): void {
    let currentDate  = new Date().getTime();
    var borderColor = null;
    if(createdDate < currentDate && createdDate >= (currentDate - 14 * 24 * 60 * 60 * 1000)) {
      borderColor = '#2B7D2B';
    } else if (createdDate > currentDate) {
      borderColor = '#0092D1';
    }


    if(borderColor) {
      this.el.nativeElement.style.border = '1px solid ' + borderColor;
    }

  }
}
