import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
declare var anime: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  firebaseConfig = {
    apiKey: 'AIzaSyAU18PPx8Whb8h6aNFcPQdLdKDd5i3mZ2g',
    authDomain: 'letstranslate-9e4fa.firebaseapp.com',
    databaseURL: 'https://letstranslate-9e4fa.firebaseio.com',
    projectId: 'letstranslate-9e4fa',
    storageBucket: 'letstranslate-9e4fa.appspot.com',
    messagingSenderId: '793318296992',
    appId: '1:793318296992:web:749da35a585abbecd1a8c5'
  };

  title = 'sugat-app';

  name = '';
  email = '';
  message = '';
  showEmailSentMessage = false;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    autoplaySpeed: 5000,
    speed: 1000,
    autoplay: false
  };

  manOne = {
    display: '',
    text: 'Nǐ hǎo!',
    speedFront: 500,
    speedBack: 500
  };

  manTwo = {
    display: '',
    text: 'Hello!',
    speedFront: 450,
    speedBack: 350
  };

  manThree = {
    display: 'Nama',
    text: 'Namaste!',
    speedFront: 450,
    speedBack: 350
  };

  manFourth = {
    display: '',
    text: 'Привет!',
    speedFront: 450,
    speedBack: 350
  };

  manFifth = {
    display: '',
    text: 'Cześć!',
    speedFront: 450,
    speedBack: 350
  };

  manSixth = {
    display: '',
    text: 'Sawubona!',
    speedFront: 450,
    speedBack: 350
  };

  manSeventh = {
    display: '',
    text: '¡Hola!',
    speedFront: 450,
    speedBack: 350
  };

  manEighth = {
    display: '',
    text: 'Hi!',
    speedFront: 450,
    speedBack: 350
  };

  manNinth = {
    display: '',
    text: 'Ciao!',
    speedFront: 450,
    speedBack: 350
  };

  slideOneWidth = 10;
  slideTwoWidth = 40;

  IncreaseIntervalForOne() {
    let intervalOne = setInterval(() => {
      this.slideOneWidth = this.slideOneWidth + 0.5;
      if (this.slideOneWidth == 93) {
        clearInterval(intervalOne);
        this.DecreaseIntervalForOne();
      }
    }, 50);
  }

  DecreaseIntervalForOne() {
    let intervalOneD = setInterval(() => {
      this.slideOneWidth = this.slideOneWidth - 0.5;
      if (this.slideOneWidth == 0) {
        clearInterval(intervalOneD);
        this.IncreaseIntervalForOne();
      }
    }, 50);
  }

  IncreaseIntervalForTwo() {
    let intervalTwo = setInterval(() => {
      this.slideTwoWidth = this.slideTwoWidth + 0.5;
      if (this.slideTwoWidth == 93) {
        clearInterval(intervalTwo);
        this.DecreaseIntervalForTwo();
      }
    }, 50);
  }

  DecreaseIntervalForTwo() {
    let intervalOneD = setInterval(() => {
      this.slideTwoWidth = this.slideTwoWidth - 0.5;
      if (this.slideTwoWidth == 10) {
        clearInterval(intervalOneD);
        this.IncreaseIntervalForTwo();
      }
    }, 50);
  }

  ngOnInit() {
    firebase.initializeApp(this.firebaseConfig);

    // this.IncreaseIntervalForOne();
    // this.IncreaseIntervalForTwo();

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manOne');
    }, 300);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manTwo');
    }, 450);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manThree');
    }, 350);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manFourth');
    }, 650);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manFifth');
    }, 950);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manSixth');
    }, 550);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manSeventh');
    }, 650);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manEighth');
    }, 450);

    setTimeout(() => {
      this.typingCallbackForManOne(this, 'manNinth');
    }, 350);
  }

  scroll(scrollTo) {
    let el = document.getElementById(scrollTo);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  typingCallbackForManOne(that, whichMan) {
    let totalLength = that[whichMan].text.length;
    let currentLength = that[whichMan].display.length;

    if (currentLength < totalLength) {
      that[whichMan].display += that[whichMan].text[currentLength];
      setTimeout(
        () => {
          that.typingCallbackForManOne(that, whichMan);
        },
        that[whichMan].speedFront,
        that
      );
    } else {
      let interval = setInterval(() => {
        let str = that[whichMan].display;
        str = str.substring(0, str.length - 1);
        that[whichMan].display = str;
        if (that[whichMan].display == '') {
          setTimeout(
            () => {
              that.typingCallbackForManOne(that, whichMan);
            },
            that[whichMan].speedFront,
            that
          );
          clearInterval(interval);
        }
      }, that[whichMan].speedBack);
    }
  }

  sendEmail() {
    var sent = false;
    window['Email']
      .send({
        Host: 'smtp.gmail.com',
        Username: 'letstranslatelanguage@gmail.com',
        Password: 'letstranslate@5502',
        To: 'projects@letstranslate.in',
        From: 'letstranslatelanguage@gmail.com',
        Subject: `${this.name} wants to contact you`,
        Body: `Email: ${this.email} Message: ${this.message}`
      })
      .then(function(message) {
        sent = true;
      });

    this.showEmailSentMessage = true;
    setTimeout(() => {
      this.name='';
      this.email='';
      this.message='';

      this.showEmailSentMessage = false;
    }, 4000);
  }
}
