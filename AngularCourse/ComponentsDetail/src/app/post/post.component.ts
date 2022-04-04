import { ViewEncapsulation } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Output } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { DoCheck } from '@angular/core';
import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('myPost') post?: Post
  @ContentChild('info', { static: true }) infoRef?: ElementRef
  @Output() onRemove = new EventEmitter<number>()

  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit()')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('OnDestroy')
  }

  removePost() {
    this.onRemove.emit(this.post?.id)
  }

} 
