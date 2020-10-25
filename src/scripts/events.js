import $ from 'jQuery'
import store from './store'

function handleSubmit(){
    $('body').on('submit','form', function(e){
        e.preventDefault()
        let basePrice = $('.base-price').val()
        let tax = $('.tax').val()
        let tip = $('.tip').val()
        store.updateStore(basePrice, tax, tip)
        render()
    })
}

function handleCancel(){
    $('body').on('click','.cancel', function(e){
        render()
    } 
    )
}

function handleReset(){
    $('body').on('click', '.reset', function(e){
        console.log("hello")
        store.clearVals()
        render()
    })
}

function render(){
    let html = `
    <div class="group-row">
         <div class="item-row" id="left">
         <form>
             <h2>Enter the Meal Details</h2>
             <hr class="divider">
             <br>
             Base Meal Price: $
             <input type="text" name="base-price" class="base-price" placeholder="0.00" pattern= "\\d+(\\.\\d{2})?">
             <br>
             Tax Rate: %
             <input type="text" name="tax" class="tax" placeholder="0.00" pattern= "\\d+(\\.\\d{2})?">
             <br>
             Tip Percentage: 
             <input type="text" name="tip" class="tip" placeholder="0.00" pattern= "\\d+(\\.\\d{2})?">
             <br>
             <button type="submit" value="Submit">Submit</button>
             <button class="cancel">Cancel</button>
          </form>
         </div>
         <div class="item-row" id="right">
             <div class="item-column">
                 <h3>Customer Charges</h3>
                 <hr class="divider">
                <p> SubTotal: ${store.custCharges.subtotal}</p>
                 <p>Tip: ${store.custCharges.tip}</p>
                 <hr id="addition">
                 Total: ${store.custCharges.total}
             </div>
             <div class="item-column">
                 <h3>My Earnings Info</h3>
                 <hr class="divider">
                 <p>Tip Total: ${store.myEarnings.tipTotal}</p>
                 <p>Meal count: ${store.myEarnings.mealCount}</p>
                 <p>Average Tip Per Meal: ${store.myEarnings.avg}</p>
             </div>

         </div>
     </div>
     <button class="reset">Reset</button> `
     $('body').html(html)
}

function handleListeners(){
    handleCancel()
    handleReset()
    handleSubmit()
}

export default{
    render, 
    handleListeners
}