class Person {
    constructor(firstName, lastName, age, address, phoneNumber){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.address = address
        this.phoneNumber = phoneNumber
    }
    fullName (){
        return `Full Name: ${this.firstName} ${this.lastName}`
    }

    sayHello(){
        return `Good Morning ${this.firstName} ${this.lastName}`
    }

    addTwoNumbers(num1, num2){
        return num1+num2
    }
}

const Noam = new Person (

    'Noam',
    'Tal',
    18,
    'Brooklyn',
    347
)

console.log(Noam)
console.log(Noam.fullName())
console.log(Noam.sayHello())
console.log(Noam.addTwoNumbers(1, 2))

class Customer extends Person{
    constructor (firstName, lastName, age, address, phoneNumber, dob, membershipType){
        super(firstName, lastName, age, address, phoneNumber);
        this.dob=dob;
        this.membershipType = membershipType;
    }
    
    static getMembershipCost(){
        let cost = 500;
        this.cost=cost
        return `This Membership Costs ${this.cost}`
    }
    getMembershipType(){
        return `${this.membershipType} Membership`
    }
}

const Big = new Customer(
    'Big',
    'Chilling',
    35,
    'Manhattan',
    852,
    05/09,
    'Premium'
)
console.log(Big);
console.log(Customer.getMembershipCost());
console.log(Big.fullName());
console.log(Big.sayHello());
console.log(Big.getMembershipType())

const Beetroot = new Customer (
    'Beetroot',
    'Vegies',
    46,
    'Bronx',
    458,
    9/45,
    'Golden'
)

console.log(Beetroot)
console.log(Beetroot.fullName())
console.log(Beetroot.getMembershipType())

let customers = [];
customers.push(Big);
customers.push(Beetroot);
console.log(customers)

class UI{
    constructor(){
        this.tableBody = document.getElementById('table-body')
    }
    
    renderCustomers(){
        this.tableBody.innerHTML = [];
        for (let i = 0; i<customers.length; i++){
          const tr = document.createElement('tr')  
          let firstName = document.createElement('td')
          let lastName = document.createElement('td')
          let age = document.createElement('td')
          let address = document.createElement('td')
          let phoneNumber = document.createElement('td')
          let dob = document.createElement('td')
          let membershipType = document.createElement('td')


          firstName.innerHTML = customers[i].firstName
          lastName.innerHTML = customers[i].lastName
          age.innerHTML = customers[i].age
          address.innerHTML = customers[i].address
          phoneNumber.innerHTML = customers[i].phoneNumber
          dob.innerHTML = customers[i].dob
          membershipType.innerHTML = customers[i].membershipType

          tr.appendChild(firstName);
          tr.appendChild(lastName);
          tr.appendChild(age);
          tr.appendChild(address);
          tr.appendChild(phoneNumber);
          tr.appendChild(dob);
          tr.appendChild(membershipType);

          this.tableBody.appendChild(tr)
        }
    }
}

const ui = new UI()
ui.renderCustomers()