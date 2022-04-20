import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup | any

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('')
      }),
      skills: new FormArray([])
    })
  }

  submit() {
    console.log('Form submitted: ', this.form)
    const formData = { ...this.form.value }
    console.log('Form Data:', formData)
  }

  setCapital() {
    const cityMap = {
      ua: 'Kyiv',
      ca: 'Ottawa',
      us: 'Washington'
    }
    const cityKey = this.form.get('address').get('country').value
    const city = cityMap['ua']
    console.log(city)
    this.form.patchValue({
      address: { city: city }
    })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    <FormArray>this.form.get('skills').push(control)
  }
}