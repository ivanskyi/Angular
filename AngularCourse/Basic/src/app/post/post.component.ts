import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {

  inputValue = ''
  constructor() {
  }

  onInput(event: any) {
    console.log('Event', event)
    this.inputValue = event.target.value
  }
}
