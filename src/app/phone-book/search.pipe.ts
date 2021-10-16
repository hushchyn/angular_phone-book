import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from './contact.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contact: Array<IContact>, field:string,): Array<IContact> {
    if (!field) {
      return contact
    }
    if (!contact) {
      return []
    }
    if (contact.filter(contact => contact.firstName.toLowerCase().includes(field.toLowerCase())).length > 0) {
      return contact.filter(contact => contact.firstName.toLowerCase().includes(field.toLowerCase()))
    }
    if (contact.filter(contact => contact.lastName.toLowerCase().includes(field.toLowerCase())).length > 0) {
      return contact.filter(contact => contact.lastName.toLowerCase().includes(field.toLowerCase()))
    }
    if (contact.filter(contact => contact.phone.toLowerCase().includes(field.toLowerCase())).length > 0) {
      return contact.filter(contact => contact.phone.includes(field))
    }
      return []
  }
}
