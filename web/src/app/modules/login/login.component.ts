import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormUserAddService } from '../../core/services/form-user-add.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { IUserLoginParams } from '../../../interfaces/api/parameters/user-login-params.interface';
import { Subject, takeUntil } from 'rxjs';
import { TTextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { TButtonComponent } from '../../shared/components/button/button.component';
import { TCheckboxWithLabelComponent } from '../../shared/components/checkbox-with-label/checkbox-with-label.component';
import { TLinkComponent } from '../../shared/components/link/link.component';
import { TPasswordFieldComponent } from '../../shared/components/password-field/password-field.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    TTextFieldComponent,
    TButtonComponent,
    TCheckboxWithLabelComponent,
    TLinkComponent,
    ReactiveFormsModule,
    TPasswordFieldComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {
  public destroy = new Subject<void>();

  public isDisable() {
    return this.formUserAdd.form.invalid;
  }

  public onClickLogIn() {
    const params: IUserLoginParams = {
      username: this.formUserAdd.form.value.username || '', 
      password: this.formUserAdd.form.value.password || '', 
    }

    console.log(this.formUserAdd.form.valid);

    this.userService.login(params)
      .pipe(takeUntil(this.destroy))
      .subscribe(
        () => console.log(''), 
        () => console.log(''), 
      );
  }

  public constructor (
    public formUserAdd: FormUserAddService, 
    private userService: UserService, 
  ) {}

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();

    this.formUserAdd.clearForm();
  }
}
