import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {

  inputValue = ''
  numbers = [1, 1, 2, 3, 5, 8, 13]

  constructor() {
  }

  onInput(event: KeyboardEvent) {
    console.log('Event', event)
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onClick() {
    console.log("Click!")
  }

  onBlur(str: string) {
    this.inputValue = str
  }
}
