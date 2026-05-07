//1) Catfact Ninja
async function catFacts() {
  const r = await fetch("https://catfact.ninja/facts");
  const j = await r.json();
  console.log(j.data.filter(f => f.length < 50).map(f => f.fact));
}
//catFacts();

//2) PokeAPI
async function pokemon() {
  const r = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const j = await r.json();
  console.log(j.results.filter(p => p.name.startsWith("b")).map(p => p.name));
}
// pokemon();

//3) Open Notify
async function spacePeople() {
  const r = await fetch("http://api.open-notify.org/astros.json");
  const j = await r.json();
  console.log(j.people.map(p => p.name));
}
//spacePeople();

//4) ZenQuotes
async function quotes() {
  const r = await fetch("https://zenquotes.io/api/quotes");
  const j = await r.json();
  console.log(j.filter(q => q.q.length < 100).map(q => q.q));
}
//quotes();

//5) Hipolabs Universities API
async function universities() {
  const r = await fetch("http://universities.hipolabs.com/search?country=India");
  const j = await r.json();
  console.log(j.filter(u => u.name.includes("Technology")).map(u => u.name));
}
//universities();

//6) Dog API
async function dogFacts() {
  const r = await fetch("https://dogapi.dog/api/v2/facts");
  const j = await r.json();
  console.log(j.data.map(d => d.attributes.body));
}
//dogFacts();

//7) CoinGecko
async function crypto() {
  const r = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
  const j = await r.json();
  console.log(j.filter(c => c.current_price > 1000).map(c => c.name));
}
//crypto();

// 8) Random User Generator
async function randomUsers() {
  const r = await fetch("https://randomuser.me/api/?results=10");
  const j = await r.json();
  console.log(j.results.filter(u => u.gender === "female").map(u => u.name.first));
}
//randomUsers();

//9) REST Countries
async function countries() {
  const r = await fetch("https://restcountries.com/v3.1/all?fields=name,population");
  const j = await r.json();
  console.log(j.filter(c => c.population > 100000000).map(c => c.name.common));
}
//countries();

//10) JSONPlaceholder
async function posts() {
  const r = await fetch("https://jsonplaceholder.typicode.com/posts");
  const j = await r.json();
  console.log(j.filter(p => p.userId === 1).map(p => p.title));
}
//posts();
