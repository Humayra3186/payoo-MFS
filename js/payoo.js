//login button event

document.getElementById('login').addEventListener('click',function(event){
    event.preventDefault();

    const number = document.getElementById('numb').value;
    const pin = document.getElementById('pin').value;
    if(number === '01618563186' && pin === '1234'){
        window.location.href = './home.html'
    }

    else{
        alert('Invalid Number or Pin')
    }
})


