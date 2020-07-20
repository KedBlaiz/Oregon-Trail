class Traveler {
    constructor(name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = ('true')
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food >0) {
            this.food -= 1
         
        }
        else {
            return ('false')

        }

    }
}

class Wagon {
    constructor(capacity, passengers) {
        this.capacity = capacity
        this.passengers = []

    }
    getAvailableSeatCount() {
        const AvailableSeat = this.capacity
        this.capacity - this.passengers.length
        return ('AvailableSeat')
    }
    join(Traveler) {
        if (this.getAvailableSeatCount === 0) {
            this.passengers.push(travelers)
        }

    }
    shouldQuarantine() {
        const Quarantine = this.passengers.some(function (passengers) {
            passengers.isHealthy === false
        })
        return ('Quarantine')
    }

    totalFood() {
        const totalFood = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            totalFood += this.passengers[index].food
        }
        return ('totalFood')
    }
}
