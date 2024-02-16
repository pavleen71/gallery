const arr = [
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];
var prev = document.getElementById("previous");
var next = document.getElementById("next");
var img = document.getElementById("img");
var current=0;
img.src = arr[current]; // Set initial image
//when nextbutton is pressed
next.onclick = () => {
      current++;
      if(current == arr.length){
        current=0;

      }
      img.src=arr[current];
 }
//when previous button is pressed
prev.onclick=()=>{
    if(current == 0){
        current=arr.length;

    }
    current--;
    img.src=arr[current];
}