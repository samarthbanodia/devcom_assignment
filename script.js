let List = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}


const dropdown_list = document.querySelectorAll(".dropdown_flags select");

const getExchangeRateButton = document.querySelector(".convert_button ");   //convert  button


for(let i=0 ; i< dropdown_list.length; i++){


    for(const currency_code in List){
        let defualt;
        if(i=== 0) 
            defualt = currency_code == "INR" ? "selected" :"";
        else if (i ===1) defualt = currency_code == "USD" ? "selected" :"";

        let optionTag = `<option value="${currency_code}"${defualt}>${currency_code}</option>`;    
        dropdown_list[i].insertAdjacentHTML("beforeend", optionTag) 
    }
    dropdown_list[i].addEventListener("change" , e =>{
       
        Flag_Loader(e.target); // calling flag_load passing target ekemtns as an arg

    })
}



window.addEventListener("load", ()=> { 

//get deault when page loads!!
    FetchExchangeRate();
  
})


getExchangeRateButton.addEventListener("click", e=> {

    //e.preventDefault(); //prevernt default submitting from button
    FetchExchangeRate();
  
})

 const from_dropdown = document.querySelector(".from select");
 const to_dropdown = document.querySelector(".to select");
 const REVERSE_SELECTION = document.querySelector(".icon ");

 REVERSE_SELECTION.addEventListener("click" ,()=> {
     let temp_swap = from_dropdown.value;
     from_dropdown.value = to_dropdown.value;
     to_dropdown.value = temp_swap;
     Flag_Loader(from_dropdown);   //updating flags!!!
     Flag_Loader(to_dropdown);
     FetchExchangeRate();
     

 } )



function FetchExchangeRate(){

const amount = document.querySelector(".enter_amount input");
 let amountValue = amount.value;
 if(amountValue == "0" || amountValue == ""|| amountValue == "00"|| amountValue == "000" || amountValue == "0000" || amountValue == "00000"){ //puts one if zero or no values
    amountValue = 1;
    amount.value = "1";

 

 }

  let API_URL = `https://v6.exchangerate-api.com/v6/7882ad6420148aa9e7001eae/latest/${from_dropdown.value}`;
  
  fetch(API_URL).then(response =>  response.json().then(result => {

      let exchangeRate = result.conversion_rates[to_dropdown.value]; //getting user selectef "to" currency rate from object
     // console.log(exchangeRate);

      const Accuracy_slider = document.querySelector(".slider input"); //slider for accurac
      const Slider_value = parseInt(Accuracy_slider.value/10);
      let Total_Rate_display  = (amountValue*exchangeRate).toFixed(Slider_value); //u can set accuract of conversion
      //console.log(Total_Rate_display);
     // console.log(parseInt(Accuracy_slider.value/10));
 
      

      const Rate_text_display = document.querySelector(".output_rate p");
      if(isNaN(amountValue)){
        Rate_text_display.innerText = `"${amountValue}" aint no number bro`;
      }
      else { Rate_text_display.innerText = `${amountValue} ${from_dropdown.value} = ${Total_Rate_display} ${to_dropdown.value}`;}
  }));
  
//fecthing api responsces and return it with parsing intro json ad in abonther then method recieving that obj;
}



function Flag_Loader(element){ 

    for(const currency_code in List){
        
        if(currency_code == element.value){
            let Flag_image = element.parentElement.querySelector(".dropdown_flags img");
            Flag_image.src = `https://flagsapi.com/${List[currency_code]}/shiny/64.png`;


    }


}
}