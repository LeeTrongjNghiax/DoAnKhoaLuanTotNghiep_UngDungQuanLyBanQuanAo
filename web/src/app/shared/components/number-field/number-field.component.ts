import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { TButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-number-field',
  standalone: true,
  imports: [NzInputNumberModule, FormsModule, TButtonComponent],
  templateUrl: './number-field.component.html',
  styleUrl: './number-field.component.scss', 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => TNumberFieldComponent), 
      multi: true, 
    }
  ]
})
export class TNumberFieldComponent {
  @Input() value: number = 0;
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() step: number = 1;
  @Output() changeValueEventEmitter: EventEmitter<number> =
    new EventEmitter<number>();

  public onChange: Function = () => {}
  public onTouch: Function = () => {}

  public increse() {
    if (this.value + this.step <= this.max)
      this.value += this.step;
  }

  public decrese() {
    if (this.value - this.step >= this.min)
      this.value -= this.step;
  }

  public onModalChange(e: number) {
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
