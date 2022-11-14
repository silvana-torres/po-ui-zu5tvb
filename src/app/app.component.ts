import { Component, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PoDecimalComponent } from '@po-ui/ng-components';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('campoPeso2', { static: true }) campoPeso2:
    | PoDecimalComponent
    | undefined;

  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      peso1: new FormControl(0),
      peso2: new FormControl(0),
    });
  }

  public validaPesoLiq(): void {
    if (this.form.value.peso2 > this.form.value.peso1) {
      console.log('peso 2 inválido');
      this.campoPeso2?.focus();
    }
  }
}
