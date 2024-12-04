import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { IRadioOption } from './interfaces/radio-option.interface';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [FormsModule, NzRadioModule],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss'
})
export class RadioGroupComponent<T> {
  @Input() values: IRadioOption<T>[] = [];
  @Input() selectedValue?: T;
  @Input() fontSize: number = 25;
  @Output() changeValueEventEmitter: EventEmitter<T> =
    new EventEmitter<T>();

  public onChange: Function = () => {}
  public onTouch: Function = () => {}

  public onModalChange(e: T) {
    this.selectedValue = e;
    this.onChange(this.selectedValue);
    this.onTouch(this.selectedValue);
    this.changeValueEventEmitter.emit(this.selectedValue);
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
