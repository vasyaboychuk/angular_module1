import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentService} from "../../services/comment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private commentsService:CommentService,private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.commentsService.getById(id).subscribe(value => this.comment=value)
    })
  }

}
