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
        if (this.getAvailableSeatCount > 0) {
            this.passengers.push(travelers)
        }

    }
    shouldQuarantine() {
        const Quarantine = this.passengers.some(food <= food.isHealthy === ) 
        
        }
        return ('Quarantine')
    }

    totalFood() {
        const totalFood = this.passengers.reduce(function(sum,passengers) {
            return sum + this.passengers.totalFood
        }, 0)
       
        return ('totalFood') 
    }
}
