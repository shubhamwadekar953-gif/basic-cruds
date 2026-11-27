import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild("StudentName")StudentName !: ElementRef;
  @ViewChild("email")email ! : ElementRef;
  @ViewChild("contact")contacct ! : ElementRef;



  studentArr : Array<Istudent> = [
    {
    studentName : "Virat kohli",
    email : "vk@gmail.com",
    contact : "12345678",
    id : "1234"
    },
    {
      studentName : "rohit sharma",
      email : "rs@gmail.com",
      contact : "123456789",
      id : "1235"
    },
    {
      studentName : "rahul dravid",
      email : "rahul@gmail.com",
      contact : "09856789",
      id : "1235"
    },
    {
      studentName : "KL rahul",
      email : "kl@gmail.com",
      contact : "1234567123",
      id : "1236"
    },
    
    
  ];

  isUpdating : boolean = false;
  updateId : string = "";

//create
  onAddStudent(){
    let studentdObj : Istudent = {
      studentName : this.StudentName.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : this.contacct.nativeElement.value,
      id : Date.now().toString()

    };

    this.studentArr.push(studentdObj);

    this.StudentName.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.contacct.nativeElement.value ="";

  }

//delete
  onDelete(index : number){
    this.studentArr.splice(index, 1)

  }




//edit
  onEdit(student : Istudent){
    this.StudentName.nativeElement.value = student.studentName,
    this.email.nativeElement.value = student.email,
    this.contacct.nativeElement.value = student.contact,

    this.isUpdating = true;
    this.updateId = student.id 

  }





  onUpdate(){

    let updateObj : Istudent = {
      studentName : this.StudentName.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : this.contacct.nativeElement.value,
      id : this.updateId
    }

    let getIndex = this.studentArr.findIndex(e => e.id === this.updateId);
    if(getIndex !== -1){
      this.studentArr[getIndex] = updateObj;
    }

    this.StudentName.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.contacct.nativeElement.value = "";

    this.isUpdating = false;
    this.updateId = "";

  }





}
