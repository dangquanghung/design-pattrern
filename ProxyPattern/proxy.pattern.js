class Leader {
    receiveRequest(offer) {
        console.log(`Boss said::OK::`, offer)
    }
}

class Secretary {
    constructor() {
        this.leader = new Leader()
    }

    receiveRequest(offer) {
        this.leader.receiveRequest(offer)
    }
}

class Developer {
    constructor(offer) {
        this.offer = offer;
    }

    applyFor(target) {
        target.receiveRequest(this.offer)
    }
}

//How to use

const devs = new Developer('HungDQ27 upto 3000$')
devs.applyFor(new Secretary())