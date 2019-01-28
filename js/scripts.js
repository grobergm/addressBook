function AddressBook(){
  contacts:[];
}

AddressBook.prototype.addContact = function(contact){
  this.contacts.push(contact);
}

function Contact(firstName, lastName, phoneNumber){
  this.firstName=firstName;
  this.lastName=lastName;
  this.phoneNumber=phoneNumber;
}

Contact.prototype.fullName= function() {
  return this.firstName+" "+this.lastName;
}

var contact= new Contact("Matt","Groberg","555-333-2222");
var contact2= new Contact("Phil","Imaginary","555-333-2322");

console.log(testContact);

$(document).ready(function(){
});
