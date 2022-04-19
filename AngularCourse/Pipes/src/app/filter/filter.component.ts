import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
}


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  search = ''

  posts: Post[] = [
    { title: 'Beer', text: 'The best beer.' },
    { title: 'Bread', text: 'The best bread.' }
  ]

  addPost() {
    this.posts.unshift({
      title: 'Ice cream', text: 'The best ice cream.'
    })
  }
}
