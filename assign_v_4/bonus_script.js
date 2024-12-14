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

let max_value = 0;
let max_currency ;
//let Dict_for_max = {};

const dropdown_list = document.querySelectorAll(".dropdown_flags select");// dropdown select for currency

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

getExchangeRateButton.addEventListener("click", e=> { //button

    FetchExchangeRate();
  
})

 const from_dropdown = document.querySelector(".from select");
 const to_dropdown = document.querySelector(".to select");



function FetchExchangeRate(){

 let amountValue = 1; // for calculating the differnec in intermediate exchange and direct exchange


  let API_URL = `https://v6.exchangerate-api.com/v6/4dc649a571d676489d6162a4/latest/${from_dropdown.value}`;
  
  fetch(API_URL).then(response =>  response.json().then(result => {//fetchs the json data from api call and makes promise

      let exchangeRate = result.conversion_rates[to_dropdown.value]; //getting user selectef "to" currency rate from object
    // console.log(exchangeRate);
     
      let Total_Rate_display  = (amountValue*exchangeRate).toFixed(8); //Direct exchange amount ; u can set accuract of conversion
      //console.log(Total_Rate_display);
     // console.log(parseInt(Accuracy_slider.value/10));
 
     
     
     for(const currency_code in List){ // for loop to get differnce in exhance amount from direct exchange of every currecncy in List!!!!

          // console.log(typeof(from_dropdown.value));    

            let API_URL_temp = `https://v6.exchangerate-api.com/v6/4dc649a571d676489d6162a4/latest/${currency_code}`; 
            fetch(API_URL_temp).then(response =>  response.json().then(result_temp => { //fetchs the json data from api call and makes promise

                if (result_temp.result === "error") {
                    console.error(`Error fetching data for ${currency_code}`);
                    return; // Skip to the next iteration
                }

                let temp1_exchange_rate = result.conversion_rates[currency_code];
                let from_to_temp_amount = parseFloat((1 * temp1_exchange_rate).toFixed(4)); // "from" to intermedita ; idk why but after putting parseFloat it worked :33
    
                let temp2_exchange_rate = result_temp.conversion_rates[to_dropdown.value];
                let temp_to_to_amount = parseFloat((from_to_temp_amount * temp2_exchange_rate).toFixed(8)); // intermediate to "to"; with 8 significant digits after decimal

               if(temp_to_to_amount > max_value){ //finding the max amount from intermediate exchange and putting it in max_value and max_currency
              //  console.log("dasas");
                max_value = temp_to_to_amount;
                max_currency = currency_code;

               }

 
                
//Dict_for_differnece_in_exchange[`${currency_code}`] = Number((temp_to_to_amount - Total_Rate_display).toFixed(8));
    

            }));
 
     }
     //console.log(Object.values(Dict_for_max));

    // sortDictByValue(Dict_for_differnece_in_exchange);
     // const Rate_text_display = document.querySelector(".output_rate p");
     setTimeout(() => { // ill be honest , getting final_max outside the above if statement didnt work and always said undefined , but i told this problem to chatgpt and i it gave the below block of code which seems to work peerfectly
        //console.log(`Final Dict_for_max:`, Dict_for_max); 
        console.log(`Final max value: ${max_value - Total_Rate_display}, Currency: ${max_currency}`);
        const Rate_text_display = document.querySelector(".terminal p"); // showing the result in the terminal component 
        Rate_text_display.innerText = `-- Max exchange value with: ${max_currency} as Intermidetate
        
         -- Differnce from direct exchange: ${max_value - Total_Rate_display }
        `;
    }, 500);

  }));
  

  


  // Adjust timeout based on expected completion time
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