import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize1]',
  standalone: true
})
export class FontSize1Directive implements OnChanges {

  constructor(private el:ElementRef) { }
  @Input('appFontSize') fontSize:number=10;
  ngOnChanges(changes: SimpleChanges): void {
    const newFontSize=changes['fontSize'].currentValue;
    if(newFontSize){
      this.el.nativeElement.style.fontSize=`${newFontSize}px`;

    }
  }

}
