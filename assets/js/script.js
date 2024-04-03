function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();




//   window.addEventListener('scroll', function() {
//     var scrollPosition = window.scrollY;
//     var element = document.getElementById('scroll-change');

//     // Change text color based on scroll position
//     if (scrollPosition > 100) { // Change 100 to your desired scroll position
//         element.style.color = 'red'; // Change to the desired color
//     } else {
//         element.style.color = 'black'; // Change to the default color
//     }
// });



$(document).ready(function() {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop){ // Scroll down
            $('.scroll-blur').removeClass('blur'); // Remove blur class
        } else { // Scroll up
            $('.scroll-blur').addClass('blur'); // Add blur class
        }
        lastScrollTop = st;
    });
});















