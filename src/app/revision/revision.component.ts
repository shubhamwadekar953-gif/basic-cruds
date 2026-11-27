import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Irevision } from '../model/revision';

@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isUpdating: boolean = false;
  updateId : string = "";


  @ViewChild("name") name !: ElementRef;
  @ViewChild("age") age !: ElementRef;
  @ViewChild("course") course !: ElementRef;



  revisionArr: Array<Irevision> = [

    { id: '101', name: 'Rahul', age: 22, course: 'Angular' },
    { id: '102', name: 'Priya', age: 21, course: 'JavaScript' },
    { id: '103', name: 'Amit', age: 23, course: 'Node.js' },
    { id: '104', name: 'Sneha', age: 20, course: 'MongoDB' },
    { id: '105', name: 'Rohit', age: 24, course: 'TypeScript' }
  ];


  onAdd() {

    let stdObj: Irevision = {

      name: this.name.nativeElement.value,
      age: (this.age.nativeElement.value),
      course: this.course.nativeElement.value,
      id: Date.now().toString()
    }

    this.revisionArr.push(stdObj)

    this.name.nativeElement.value = "";
    this.age.nativeElement.value = "";
    this.course.nativeElement.value = "";


  }

  onDelete(index : number) {
    this.revisionArr.splice(index, 1)

  }


  onEdit(revision : Irevision) {
    this.name.nativeElement.value = revision.name,
    this.age.nativeElement.value = revision.age,
    this.course.nativeElement.value = revision.course

    this.isUpdating = true,
    this.updateId = revision.id

  }


  onUpdate() {
    let updateObj : Irevision = {
      name : this.name.nativeElement.value,
      age : this.age.nativeElement.value,
      course : this.course.nativeElement,
      id : this.updateId

    }

    let getIndex = this.revisionArr.findIndex(e => e.id === this.updateId)

    if(getIndex !== -1){
      this.revisionArr[getIndex] = updateObj;
    }


    this.name.nativeElement.value = "";
    this.age.nativeElement.value = "";
    this.course.nativeElement.value = "";
  }



}
