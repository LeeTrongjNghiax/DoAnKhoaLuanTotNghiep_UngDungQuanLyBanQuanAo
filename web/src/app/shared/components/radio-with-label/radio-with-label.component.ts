import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-radio-with-label',
  standalone: true,
  imports: [FormsModule, NzRadioComponent],
  templateUrl: './radio-with-label.component.html',
  styleUrl: './radio-with-label.component.scss', 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => TRadioWithLabelComponent), 
      multi: true, 
    }
  ]
})
export class TRadioWithLabelComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() isChecked: boolean = false;
  @Input() fontSize: number = 25;
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
