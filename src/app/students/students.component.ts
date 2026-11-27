import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudents } from '../model/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  updateId : string = "";
  isUpdating: boolean = false;



  @ViewChild('fName') fName !: ElementRef;
  @ViewChild('lName') lName !: ElementRef;
  @ViewChild('age') age !: ElementRef;
  @ViewChild('rollNo') rollNo !: ElementRef;
  @ViewChild('email') email !: ElementRef;
  @ViewChild('contact') contact !: ElementRef;

  studentArr: Array<Istudents> = [

    {
      fName: "abhi",
      lName: "sharma",
      age: 20,
      rollNo: 22,
      email: "abhi@getMaxListeners.com",
      contact: 123456789,
      id: "125"
    },
    {
      fName: "rohan",
      lName: "jadhav",
      age: 43,
      rollNo: 12,
      email: "rohan@getMaxListeners.com",
      contact: 123456789,
      id: "126"
    },
    {
      fName: "karan",
      lName: "sharma",
      age: 33,
      rollNo: 19,
      email: "karan@getMaxListeners.com",
      contact: 123456789,
      id: "127"
    },
    {
      fName: "arjun",
      lName: "yadav",
      age: 30,
      rollNo: 22,
      email: "arjun@getMaxListeners.com",
      contact: 123456789,
      id: "128"
    },
  ]


  //create
  onAddStudent() {
    let studentObj : Istudents = {
    fName: this.fName.nativeElement.value,
    lName: this.lName.nativeElement.value,
    age: (this.age.nativeElement.value),
    rollNo: (this.rollNo.nativeElement.value),
    email: this.email.nativeElement.value,
    contact: (this.contact.nativeElement.value),
    id : Date.now().toString()

    };

    this.studentArr.push(studentObj)

    this.fName.nativeElement.value = "";
    this.lName.nativeElement.value = "";
    this.age.nativeElement.value = "";
    this.rollNo.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.contact.nativeElement.value = "";


  }


//delete
  onDelete(index : number){
    this.studentArr.splice(index, 1)

  }
  


 //edit 
 onEdit(student : Istudents){
  this.fName.nativeElement.value = student.fName,
  this.lName.nativeElement.value = student.lName,
  this.age.nativeElement.value = student.age,
  this.rollNo.nativeElement.value = student.rollNo,
  this.email.nativeElement.value = student.email,
  this.contact.nativeElement.value = student.contact

  this.isUpdating = true;
  this.updateId = student.id

 }


 //update
 onUpdate(){
  let updateObj : Istudents = {
    fName : this.fName.nativeElement.value,
    lName : this.lName.nativeElement.value,
    age : (this.age.nativeElement.value),
    rollNo : (this.rollNo.nativeElement.value),
    email : this.email.nativeElement.value,
    contact : (this.contact.nativeElement.value),
    id : this.updateId
  }

  let getIndex = this.studentArr.findIndex(e => e.id === this.updateId);

  if(getIndex !== -1){
    this.studentArr[getIndex] = updateObj;
  }

  this.fName.nativeElement.value = "";
  this.lName.nativeElement.value = "";
  this.age.nativeElement.value = "";
  this.rollNo.nativeElement.value = "";
  this.email.nativeElement.value = "";
  this.contact.nativeElement.value = "";

   this.isUpdating = false;
   this.updateId = "";


 }


}
