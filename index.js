
const QuoteContainer= document.getElementById("qoute-container")
const Quote= document.getElementById("quote")
const Author= document.getElementById("author")
const tweetBtn= document.getElementById('tweet')
const newQuoteBtn= document.getElementById("new-quote")
const loaderBtn= document.getElementById("loader")






function loading(){
    loaderBtn.hidden= false;
    QuoteContainer.hidden= true;
}

function complete(){
    if(!loaderBtn.hidden){
        QuoteContainer.hidden=false;
        loaderBtn.hidden=true

    }
}



let apiQuotes = [];
// show new qoute
function newQuote(){
    
    
    const quote= apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
    if (!quote.author){
        Author.textContent = "unknown"

    }else{
        Author.textContent = quote.author;
    }

    if(quote.text.length >100){
        Quote.classList.add("quote-long")
    }else{
        Quote.classList.remove("quote-long")
    }
    
    
    Quote.textContent= quote.text;
    
    
    
    

}

// Get Qoutes From API

async function getQuotes(){
    loading()
    
    const apiUrl= "https://type.fit/api/quotes"
    try {
        const response= await fetch (apiUrl);
        apiQuotes= await response.json();
        
        
        
        
        newQuote();
        complete()
    } catch (error) {
        // find the error
        getQuotes();
        
        
    }

}

newQuoteBtn.addEventListener("click",newQuote)

 
getQuotes();