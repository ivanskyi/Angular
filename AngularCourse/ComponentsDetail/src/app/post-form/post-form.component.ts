import { Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput') inputRef?: ElementRef

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.text.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      this.title = this.text = ''
    }
  }


  focusTitle() {
    this.inputRef?.nativeElement.focus()
    console.log(this.inputRef)
  }

}