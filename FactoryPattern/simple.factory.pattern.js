// without simple factory pattern 

const serviceLogistics = (cargoVolume) => {
    switch (cargoVolume) {
        case '10':
            return {
                name: 'Truck 10',
                doors: 6,
                price: '100.000 vnd'
            }
        case '20':
            return {
                name: 'Truck 20',
                doors: 16,
                price: '1.000.000 vnd'
            }
    }
}

console.log(` level 0 ::: `, serviceLogistics('10'))

// Simple factory pattern

class ServiceLogistics {
    constructor(name = 'Truck 10', doors = 6, price = '100.000 vnd') {
        this.name = name;
        this.price = price;
        this.doors = doors;
    }

    static getTransports = (cargoVolume) => {
        switch (cargoVolume) {
            case '10':
               return new ServiceLogistics()
            case '20':
              return new ServiceLogistics('Truck 20', 16, '1.000.000 vnd' )
        }
    }
}

console.log(` level  ::: `, ServiceLogistics.getTransports('20'))
