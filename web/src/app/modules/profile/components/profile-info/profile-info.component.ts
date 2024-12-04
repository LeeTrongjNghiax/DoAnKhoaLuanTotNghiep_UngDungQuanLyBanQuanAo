import { Component } from '@angular/core';
import { TTextFieldComponent } from "../../../../shared/components/text-field/text-field.component";
import { TButtonComponent } from "../../../../shared/components/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info',
  standalone: true,
  imports: [TTextFieldComponent, TTextFieldComponent, TButtonComponent],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.scss'
})
export class ProfileInfoComponent {
  public constructor(
    private route: Router, 
  ) {}

  public onClickSignOut() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
    window.location.reload();
  }
}
