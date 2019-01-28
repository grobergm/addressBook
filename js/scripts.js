function AddressBook(){
  this.contacts=[];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i].id == id) {
      return this.contacts[i];
    }
  };
  return false;
};

AddressBook.prototype.removeContact = function(id){
  for (var i=0;i<this.contacts.length;i++){
    if(this.contacts[i].id==id){
      this.contacts.splice(i,1);
    }
  }
}

// Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber){
  this.firstName=firstName;
  this.lastName=lastName;
  this.phoneNumber=phoneNumber;
}

Contact.prototype.fullName= function() {
  return this.firstName+" "+this.lastName;
}

var addressBook = new AddressBook();
var contact= new Contact("Matt","Groberg","555-333-2222");
var contact2= new Contact("Phil","Imaginary","555-333-2322");

addressBook.addContact(contact);
addressBook.addContact(contact2);
console.log(addressBook);
console.log(addressBook.findContact(2));

$(document).ready(function(){
  $("form#newContactForm").submit(function(event){
    event.preventDefault();
    var first=$("input#firstName").val();
    var last=$("input#lastName").val();
    var phone=$("input#phoneNumber").val();
    var newContact=new Contact(first,last,phone);
    addressBook.addContact(newContact);


    $("#results .card").hide();
    addressBook.contacts.forEach(function(contact){
      var cardStart = "<div class='card' id="+contact.id+">"
      var cardTitle = "<h3 class='card-title'>"+contact.fullName()+"</h3>";
      var cardText = "<p class='card-text'>" + contact.phoneNumber +"</p>";
      var cardButton = "<button id='"+contact.id+"Button'>Remove Contact</button>";
      var cardEnd = "</div>"
      console.log(cardStart + cardButton);
      $("#results").prepend(cardStart+cardTitle+cardText+cardButton+cardEnd);
      $("button#"+contact.id+"Button").click(function(){
        addressBook.removeContact(contact.id);
        $(".card#"+contact.id).hide();
      })
    });

    // $("#results").text(addressBook);
  })
});
