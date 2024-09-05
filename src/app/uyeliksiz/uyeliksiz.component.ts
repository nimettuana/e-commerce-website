import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { zip } from 'rxjs';

@Component({
  selector: 'app-uyeliksiz',
  templateUrl: './uyeliksiz.component.html',
  styleUrls: ['./uyeliksiz.component.css']
})
export class UyeliksizComponent implements OnInit {
  constructor(private router:Router, ){}

myForm:FormGroup|any;

  user_records: any[]= [];
  data = {
    email: '',
    password: '',
  }

  public cartitems:number = 0;

  url = ''; // replace with the URL you want to share
  title = ''; // replace with the title you want to share
  shareOnFacebook(): string {
    return `https://www.facebook.com/sharer/sharer.php?u=${this.url}&title=${this.title}`;
  }

  shareOnTwitter(): string {
    return `https://twitter.com/intent/tweet?url=${this.url}&text=${this.title}`;
  }

  shareOnLinkedIn(): string {
    return `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${this.title}`;
  }

  shareOnWhatsApp(): string {
    return `https://api.whatsapp.com/send?text=${this.title} ${this.url}`;
  }



ngOnInit(): void {
  this.myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    telefon: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    address2: new FormControl('', Validators.required),
    ulke: new FormControl('', Validators.required),
    sehir: new FormControl('', Validators.required),
    ilce: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required),

  })
}
onSubmit(){
  this.myForm.value;
  console.log(this.myForm.value);

}

private _formBuilder = inject(FormBuilder);

firstFormGroup = this._formBuilder.group({
  firstCtrl: ['', Validators.required],
});
secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.required],
});
isEditable = false;

}
