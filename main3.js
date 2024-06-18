let contactBook = {
    contacts: [
        {
            name: 'Dima',
            phone: '+1234567890',
            email: 'Dima@gmail.com',
        },
        {
            name: 'Vasya',
            phone: '+0987654321',
            email: 'Vasya@gmail.com',
        },
        {
            name: 'Kirill',
            phone: '+1122334455',
            email: 'kirill@gmail.com',
        }
    ],
    searchName: function(name) {
        return this.contacts.find(contact => contact.name === name)
    },
    addContact: function(name, phone, email) {
        if(this.contacts.find(contact => contact.name === name)) {
            return 'contact with this name is already exists'
        }
        this.contacts.push({ name, phone, email });
        console.log('Contact is added:')
        return `${name} (${phone}) ${email}`;
    }

};

console.log(contactBook.searchName('Dima'));
console.log(contactBook.addContact('Toxa', '+2131523567', 'Toxa@gmail.com'));