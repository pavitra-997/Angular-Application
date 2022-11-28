import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService:PostService) { }
 
  @Output() newPost:EventEmitter<Post>= new EventEmitter();
  @Output() updatedPost:EventEmitter<Post>= new EventEmitter();
  @Input() currentPost!: Post;
  @Input() isEdit:boolean | undefined;
  ngOnInit(): void {
  }

  addPost(title:any,body:any)
  {
    if(!title || !body){
      alert("Please add post")
    }
    else
    {
      this.postService.savePost({title,body} as Post).subscribe(post=>{
       this.newPost.emit(post);
      }) ;
    }
  }

  updatePost(){
    this.postService.updatePost(this.currentPost ).subscribe(post=>{
      this.isEdit=false
      console.log(post);
      this.updatedPost.emit(post)
    })
  }

 

}
