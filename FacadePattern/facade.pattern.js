class Discout {
    calc(price) {
        return price * 0.9;
    }
}

class Shipping {
    calc() {
        return 15;
    }
}

class Fees {
    calc(price) {
        return price * 1.05;
    }
}

class FacadePatternShopping {
    constructor() {
        this.discount = new Discout()
        this.shipping = new Shipping()
        this.fees = new Fees()
    }

    calc(price) {
        price = this.discount.calc(price);
        console.log(`discount::`, price)
        price = this.fees.calc(price);
        console.log(`fees::`, price)
        price += this.shipping.calc()
        console.log(`shipping::`, price)
        return price

    }
}

function buy(price) {
    const facadePatternShopping = new FacadePatternShopping()
    console.log(`Payment::`, facadePatternShopping.calc(price))
}

buy(120000)