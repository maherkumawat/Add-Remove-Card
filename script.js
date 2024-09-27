var h = document.querySelector("h5");
var btn = document.querySelector("#add");

var check = 0

btn.addEventListener("click", function(){
    if(check == 0){
    h.innerHTML = "friends"
    h.style.color = "Green"
    btn.innerHTML = "Remove Friends"
    check = 1
    }
    else{
        h.innerHTML = "Stranger"
        h.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0

    }
   
});
