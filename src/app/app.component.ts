import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sugat-app';

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    speed: 3000,
    autoplay: true
  };

  ngOnInit() {}

  scroll(scrollTo) {
    let el = document.getElementById(scrollTo);
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
