function highlight() {
    //Write your code here
 const boldElements = document.querySelectorAll('strong');
    
    // Change the color of each <strong> element to green
    boldElements.forEach(function(element) {
        element.style.color = 'rgb(0, 128, 0)';
    });


}


function return_normal() {
    //Write your code here
const boldElements = document.querySelectorAll('strong');
    
    // Change the color of each <strong> element back to black
    boldElements.forEach(function(element) {
        element.style.color = 'rgb(0, 0, 0)';
    });
    
}
