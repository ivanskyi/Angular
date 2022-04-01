import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  img = 'https://s3.amazonaws.com/ckl-website-static/wp-content/uploads/2016/08/Banner_reactnative4-300x300.jpg'

  constructor() {
    setTimeout(
      () => {
        console.log('We changed image')
        this.img = 'https://spng.subpng.com/20180329/jue/kisspng-angularjs-dart-front-and-back-ends-npm-escalator-5abda7d6ba62f5.4348649815223787107634.jpg'
      }, 5000
    )
  }
}
