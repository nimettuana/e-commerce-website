import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hesap',
  templateUrl: './hesap.component.html',
  styleUrls: ['./hesap.component.css']
})
export class HesapComponent {

  constructor(private router:Router, ){}

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


  doLogin(Values:any){
    this.user_records=JSON.parse(localStorage.getItem('users')||'{}');
    if(this.user_records.some((v) => {
      return v.email === this.data.email && v.password == this.data.password
      this.router.navigate(['/payment']);
    }))
    {alert('Giriş Yaptınız');
      this.router.navigate(['/showuser']);
    }
    else {
     alert('Giriş Başarısız');
    }

  }
}
