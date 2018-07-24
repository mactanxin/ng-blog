import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'about-me',
    templateUrl: './about-me.component.html',
})

export class AboutMeComponent implements OnInit {

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];
  selectedVal = null;

  get format(){ 
  	return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat(){ 
  	this.toggle = !this.toggle; 
  }

  constructor(private router: Router){}

  ngOnInit() {}
}