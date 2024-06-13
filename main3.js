let obj = {
    name: 'Dima',
    age: 17,
    location: 'Odessa',
    getInfo: function() {
        console.log(`name: ${this.name}`)
        console.log(`age: ${this.age}`)
        console.log(`location: ${this.location}`)
    },
    UpdateInfo: function(newName, newAge, newLocation) {
        this.name = newName;
        this.age = newAge;
        this.location = newLocation;
    }
}

obj.getInfo()
obj.UpdateInfo('Kirill', 22, 'Kyiv')
obj.getInfo()
