import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [ CommonModule, FormsModule, NzInputModule, AngularSvgIconModule ],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.scss', 
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => TPasswordFieldComponent), 
      multi: true, 
    }
  ]
})
export class TPasswordFieldComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Output() changeValueEventEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  public isVisible: boolean = false;

  public onChange: Function = () => {}
  public onTouch: Function = () => {}

  public get inputType() {
    return this.isVisible ? 'text' : 'password';
  }

  public onChangeVisible() {
    this.isVisible = !this.isVisible;
  }

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
