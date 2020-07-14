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
       const Quarantine = this.passengers.some (this.food < tfood. isHealthy)
   
        return Quarantine
    }

    totalFood() {

    }
}