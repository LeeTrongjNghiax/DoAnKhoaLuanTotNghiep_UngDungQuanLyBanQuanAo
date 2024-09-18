import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-t-checkbox-with-label',
  standalone: true,
  imports: [FormsModule, NzCheckboxModule],
  templateUrl: './t-checkbox-with-label.component.html',
  styleUrl: './t-checkbox-with-label.component.scss', 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => TCheckboxWithLabelComponent), 
      multi: true, 
    }
  ]
})
export class TCheckboxWithLabelComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() isChecked: boolean = false;
  @Output() changeValueEventEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  public onChange: Function = () => {}
  public onTouch: Function = () => {}

  public onModalChange(e: boolean) {
    this.isChecked = e;
    this.onChange(this.value);
    this.onTouch(this.value);
    this.changeValueEventEmitter.emit(this.isChecked);
  }
  
  public constructor() {}
  public writeValue(): void { }
  public registerOnChange(fn: any): void { 
    this.onChange = fn;
  }
  public registerOnTouched(fn: any): void { 
    this.onTouch = fn;
  }
  public setDisabledState?(): void { }
}
