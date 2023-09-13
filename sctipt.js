
    // function showFullText() {
    //     // Get the paragraph element
    //     var paragraph = document.querySelector("p");

    //     // Remove the "text-overflow" style to show the full text
    //     paragraph.style.overflow = "visible";
    //     paragraph.style.height = "auto";

    //     // Hide the "Read More" button
    //     var button = document.querySelector("button");
    //     button.style.display = "none";
    // }

    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
