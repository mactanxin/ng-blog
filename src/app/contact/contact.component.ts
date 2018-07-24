import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
})

export class ContactComponent implements OnInit {
    constructor(private router: Router){}

    contact = {
    	name: 'name',
    	email: 'me@here.com'
    }

    ngOnInit() {
        console.log("contact me here");
    }
}