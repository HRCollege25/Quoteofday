const api_url="https://quotes-api-self.vercel.app/quote";
const quoteElement=document.getElementById("quote");
// console.log(quoteElement);
    const authorElement=document.getElementById("author");
// console.log(authorElement);
async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    console.log(data.quote);
    console.log(data.author);
    if (quoteElement && authorElement){ 
        
        // quoteElement.innerHTML = data.quote; 
        // authorElement.innerHTML = data.author; 
        quoteElement.innerHTML = data.quote ? data.quote : 'No quote found'; 
        authorElement.innerHTML = data.author ? data.author : 'Unknown author'}
    else { 
    console.log('Elements with ID "quote" or "author" not found in the DOM.');
    }
    // quote.innerHTML=data.quote;
    // author.innerHTML=data.author;
}
getquote(api_url);
function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quoteElement.innerHTML+"----by "+author.innerHTML,"Tweet Window","width=600,height=300")
}