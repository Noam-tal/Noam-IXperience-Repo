class Person {
    constructor(firstName, lastName, age, address, phoneNumber){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.address=address;
        this.phoneNumber=phoneNumber
    }
fullName(){
    return `Full Name: ${this.firstName} ${this.lastName}`
}

}
   
const Noam = new Person(
    'Noam',
    'Tal',
    18,
    'Berkeley Place',
    '07951'


)

console.log(Noam.fullName())

class Customer extends Person{
    constructor(
        firstName,
        lastName,
        age,
        address,
        phoneNumber,
        dob,
        membershipType
    ){
       super(firstName, lastName, age, phoneNumber, address)
        this.dob=dob
        this.membershipType=membershipType
    }

    static getMembershipCost(){
        let cost = 500
        this.cost=cost
        return `Memership costs: ${this.cost}`;
    }


}

console.log(Customer.getMembershipCost())
const Ruben = new Customer(
    'Ruben',
    'Sandwich',
    37,
    'Portobello Road',
    '+44',
    'January',
    'Premium'
);

console.log(Ruben.fullName())

const cristo = new Customer(
    'Cristo',
    'Redento',
    500,
    'Astro Station',
    '08374',
    'March',
    'Extra Premium'
)

console.log(cristo.fullName())

let customers = []
customers.push(Ruben)
customers.push(cristo)
console.log(customers)

class ui{

    constructor(){
        this.tableBody = document.getElementById("table-body")
    }
        
    renderCustomers(){
        this.tableBody.innerHTML = [];
        for (let i=0; i<customers.length; i++){
            const tr = document.createElement('tr')
            let firstName = document.createElement('td')
            let lastName = document.createElement('td')
            let age = document.createElement('td')
            let address = document.createElement('td')
            let phoneNumber = document.createElement('td')
            let dob = document.createElement('td')
            let membershipType = document.createElement('td')

            firstName.innerHTML = customers[i].firstName;
            lastName.innerHTML = customers[i].lastName;
            age.innerHTML = customers[i].age;
            address.innerHTML = customers[i].address;
            phoneNumber.innerHTML = customers[i].phoneNumber;
            dob.innerHTML = customers[i].dob;
            membershipType.innerHTML = customers[i].membershipType;

            tr.appendChild(firstName)
            tr.appendChild(lastName)
            tr.appendChild(age)
            tr.appendChild(address)
            tr.appendChild(dob)
            tr.appendChild(phoneNumber)
            tr.appendChild(membershipType)
            this.tableBody.appendChild(tr)

        }
    }
}

const UI=new ui()
UI.renderCustomers()