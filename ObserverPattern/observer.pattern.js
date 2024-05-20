class Observer {

    constructor(name) {
        this.namePick = name;
    }

    updateStatus(location) {
        this.goToHelp(location)
    }

    goToHelp(location) {
        console.log(`${this.namePick} :::PING::: ${JSON.stringify(location)}`)
    }
}


class Subject {

    constructor() {
        this.observerList = [];
    }

    addObserver(observer) {
        this.observerList.push(observer);
    }

    notify(location) {
        this.observerList.forEach(observer => {
            observer.updateStatus(location)
        })
    }
}

const subject = new Subject()


// your pick

const riki = new Observer('Riki')
const sniper = new Observer('Sniper')
const yorn = new Observer('Yorn 👨🏿‍🎤')


// add riki and siniper to team

subject.addObserver(riki)
subject.addObserver(sniper)
subject.addObserver(yorn)


//push location to team

subject.notify({ long: 302, lat: 29 })

