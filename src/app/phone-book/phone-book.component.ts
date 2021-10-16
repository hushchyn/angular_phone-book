import { Component, OnInit } from '@angular/core';
import { IContact } from './contact.interface';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {


  public input = true
  public myContacts: Array <IContact> = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      phone: '0998887766'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      phone: '0676665544'
    },
    {
      firstName: 'Vasyl',
      lastName: 'Fediv',
      phone: '0973332211'
    },
    {
      firstName: 'Andriy',
      lastName: 'Andriyiv',
      phone: '0961234567'
    },
    {
      firstName: 'Bogdan',
      lastName: 'Bogdanov',
      phone: '0667778899'
    }
  ]

  public field!: any;
  public modal = false
  public firstName!: string;
  public lastName!: string;
  public phone!: string;
  public index!: number;
  public add = true;
  public arrow!: boolean;
  public firstColumnDirection = false
  public secondColumnDirection = false
  public thirdColumnDirection = false
  public sortPhoneBook ={
    sort: true,
    column: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.modal = !this.modal
  }

  addContact():void{
    if(this.firstName && this.lastName && this.phone){
    let newContact = new Contacts ( this.firstName, this.lastName, this.phone)
    this.myContacts.push(newContact)
    this.firstName = ''
    this.lastName = ''
    this.phone = ''
    this.modal = false    
    }
    else{
      this.input = !this.input
    }
  }

  saveContact():void{
    this.myContacts[this.index].firstName = this.firstName
    this.myContacts[this.index].lastName = this.lastName
    this.myContacts[this.index].phone = this.phone
    this.modal = false
    this.add = true
    this.firstName = ''
    this.lastName = ''
    this.phone = ''
  }

  edit(index:number):void{
    this.firstName = this.myContacts[index].firstName
    this.lastName = this.myContacts[index].lastName
    this.phone = this.myContacts[index].phone
    this.index = index
    this.modal = true
    this.add = !this.add

  }

  deleteContact(index:number):void{
    this.myContacts.splice(index , 1)
  }

  sortList(column:string , reverse:string):void{
    if (this.sortPhoneBook.sort){
      this.sortPhoneBook.column = column;
      this.sortPhoneBook.sort = false;
      this.arrow = true
    }else{
      this.sortPhoneBook.column = reverse;
      this.sortPhoneBook.sort = true
      this.arrow = false
    }
    this.showDirection()
  }

  showDirection(){
    if ( this.sortPhoneBook.column == 'first' || this.sortPhoneBook.column == 'reverseFirst'){
      this.firstColumnDirection = true
      this.secondColumnDirection = false
      this.thirdColumnDirection = false
    }
    else if ( this.sortPhoneBook.column == 'second' || this.sortPhoneBook.column == 'reverseSecond'){
      this.firstColumnDirection = false
      this.secondColumnDirection = true
      this.thirdColumnDirection = false
    }
    else if ( this.sortPhoneBook.column == 'number' || this.sortPhoneBook.column == 'reverseNumber'){
      this.firstColumnDirection = false
      this.secondColumnDirection = false
      this.thirdColumnDirection = true
    }
  }


  

}


export class Contacts implements IContact{
  firstName: string;
  lastName: string;
  phone: string;
  constructor( name:string, sName:string, phone:string ){
    this.firstName = name
    this.lastName = sName
    this.phone = phone
  }
}