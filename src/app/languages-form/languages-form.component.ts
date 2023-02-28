import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-languages-form',
  templateUrl: './languages-form.component.html',
  styleUrls: ['./languages-form.component.css']
})
export class LanguagesFormComponent {

  constructor(private fb:FormBuilder) {}
  
  form = this.fb.group({
    languages: this.fb.array([])
  });

  addLanguage(language: HTMLInputElement) {
    let lang = language.value;
    language.value = '';
    this.languages.push(lang);
  }

  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }


  get languages() {
    return this.form.controls['languages'] as FormArray;
  }

}
