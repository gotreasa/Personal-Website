//Populate overlay
      // page content object
      function content( h2, p, ul, a){
        this.h2 = h2;
        this.p = p;
        this.ul = ul;
        this.a = a

      }

      var nasaObj = new content( "Nasa Picture of the Day App", "This App was developed as a team project. Its aim was to access the Nasa Astronomy Picture of the Day API and display the 'picture of the day' and other data retrieved from the service. Technologies used are as follows:", ['AngularJS','Ionic','CSS3', 'JavaScript', 'HTML5', 'AJAX' ], ['apks/nasaPOD.apk', 'about.html']);
      var reminderObj = new content( "To-do/Reminder App", "This App allows user to store persistent text reminders locally and in the cloud with an update and delete feature. Technologies used are as follows: ",['AngularJS','Ionic','JavaScript','HTML5','CSS3', 'AJAX'], ['apks/reminderApp.apk','about.html']);
      var shoptObj = new content ("Shopping Tracker App", " This App allows user to track shopping items from a pre-determined list, add/remove them from cart and update prices when necessary. Technologies used are as follows:", ['AngularJS','Ionic','JavaScript','CSS3', 'HTML5'], ['apks/shoppingCalc.apk','https://github.com/Mathemagiks/Shopping-Tracker.git']);
      var photoObj = new content ("Photo Sender App", " This App was developed to allow users to email photos taken by device with both title and description features and option to store persistently in gallery. Technologies:", ['AngularJS','Ionic','JavaScript','HTML5','CSS3'], ['apks/PhotoSenderManual.pdf','https://github.com/Mathemagiks/cpmad.git']);

      var artWebObj = new content( " Artist Website","This website was created to showcase artists work and skills in following technologies used:",['Bootstrap','HTML5', 'CSS3', 'JavaScript', 'jQuery'],['web_app_one/index.html','https://github.com/Mathemagiks/Artist-Website.git']);
      var artWebAppObj = new content("Artist Website/Webstore", "This website was created to showcase artists work and present webstore that can take in mock credit card data, implement registration/login/logout using the following technologies:", ['Bootstrap','HTML5', 'CSS3', 'JavaScript', 'jQuery', 'PHP', 'MySQL', 'AJAX'], ['web_app_two/index.php','https://github.com/Mathemagiks/Artist-Website-Webstore.git']);

       
      
      function injectContent(objectName){

        $('h2.cpmad').html(objectName.h2);
        console.log(objectName.h2);
        $('h2.web').html(objectName.h2);
        
        $('p.cpmad').html(objectName.p);
        $('p.web').html(objectName.p);
        $('ul.cpmad').empty();
        $.each(objectName.ul, function(index, value){
            var $li = $("<li/>").html(value).appendTo('ul.cpmad');
        });
        $('ul.web').empty();

        $.each(objectName.ul, function(index, value){
            var $li = $("<li/>").html(value).appendTo('ul.web');
        });
      
        $('a.cpmad').attr( "href", objectName.a[0]);
        $('a.web').attr( "href", objectName.a[0]);

        $('a.cpmad.one').attr( "href", objectName.a[1]);
        $('a.web.one').attr( "href", objectName.a[1]);



        console.log(objectName.a[0]);
        console.log(objectName.a[1]);


        // ...

      }

    $(document).ready(function() {
        $("p.lege").click(function() {
        var clickedElem = $(this).attr('id');
        console.log(this);
        switch(clickedElem) {
            case "nasa": injectContent(nasaObj);
            console.log(nasaObj); break;

          case "rem": injectContent(reminderObj);
          console.log(reminderObj); break; 
          case "shopt" : injectContent(shoptObj); break;
          case "photo" : injectContent(photoObj); break;
        }
      

      });
    });
    $(document).ready(function(){
        $("p.college").click(function(){
        var clickedElem =$(this).attr('id');
        switch(clickedElem){
            case "aw" : injectContent(artWebObj); break;
            case "aww" : injectContent(artWebAppObj); break;

        }
       });
    });

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    
}
function closeNav2() {
    document.getElementById("myNav2").style.width = "0%";
  

}
//side nav
   $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                // $('#to-top').css({position:'fixed', display:'block'});
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });
  