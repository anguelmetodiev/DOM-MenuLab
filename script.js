// Task 1.0
// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'
mainEl.style.background = "var(--main-bg)"

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr")

/* 
=================================================================================================
                                    Task 1 - Completed 
=================================================================================================
*/

// Task 2.0 
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("#top-menu")

// Task 2.1
// Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%"

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.background = "var(--top-menu-bg)"

// Task 2.3
// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around")

/* 
=================================================================================================
                                    Task 2 - Completed 
=================================================================================================
*/

// Task 3.0
// Copy the following data structure to the top of script.js:

// Menu data structure
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

// Task 5.0 
// Update the menuLinks array in script.js to this:
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// Task 3.1
// Iterate over the entire menuLinks array and for each "link" object:

// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

// Using For of
// let i = 0
// for (let link of menuLinks) {
//     link = document.createElement("a")

//     let href = menuLinks[i].href
//     let text = menuLinks[i].text

//     link.setAttribute("href", href)
//     link.textContent = text

//     topMenuEl.append(link)
//     console.log(link)
//     i++
// }

// Using For Loop
// const menuP = [];
// for (i=0; i< menuLinks.length; i++) {
//   menuP[i] = document.createElement("a")
//   menuP[i].setAttribute("href", menuLinks[i].href)
//   menuP[i].textContent = menuLinks[i].text
//   topMenuEl.append(menuP[i])
// }

// Using forEach
menuLinks.forEach((link)=>{
  const a = document.createElement("a")
  a.setAttribute('href',link.href)
  a.textContent = link.text
  topMenuEl.append(a)
})

/* 
=================================================================================================
                                    Task 3 - Completed 
=================================================================================================
*/

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
subMenuEl = document.getElementById("sub-menu");

// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = '100%';  

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add('flex-around');

// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0.
subMenuEl.style.top = '0'; 

/* 
=================================================================================================
                                    Task 4 - Completed 
=================================================================================================
*/

// Task 5.0
// Update the menuLinks array in script.js - Line 59

// Task 5.1
// Select and cache the all of the <a> elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');
// Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false; 



// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', handleClick); 


function handleClick(evt) {                             // Task 5.2b
    evt.preventDefault();                               // Task 5.2c
// The first line of code of the event listener function should call the event object's preventDefault()method.
    let clickedLink = evt.target;
    if(clickedLink.tagName !== "A") {                   // Task 5.2d
        return;
// The second line of code function should immediately return if the element clicked was not an <a> element.
    } else {
        console.log(clickedLink);                       // Task 5.2e
// console.log the content of the <a> to verify the handler is working.    

        if(clickedLink.classList.contains('active')) {  
// Next in the event listener, if the clicked <a> link has a class of active:
            clickedLink.classList.remove('active');     // Task 5.3.1
// Remove the activeclass from the clicked <a>element
            showingSubMenu = false;  
// Set the showingSubMenuto false.                   // Task 5.3.2
            subMenuEl.style.top = '0';                  // Task 5.3.3
// Set the CSS topproperty of subMenuEl to 0.
            return; 
// return to exit the handler.                                    // Task 5.3.4
        }

        topMenuLinks.forEach(function(aLink) {          // Task 5.4
            aLink.classList.remove('active')
        });
// Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

        clickedLink.classList.add('active');            // Task 5.5

// Task 5.6 Set showingSubMenu to true if the clicked <a>element's "link" object within 
// menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), 
// otherwise, set it to false.
    let text = evt.target.textContent  

    let currentLink = {}
    for (let i = 0; i < menuLinks.length; i++) {
      if (text === menuLinks[i].text) {
        showingSubMenu = menuLinks[i].hasOwnProperty("subLinks") 
        currentLink = menuLinks[i]
      }
    } 

// Task 5.7 Call buildSubMenu function to change the CSS style property. 
      if (showingSubMenu === true) {
        buildSubMenu()
        subMenuEl.style.top = "100%"
      } else {
        subMenuEl.style.top = "0"
      }

// Task 5.8 Code the buildSubMenu function 
    function buildSubMenu () {
      subMenuEl.textContent = ""; // Clears the contents of subMenuEl
      currentLink.subLinks.forEach((link) => {  // Iterates over the subLinks array passed as an argument; and for each "link" object:
        newLink = document.createElement("a")
        newLink.setAttribute("href", link.href)
        newLink.textContent = link.text
        subMenuEl.append(newLink)
        }
      )
    }

        // Task 6.4 If the ABOUT link is clicked, an <h1>about</h1> should be displayed.
        if (evt.target.text === "about") {
          mainEl.innerHTML = "<h1>about</h1>"
        }

  }
}

// Task 6.0 - Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault()

  if (evt.target.tagName !== "A") {
    return
  } else {
      console.log(evt.target)
  }

  // Task 6.1 - Set showing SubMenu to false. Set the CSS to pproperty of subMenuEl to 0.
  showingSubMenu = false
  subMenuEl.style.top = "0"

  // Task 6.2 - Remove the class name of activefrom each <a> element in topMenuLinks - whether the active class exists or not.
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active")
  }

  // Task 6.3 - Update the contents of mainEl to the contents of the <a>element, within an <h1>, clicked within subMenuEl.
  mainEl.innerHTML = `<h1>${evt.target.text}</h1>`
 } 
) 

/* 
=================================================================================================
                                    Task 5 & 6 - Completed 
=================================================================================================
*/