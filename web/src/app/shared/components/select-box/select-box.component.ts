import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ISelectItem } from './interfaces/select-item.interface';

@Component({
  selector: 'app-select-box',
  standalone: true,
  imports: [FormsModule, NzSelectModule],
  templateUrl: './select-box.component.html',
  styleUrl: './select-box.component.scss', 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => TSelectBoxComponent), 
      multi: true, 
    }
  ]
})
export class TSelectBoxComponent<T> {
  @Input() selectItems: ISelectItem<T>[] = [];
  @Input() value!: T;
  @Output() changeValueEventEmitter: EventEmitter<T> =
    new EventEmitter<T>();

  public onChange: Function = () => {}
  public onTouch: Function = () => {}

  public onModalChange(e: T) {
    this.value = e;
    this.onChange(this.value);
    this.onTouch(this.value);
    this.changeValueEventEmitter.emit(this.value);
  }
  
  public constructor() {}
  public writeValue(obj: any): void { 
    this.value = obj;
  }
  public registerOnChange(fn: any): void { 
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void { 
    this.onTouch = fn;
  }
  public setDisabledState?(): void { }
}
