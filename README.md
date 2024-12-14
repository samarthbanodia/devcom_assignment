
# Currency Converter

Hey Devcom samarth here, this is my assignment for the developer role :)

I used HTML, CSS and JS for this assignment which i majorly learned from a paid course and yt. I Have Not used any TailwindCSS or Bootstrap but i did use some ui components.

     | Note: there might a slight chance that the script doesnt work because the free api qouta finished.
## Features

- Used FlagsAPI for displaying country FlagsAPI
- Icon to Exchange the selected currencies
- Slider to adjust the number of significant figures after the decimal
- Aesthetic & responsive buttons and layout
- Displays the best intermediate currency for exchange in a terminal, In Bonus Question 

## 🔗 
[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/sam6rth/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samarth-banodia-6897bb317/)




## How the UI got together

---this is the **main.html** 
![image](https://github.com/user-attachments/assets/1976fa5d-67db-40ae-9cfa-4cedc88f264d)

I Used https://cssgradient.io/ for the gradient background.


The terminal was a component found on yt- https://github.com/JrDevCJ/css-tutorial/tree/main , i added the devcom image and aligned it.

About the main converter , i completely designed the layout from scartch and used the input and button components from uiverse.io for better looks.

I Also added a social media component from- https://codepen.io/nouribram/pen/WNQzoOd

Talking about the bonus questions Button , i customised the component i took from uiverse.io and linked it to **bonus.html**.


---this is the **bonus.html** ![image](https://github.com/user-attachments/assets/9e7a9c06-6a19-4444-b2f1-c122bfcb46ca)


I Majorly used the code from **index.html** and aligned stuff , also added a terminal to display the result (from uiverse.io)


## Lets get to the Backend

The code gets the value (currency code eg INR, USD, AED) from the select element and then find that loads that flag image and pushes to img under the "dropdown_flags" div

---
```
for(let i=0 ; i< dropdown_list.length; i++){


    for(const currency_code in List){
        let defualt;
        if(i=== 0) 
            defualt = currency_code == "INR" ? "selected" :"";
        else if (i ===1) defualt = currency_code == "USD" ? "selected" :"";

        let optionTag = `<option value="${currency_code}"${defualt}>${currency_code}</option>`;    //sets the take currency codes from List as options to select and put defualt as INR and USD
        dropdown_list[i].insertAdjacentHTML("beforeend", optionTag) 
    }
    dropdown_list[i].addEventListener("change" , e =>{
       
        Flag_Loader(e.target); // calling flag_load passing target elemtns as an arguement

    })
}
```
List is the dictionary containing Three and two letter country and CUrrency codes.

This snippet adds the codes from List as options in the select element on the page and sets INR and USD as defualt.


---


```
window.addEventListener("load", ()=> { 
//get deault when page loads!!
    FetchExchangeRate(); 
})

getExchangeRateButton.addEventListener("click", e=> {

    //e.preventDefault(); //prevernt default submitting from button
    FetchExchangeRate();
  
})

```
FetchExchangeRate() function gets json responce from api call to app.exchangerate-api.com/  for the "from" currency and parses
 thru the "conversion_rate" object in the json to look for the "to" currency


the above two Event listner calls the function when the page is loaded or when CONVERT Button is pressed

---

I added comments in backend explaing stuff there so take a look there as well






## Bonus Question

---the js for **bonus.html** is in the **bonus_script.js**


For this script i majorly copied code from the **script.js** to which i added the logic for find the best possible intermediate in currecny conversion.
![image](https://github.com/user-attachments/assets/befb4bcc-36e3-4361-861e-873842ec4f22)


i added two variables max_value and max_currency which stores the value of the maximum exchanged amount for "1" "from" currency .

---
The logic begin is simple , i ran a for loop for every currency code then converted =1 amount of "from" currency to the intermeditate currency then i converted that amount to "to" currency(temp_to_to_amount).

i then made a if loop that lets max_value take the value of temp_to_to_amount if its greater than current max_value so at the end of the for loop the max_value takes the maximum value that could be there .

---
```
console.log(`Final max value: ${max_value - Total_Rate_display}, Currency: ${max_currency}`);
        const Rate_text_display = document.querySelector(".terminal p"); // showing the result in the terminal component 
        Rate_text_display.innerText = `-- Max exchange value with: ${max_currency} as Intermidetate
        
         -- Differnce from direct exchange: ${max_value - Total_Rate_display }
        `;
```

the above snippet displays the differnce in the amount from intermediate exchange and direct exchange onto the terminal element!

## Remarks

Had alot of fun learning,experimenting with css and inspecting elements on the browser; Js took some time but i got the hang of it and it worked out after several tries (finished free api qouta for 7 diff accounts :`)   ) 
