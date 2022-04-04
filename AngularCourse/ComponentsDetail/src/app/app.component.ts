import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    { title: 'I want', text: 'I want learn Angular', id: 1 },
    { title: 'I have', text: 'I have a dog', id: 2 },
    { title: 'I am', text: 'I am Ukrainian', id: 3 }
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0].title='Changed!'
    }, 5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)

  }

  removePost(id: number) {
    this.posts = this.posts.filter(p => p.id !== id)
  }

}
