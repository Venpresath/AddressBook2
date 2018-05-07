class Contact {
	constructor(name, email, phone, relation) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.relation = relation;
	}
}
class AddressBook {
	constructor(contacts) {
		this.contacts = contacts;
	}
	display() {
		let lower = document.getElementById("lower");
		lower.innerHTML = "";
		for(let i=0;i<this.contacts.length; i++) {
			let card = document.createElement("div");
			let name = document.createElement("p");
			let email = document.createElement("p");
			let phone = document.createElement("p");
			let relation = document.createElement("p");
			let trash = document.createElement("div");
			let trashImg = document.createElement("img");

			card.setAttribute("class", "card");
			trash.setAttribute("class", "trash");
			trash.setAttribute("id", i);
			trashImg.setAttribute("class", "trashImg");
			trashImg.setAttribute("src", "trashcan.svg");

			name.textContent = "Name: " + this.contacts[i].name;
			email.textContent = "Email: " +this.contacts[i].email;
			phone.textContent = "Phone: " + this.contacts[i].phone;
			relation.textContent = "Relation: " + this.contacts[i].relation;

			card.appendChild(name);
			card.appendChild(email);
			card.appendChild(phone);
			card.appendChild(relation);
			trash.appendChild(trashImg);
			card.appendChild(trash);
			lower.appendChild(card);

			let trashButton = document.getElementById(i);
			trashButton.addEventListener("click", () => {
				this.delete(trashButton.id);

			});
		}
	}
	add(name, email, phone, relation) {
		let contact = new Contact(name, email, phone, relation);
		this.contacts.push(contact);
		this.display();
	}
	delete(id) {
		this.contacts.splice(id, 1);
		let lower = document.getElementById("lower");
		this.display();
	}
}

let contacts = [{
	name: "Tyler",
	email: "tyler@email.com",
	phone: 8108109024,
	relation: "none"
	},
	{
	name: "Deborah",
	email: "deb@email.com",
	phone: 3137148929,
	relation: "person"
	},
	{
	name: "Tim",
	email: "timmy@email.com",
	phone: 7036781209,
	relation: "bud"
	},
	{
	name: "Alex",
	email: "allie@email.com",
	phone: 6162897987,
	relation: "sis"
	},
	{
	name: "Tyler",
	email: "tyler@email.com",
	phone: 8108109024,
	relation: "none"
	},
	{
	name: "Deborah",
	email: "deb@email.com",
	phone: 3137148929,
	relation: "person"
	},
	{
	name: "Tim",
	email: "timmy@email.com",
	phone: 7036781209,
	relation: "bud"
	},
	{
	name: "Alex",
	email: "allie@email.com",
	phone: 6162897987,
	relation: "sis"
	}  
];

let book = new AddressBook(contacts);
book.display();

let submitButton = document.getElementById('submit');
submitButton.addEventListener("click", () => {
	let name = document.getElementById("name");
	let email = document.getElementById("email");
	let phone = document.getElementById("phone");
	let relation = document.getElementById("relation");
	book.add(name.value, email.value, phone.value, relation.value);

	name.value = "";
	email.value = "";
	phone.value = "";
	relation.value = "";

});

