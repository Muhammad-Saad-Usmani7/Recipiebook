document.addEventListener("DOMContentLoaded", async function () {
       try {
           const response = await fetch("recipes.json");
           const recepi = await response.json();
           console.log(recepi);
   
           const search = document.getElementById("o-1");
           const send = document.getElementById("o-2");
           const unorderlist = document.getElementById("o-3");
   
           const sect2id = document.getElementById("llll");
           const link = document.getElementById("o-4");
           const Author = document.getElementById("o-5");
           const ingred = document.getElementById("o-7");
           const info = document.getElementById("o-6");
   
           function listing(filtering) {
               unorderlist.innerHTML = "";
               filtering.forEach(function (result) {
                   const listelm = document.createElement("li");
                   listelm.className = "lii";
   
                   const listelm2 = document.createElement("div");
                   listelm2.className = "lsting";
                   listelm2.innerText = result.title.toUpperCase() + ":";
                   listelm2.style.cssText = 'font-size: 15px; font-weight: bold;';
   
                   const listelm3 = document.createElement("div");
                   listelm3.className = "lsting";
                   listelm3.innerText = result.description + ".";
   
                   listelm.appendChild(listelm2);
                   listelm.appendChild(listelm3);
                   unorderlist.appendChild(listelm);
   
                   listelm.addEventListener("click", () => {
                       sect2id.style.cssText = "visibility: visible;";
   
                       link.innerHTML = "";
                       Author.innerHTML = "";
                       ingred.innerHTML = "";
                       info.innerHTML = "";
                       ingred.innerHTML = ` <b style="margin-left: -40px;">INGREDIENTS:</b> `;
                       info.innerHTML = ` <b>INSTRUCTIONS:</b> `;
   
                       link.innerHTML = "<p><b>URL: </b><br>" + result.url + "</p>";
                       Author.innerHTML = "<p><b>Author Name: </b><br>" + result.author + "</p>";
   
                       result.ingredients.forEach(function (ing) {
                           let ul_list = document.createElement("li");
                           ul_list.appendChild(document.createTextNode(ing));
                           ingred.appendChild(ul_list);
                       });
   
                       info.innerHTML += `<p>${result.instructions.join("")}</p>`;
                   });
               });
           }
   
           if (send) {
               send.addEventListener("click", () => {
                   const query = search.value;
                   const filtering = recepi.filter(function (recepi) {
                       return recepi.title.toLowerCase().includes(query.toLowerCase()) ||
                           recepi.ingredients.join("").toLowerCase().includes(query.toLowerCase());
                   });
   
                   if (query !== "") {
                       disp();
                       listing(filtering);
                   } else {
                       unorderlist.innerHTML = "";
                   }
               });
           } else {
               console.error('Element with id "o-2" not found');
           }
   
       } catch (error) {
           console.error("Error fetching the recipes:", error);
       }
   });
   
   function disp() {
       const A = document.getElementById("ll");
       if (A) {
           A.className = "cs";
           let animatio = document.getElementById("UpandDown");
           if (animatio) {
               animatio.className = "animessss";
           }
       }
   }
   
   function disp2() {
       const A = document.getElementById("ll");
       if (A) {
           A.className = "cs2";
           let animatio = document.getElementById("UpandDown");
           if (animatio) {
               animatio.className = "animesss";
           }
       }
   }
   