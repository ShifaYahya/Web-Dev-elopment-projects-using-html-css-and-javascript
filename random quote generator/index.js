const btnEl = document.getElementById("btn");
const apiUrl = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote"); 
const authorEl = document.getElementById("author");             //added slash random explicitly


async function getQuote(){
    try {
    btnEl.innerText = "Loading.." ;
    btnEl.disabled = true;     
    quoteEl.innerText = "Updating...";
    authorEl.innerText = "Updating..."; 
          //to make users know site is working
    const response = await fetch(apiUrl);
    const data = await response.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
   
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~" + quoteAuthor;
    btnEl.innerText = "Get A quote" ; //order or disabling etc matters
    btnEl.disabled = false; 
    
        
    } catch (error) {
        quoteEl.innerText = "An error happened, Try again later";
        authorEl.innerText = "ERROR";
        btnEl.ariaDisabled = true;


    }
    
}

//if you call get quote func here there will be default quote AT START AND U CAN CHANGE
btnEl.addEventListener("click", getQuote);