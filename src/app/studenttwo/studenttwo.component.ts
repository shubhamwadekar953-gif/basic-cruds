import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudenttwo } from '../model/studenttwo';

@Component({
  selector: 'app-studenttwo',
  templateUrl: './studenttwo.component.html',
  styleUrls: ['./studenttwo.component.css']
})
export class StudenttwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isUpdating : boolean = false;
  updateId : string = "";

  @ViewChild('fName')fName ! : ElementRef;
  @ViewChild('lName')lName ! : ElementRef;
  @ViewChild('email')email ! : ElementRef;
  @ViewChild('age')age ! : ElementRef;
  @ViewChild('contact')contact ! : ElementRef;


  studenttwoArr: Array<Istudenttwo> = [
    {
      fName: "amol",
      lName: "trimukhe",
      email: "amul@gmail.com",
      age: 22,
      contact: 123456578,
      id : "123"
    },
    {
      fName: "Rohit",
      lName: "sharma",
      email: "rohit@gmail.com",
      age: 45,
      contact: 123451234,
      id : "124"
    },
    {
      fName: "rajat",
      lName: "patidar",
      email: "rajat@gmail.com",
      age: 38,
      contact: 87654321,
      id : "125"
    },
    {
      fName: "vaibhav",
      lName: "suryavanshi",
      email: "vaibhav@gmail.com",
      age: 16,
      contact: 123456578,
      id : "126"
    },
    {
      fName: "abhishek",
      lName: "sharma",
      email: "abhishek@gmail.com",
      age: 28,
      contact: 123456578,
      id : "127"
    },
    {
      fName: "Ravi",
      lName: "shastri",
      email: "ravi@gmail.com",
      age: 60,
      contact: 987612345,
      id : "128"
    },
    {
      fName: "Devdut",
      lName: "padikal",
      email: "devdutt@gmail.com",
      age: 27,
      contact: 123456578,
      id : "129"
    },
    {
      fName: "phil",
      lName: "salt",
      email: "phil@gmail.com",
      age: 34,
      contact: 123456578,
      id : "130"
    }
  ];

//create
  onAddstudent() {

    let studentObj  : Istudenttwo = {
    fName : this.fName.nativeElement.value,
    lName : this.lName.nativeElement.value,
    email :this.email.nativeElement.value,
    age : (this.age.nativeElement.value),
    contact : (this.contact.nativeElement.value),
    id : Date.now().toString()
    }

    this.studenttwoArr.push(studentObj);


    this.fName.nativeElement.value = "";
    this.lName.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.age.nativeElement.value = "";
    this.contact.nativeElement.value = "";


  }

//delete
  onDelete(index : number){
    this.studenttwoArr.splice(index, 1)

  }

  //edit
  onEdit(student : Istudenttwo){
    this.fName.nativeElement.value = student.fName,
    this.lName.nativeElement.value = student.lName,
    this.email.nativeElement.value = student.email,
    this.age.nativeElement.value = student.age,
    this.contact.nativeElement.value = student.contact

    this.isUpdating = true;
    this.updateId = student.id
   
  }

  //update
  onUpdate(){
    let updateObj :  Istudenttwo = {
      fName : this.fName.nativeElement.value,
      lName : this.lName.nativeElement.value,
      email : this.email.nativeElement.value,
      age : this.age.nativeElement.value,
      contact : this.contact.nativeElement.value,
      id : this.updateId

    }

    let getIndex = this.studenttwoArr.findIndex(e => e.id === this.updateId)

    if(getIndex !== -1){
      this.studenttwoArr[getIndex] = updateObj;

    }

    this.fName.nativeElement.value = "";
    this.lName.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.age.nativeElement.value = "";
    this.contact.nativeElement.value = "";

    this.isUpdating = false;
    this.updateId = " ";

  };
  

}
