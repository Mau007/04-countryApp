import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,OnDestroy  {

  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSuscription? : Subscription;


  @Input()
  public placeHoldder:string='';
  @Input()
  public initialValue:string ='';

  @Output()
  public onValue:EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {

    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value:string):void{

    console.log('El vento primero entra aqui: emitValue');
    this.onValue.emit(value);
  }

  onKeyPress(Key :string):void{
    this.debouncer.next(Key);
  }
}
