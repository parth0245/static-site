import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var anime: any;       
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'sugat-app';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    speed: 500,
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

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    // var textWrapper = document.querySelector('.ml12');
    // textWrapper.innerHTML = textWrapper.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );

    // anime
    //   .timeline({ loop: true })
    //   .add({
    //     targets: '.ml12 .letter',
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 1200,
    //     delay: (el, i) => 500 + 30 * i
    //   })
    //   .add({
    //     targets: '.ml12 .letter',
    //     translateX: [0, -30],
    //     opacity: [1, 0],
    //     easing: 'easeInExpo',
    //     duration: 1100,
    //     delay: (el, i) => 100 + 30 * i
    //   });
  }

  ngOnInit() {
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
}
