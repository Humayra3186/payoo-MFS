//add button for add form

document.getElementById('add-btn').addEventListener('click',function(){
     document.getElementById('add-form').classList.remove('hidden');
     document.getElementById('out-form').classList.add('hidden')
    
})


//cashout btn for out-form


document.getElementById('out-btn').addEventListener('click',function(){
    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('out-form').classList.remove('hidden')
   
})


//money add

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = document.getElementById('add-amount').value;
    const currentAmount = document.getElementById('current-amt').innerText;
    const pin = document.getElementById('pin').value;

    if(pin === '1234'){
        const newAmount =  Number(currentAmount) + Number(addMoney) ;
        document.getElementById('current-amt').innerText = newAmount;
        
    }
    else{
        alert('Invalid Pin Number')
    }
});



//cash out

document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const outAmount = document.getElementById('out-amount').value;
    const currentAmount = document.getElementById('current-amt').innerText;
    const pin = document.getElementById('pin-two').value
    if(pin === '1234'){
        const newAmount =  Number(currentAmount) - Number(outAmount) ;
        document.getElementById('current-amt').innerText = newAmount;
         
    }
    else{
        alert('Invalid pin')
    }
});