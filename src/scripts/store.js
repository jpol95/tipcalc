
let custCharges = {subtotal: 0.00, tip:  0.00, total: 0.00}
let myEarnings = {tipTotal: 0.00, mealCount: 0.00, avg: 0.00}

function updateStore(base, tax, tipPerc){
        custCharges.subtotal = Math.round((base * (1+tax/100)*100))/100
        custCharges.tip = Math.round(tipPerc*custCharges.subtotal)/100
        custCharges.total = Math.round((custCharges.subtotal + custCharges.tip)*100)/100
        myEarnings.tipTotal = Math.round((myEarnings.tipTotal + custCharges.tip)*100)/100
        myEarnings.mealCount += 1
        myEarnings.avg = Math.round(100*myEarnings.tipTotal / myEarnings.mealCount)/100
}

function clearVals(){
    for (let key in custCharges) this.custCharges[key] = 0.00;
    for (let key in myEarnings) this.myEarnings[key] = 0.00

}


export default{
    custCharges, 
    myEarnings, 
    updateStore, 
    clearVals
}