class Traveler {
    constructor (name, food) {
        this.name = name
        this.food = 1
        this.isHealthy = Boolean('true')
    }
    hunt () {
        this.food += 2
    }
    eat () {
        if (this.food < 1) {
            return ('false')
        }
        else{
            (this.food -= 1) 
                return ('true')
            
        }
        
    }
}

class Wagon {
    constructor (capacity, passengers) {
        this.capacity = capacity
        this.passengers = []
        
    }
    getAvailableSeatCount() {
       const AvailableSeat = this.capacity
       this.passengers.length 
       return ('AvailableSeat')
    }
    join(Traveler) {
        if (this.getAvailableSeatCount ===0) {
            this.passengers.push (travelers)
        }
       
    }
    shouldQuarantine() {
       const Quarantine = this.passengers.some
       (food <= food.isHealthy === false)
       return ('Quarantine')
    }

    totalFood() {
        const totalFood = 0
        for (let index = 0; index < this.passengers.length, index += 1) {
            totalFood += this.
        }
    }
}