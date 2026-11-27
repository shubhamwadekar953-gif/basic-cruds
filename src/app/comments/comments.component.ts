import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icomments } from '../model/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('postId') postId !: ElementRef;
  @ViewChild('name') name !: ElementRef;
  @ViewChild('email') email !: ElementRef;
  @ViewChild('body') body !: ElementRef;

  isUpdating: boolean = false;
  updateId: string = "";



  commentsArr: Array<Icomments> = [
    {
      "postId": 1,
      "id": "1",
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": "2",
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": "3",
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      "postId": 1,
      "id": "4",
      "name": "alias odio sit",
      "email": "Lew@alysha.tv",
      "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      "postId": 1,
      "id": "5",
      "name": "vero eaque aliquid doloribus et culpa",
      "email": "Hayden@althea.biz",
      "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
  ];




  onAddcomment() {
    let commentObj = {
    postId : (this.postId.nativeElement.value),
    name : this.name.nativeElement.value,
    email : this.email.nativeElement.value,
    body : this.body.nativeElement.value,
    id : Date.now().toString()
    }


     this.commentsArr.push(commentObj)
  }


  onDelete(index : number){
    this.commentsArr.splice(index, 1)

  }


  onEdit(comment : Icomments){
    this.postId.nativeElement.value = comment.postId,
    this.name.nativeElement.value = comment.name,
    this.email.nativeElement.value = comment.email,
    this.body.nativeElement.value = comment.body,


    this.isUpdating = true;
    this.updateId = comment.id

  }


  onUpdate() {
    let updateObj : Icomments = {
      postId : this.postId.nativeElement.value,
      name : this.name.nativeElement.value,
      email : this.email.nativeElement.value,
      body : this.body.nativeElement.value,
      id : this.updateId

    };

    let getIndex = this.commentsArr.findIndex(t => t.id === this.updateId)
    if(getIndex !== -1){
      this.commentsArr[getIndex] = updateObj;
    }

    this.postId.nativeElement.value = "";
    this.name.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.body.nativeElement.value = "";


    this.isUpdating = false;

  }



}
