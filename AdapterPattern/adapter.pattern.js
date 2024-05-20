// define MomoPaymentAdapter class

class MomoPaymentAdapter {
    constructor(momoPayment) {
        this.momoPayment = momoPayment
    }

    //definethe PayWithVisa method that is required by the you registraction process
    payWithVisa(visaPayment) {

        //convert the momo to visa
        const convertedPayment = this.convertToVisaPayment(this.momoPayment)

        //make the payment using the Visa
        visaPayment.pay(convertedPayment)
    }

    //define the convertToVisaPayment method
    convertToVisaPayment(momoPayent) {
        //convert the momo to a visa
        const conversionRate = 25000 //1 USD - 25000 VND
        const visaAmount = momoPayent.amount / conversionRate
        const visaPayment = {
            cardNumber: momoPayent.cardNumber,
            expiryDate: momoPayent.expiryDate,
            cvv: momoPayent.cvv,
            amount: visaAmount
        }

        return visaPayment
    }
}

// define VisaPayment

class VisaPayment {
    pay(payment) {
        console.log(`Paying ${payment.amount} USD with Visa card ${payment.cardNumber}...`)

        //TODO: Payment process logic...
    }
}

// define MomoPayment

class MomoPayment {
    constructor(cardNumber, expiryDate, cvv, amount) {
        this.cardNumber = cardNumber,
        this.expiryDate = expiryDate,
        this.cvv = cvv,
        this.amount = amount

    }
}

// create a momo

const momoPayment = new MomoPayment('19239219329', '12/25', '512', 30000)

// create MomoToVisaAdapter

const momoPaymentAdapter = new MomoPaymentAdapter(momoPayment)

// create VisaPayment

const visaPayment = new VisaPayment()

// register for Visa Youtube

momoPaymentAdapter.payWithVisa(visaPayment)