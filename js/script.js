//Assign button var
const assignButton=document.querySelector(".assign");
//Assign item var
const assignedItems=document.querySelector(".assigned-items");
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");


// invite button

addGuestButton.addEventListener("click", function () {
    const guest = guestInput.value;
    if(guest!==""){
        addToList(guest); 
       clearInput();
       updateGuestCount();

       }
    });
  // to clear out the box each time they want to add a new name///
  const clearInput=function(){
    guestInput.value="";

  };
  ///Refactor Code////
  const addToList=function(guest){
    const listItem=document.createElement("li");////Add an Event Listener & Create an 
    //Element.Append the listItem to guestList so the new list element appears at the 
   ////end of the list.//////
    listItem.innerText=guest;
   guestList.append(listItem);
  };
  ///Limit the Guest List to limit the number of people that can be added to the list.
  const updateGuestCount=function(){
    const guests=document.querySelectorAll(".guest-list li");
    guestCount.innerText=guests.length;
    if (guests.length===8){   //To prevent more than 8 guests added to the list//
        addGuestButton.classList.add("hide");
        guestInput.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");

    }
  };
  const assignItems=function(){
    const potluckItems=["Tandoori chicken","Garlic Naan","Cheese pizza","Ceaser Salad",
        "Potato salad","Chicken Alfredo","Crackers","Dips","Fruits","Caramel Flan",
        "Chocolate muffin","Raspberry Apple pie","Chicken Biryani","Orange soda",
        "Water","Diet coke","Sparkling water"];
    const allGuests=document.querySelectorAll(".guest-list li");
    for(let guest of allGuests){
        let randomPotluckIndex=Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex];
        let listItem=document.createElement("li");
      listItem.innerText=`${guest.innerText} is bringing ${randomPotluckItem}.` ;
       assignedItems.append(listItem);
       potluckItems.splice(randomPotluckIndex, 1);
    }
};

    assignButton.addEventListener("click",function(){
        assignItems();
        assignButton.disabled = true;


    });

    


    
  