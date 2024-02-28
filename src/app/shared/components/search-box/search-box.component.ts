import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent  {

  @Input()
  public placeHoldder:string='';

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  emitValue(value:string):void{

    console.log('El vento primero entra aqui: emitValue');
    this.onValue.emit(value);
  }
}
