import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uye',
  templateUrl: './uye.component.html',
  styleUrls: ['./uye.component.css']
})
export class UyeComponent implements OnInit{
  public cartitems:number = 0;

  ngOnInit(): void {  }

  user_records: any[]= [];
  data = {
    name: '',
    email: '',
    password: '',
    phone: '',
    emailNotification: '',
    smsNotification:'',
    termsAndConditions:'',

  }

  doRegistration(Values:any){
    alert("Kayıt yapıldı!")
    //this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v) => {
      return v.email === this.data.email;

    }))
    {}
    else {
      this.user_records.push(this.data);
      localStorage.setItem("users", JSON.stringify(this.user_records));
      alert('Merhaba '+ this.data.name +' kayıt oldunuz');
    }

}




}
