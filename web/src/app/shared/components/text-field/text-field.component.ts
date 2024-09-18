import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [ CommonModule, FormsModule, NzInputModule ],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss', 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => TTextFieldComponent), 
      multi: true, 
    }
  ]
})
export class TTextFieldComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() changeValueEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  public onChange: Function = () => {}
  public onTouch: Function = () => {}

  public onModalChange(e: string) {
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
