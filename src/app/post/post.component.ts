import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipost } from '../model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('userId') userId !: ElementRef;
  @ViewChild('title') title !: ElementRef;
  @ViewChild('body') body !: ElementRef;


  isUpdating: boolean = false;
  updateId: string = "";



  postArr: Array<Ipost> = [
    {
      "userId": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "id": "1"
    },
    {
      "userId": 1,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      "id": "2"
    },
    {
      "userId": 1,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      "id": "3"

    },
    {
      "userId": 1,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      "id": "4"
    },
    {
      "userId": 1,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      "id": "5"
    },
    {
      "userId": 1,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
      "id": "6"
    },


  ];


  onAddPost() {
    let postObj = {
      userId: (this.userId.nativeElement.value),
      title: this.title.nativeElement.value,
      body: this.body.nativeElement.value,
      id: Date.now().toString()

    };

    this.postArr.push(postObj);

    this.userId.nativeElement.value = "";
    this.title.nativeElement.value = "";
    this.body.nativeElement.value = "";
  }


  onDelete(index: number) {
    this.postArr.splice(index, 1)

  }


  onEdit(post: Ipost) {
    this.userId.nativeElement.value = post.userId,
    this.title.nativeElement.value = post.title;
    this.body.nativeElement.value = post.body;


    this.isUpdating = true;
    this.updateId = post.id;


  };

  onUpdate() {
    let updateObj: Ipost = {
      userId: this.userId.nativeElement.value,
      title: this.title.nativeElement.value,
      body: this.body.nativeElement.value,
      id: this.updateId
    };

    let getIndex = this.postArr.findIndex(e => e.id === this.updateId)
    if (getIndex !== -1) {
      this.postArr[getIndex] = updateObj;
    }

    this.userId.nativeElement.value = "";
    this.title.nativeElement.value = "";
    this.body.nativeElement.value = "";


    this.isUpdating = false;


  }



}
