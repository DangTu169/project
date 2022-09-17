var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 2,
    perMove: 1,
  } );
  
  splide.mount();

  $(document).ready(function(){
    $('.img').on('click',function(){
      var src = $(this).children().attr('src');
      $('.zoom-content').attr('src',src);
    })

    $('.btnSize').on('click',function(){
      $('.table-size').show();
    })
    $('.close').on('click',function(){
      $('.table-size').hide();
    })
  })

  function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.borderBottom = "none";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    elmnt.style.borderBottom = "1px solid black";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();