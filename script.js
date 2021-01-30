// before clicking book now

function handleTicket(businessOrEconomy, increase){
           
    const ticketInput = document.getElementById(businessOrEconomy + "-count");
    const ticketCount = parseInt(ticketInput.value)
   
    if (increase == true){
        ticketNewCount = ticketCount + 1
    }
    if (increase == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1
    }
    ticketInput.value = ticketNewCount;
    
    let businessOrEconomyTotal = 0;
    if (businessOrEconomy == 'business'){
        businessOrEconomyTotal = ticketNewCount * 150;
    }
    if (businessOrEconomy == 'economy'){
        businessOrEconomyTotal = ticketNewCount * 100;
    }

    document.getElementById(businessOrEconomy + '-total').innerHTML = '$' + businessOrEconomyTotal;
    totalAmount()
}

function subtotalInputValue(ticket){
    const ticket0 = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticket0.value);
    return ticketCount;
 }

function totalAmount(){
    const businessCount = subtotalInputValue('business');
    const economyCount =subtotalInputValue('economy');

    const subTotal = (businessCount * 150) + (economyCount * 100);
    document.getElementById('subtotal').innerHTML = '$' + subTotal;

    const tax = subTotal * (10 ** -1);
    document.getElementById('vat').innerHTML = '$' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('total').innerHTML = '$' + grandTotal;
}

// after clicking book now

