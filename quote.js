
let quotes=[
    "Nature wants us to live within its power and majestic",
    "You may think you cured me Broken heart has no lifetime recovery",
    'In search of holy fountain a fiery Wildsfire flared me One cataract stopped me at the midstream and  drizzled tiny waterdrops on me as a free fall of sympathies But i asked them to stop healing this aches in heart and not to touch this burning soul anymore',
    'Whats the point in if you still prefer to remains with your wounded rough past Your and others healings are YOURS responsibility Remember You are born to heal the world',
    'You can forget some days But the days when poverty ceases you from growing You will not',
    'Live as a Lighthouse in someones NightskY'
];



// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
//create an index of a random number 
//convert it into between 0 to length of quotes[]
let index=Math.floor(Math.random()*quotes.length);

//display the quote of that index
let div=document.querySelector('#quote');
let quote=`<div class="card">
<img src="icons/favicon.png">
<p>${quotes[index]}</p>
<img src="icons/favicon.png">
</div>
`;
div.innerHTML=quote;

}
