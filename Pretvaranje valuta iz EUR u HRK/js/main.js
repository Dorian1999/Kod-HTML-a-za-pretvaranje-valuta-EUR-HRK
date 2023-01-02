function convertCurrency() {
    // Dohvati iznos i valutu
    var amount = document.getElementById("amount").value;
    var currency = document.getElementById("currency").value;
    
    // Pretvori valutu
    var result;
    if (currency == "eur") {
      result = amount * 7.53450;
    } else if (currency == "hrk") {
      result = amount / 7.53450;
    }
    
    // Prikaži rezultat
    document.getElementById("result").innerHTML = result + " " + currency.toUpperCase();
  }