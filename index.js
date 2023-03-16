document.getElementById('amount').addEventListener("input",(eventInput) => {
    document.getElementById('currency').addEventListener('change',(event) => {
        if(event.target.value == "kzt"){
            document.getElementById('amount-kzt').value = "-";
            document.getElementById('amount-usd').value = (eventInput.target.value/429).toFixed(2);
            document.getElementById('amount-eur').value = (eventInput.target.value/509).toFixed(2);
        }else if(event.target.value == "usd"){
            document.getElementById('amount-kzt').value = eventInput.target.value*427;
            document.getElementById('amount-usd').value = "-";
            document.getElementById('amount-eur').value = eventInput.target.value*0.842;
        }else{
            document.getElementById('amount-kzt').value = eventInput.target.value*507;
            document.getElementById('amount-usd').value = eventInput.target.value*1.176;
            document.getElementById('amount-eur').value = "-";
        }
    });
});