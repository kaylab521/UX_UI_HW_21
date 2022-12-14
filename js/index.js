console.log("your index.js file is loaded correctly");
$("button").on("click", function(){
    console.log("you clicked a button");
    }
);

/*nav tab hovers*/
$("#tabs").on("hover", function() {
    console.log("you hovered over the nav bar"); 
  } 
  );
$("#work").hover(
      function () {
          $("#work").css("fontWeight", "bold");
          $("#line1").fadeIn();
      },
      function () {
          $("#work").css("fontWeight", "normal");
          $("#line1").fadeOut();
      }
);
$("#about").hover(
      function () {
          $("#about").css("fontWeight", "bold");
          $("#line2").fadeIn();
      },
      function () {
          $("#about").css("fontWeight", "normal");
          $("#line2").fadeOut();
      } 
); 
$("#contact").hover(
      function () {
          $("#contact").css("fontWeight", "bold");
          $("#line3").fadeIn();
      },
      function () {
          $("#contact").css("fontWeight", "normal");
          $("#line3").fadeOut();
      } 
);
$("#resume").hover(
      function () {
          $("#resume").css("fontWeight", "bold");
          $("#line4").fadeIn();
      },
      function () {
          $("#resume").css("fontWeight", "normal");
          $("#line4").fadeOut();
      }
);
/* nav scroll*/ 
$("#tabs").on("click", function (event){
    if(this.hash !=='') {
        e.preventDefault ();
        const hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
 });


/* button interactions*/
$("button").on("hover", function() {
    console.log("you hovered over a button");
    }    
);
$("#downloadResume").hover(
    function () {
        $("#downloadResume").css("fontWeight", "bold");
        $("#downloadResume").css("background-color", "#f322bb");
    },
    function () {
        $("#downloadResume").css("fontWeight", "normal");
        $("#downloadResume").css("background-color", "#3CF2F3");
});
$("#button1").hover(
    function() {
        $("#button1").css("fontWeight", "bold");
        $("#button1").css("background-color", "#f322bb");
    },
    function () {
        $("#button1").css("fontWeight", "normal");
        $("#button1").css("background-color", "#3CF2F3");
}
);
$("#button2").hover(
    function() {
        $("#button2").css("fontWeight", "bold");
        $("#button2").css("background-color", "#f322bb");
    },
    function () {
        $("#button2").css("fontWeight", "normal");
        $("#button2").css("background-color", "#3CF2F3");
}
);
$("#button3").hover(
    function() {
        $("#button3").css("fontWeight", "bold");
        $("#button3").css("background-color", "#f322bb");
    },
    function () {
        $("#button3").css("fontWeight", "normal");
        $("#button3").css("background-color", "#3cf2f3"); 
}
);
$("#allProjects").hover (
    function (){
        $("#allProjects").css("fontWeight", "bold");
        $("#allProjects").css("color", "#f322bb");
    },
    function (){
        $("#allProjects").css("fontWeight", "normal");
        $("#allProjects").css("color", "#33f2f3");
    }
);

/*footer tab hovers*/ 
$("#footerNav").on("hover", function() {
    console.log("you hovered over the footer nav"); 
  } 
);
$("#work2").hover(
    function () {
        $("#work2").css("fontWeight", "bold");
        $("#line5").fadeIn();
    },
    function () {
        $("#work2").css("fontWeight", "normal");
        $("#line5").fadeOut();
    }
);
$("#about2").hover(
    function () {
        $("#about2").css("fontWeight", "bold");
        $("#line6").fadeIn();
    },
    function () {
        $("#about2").css("fontWeight", "normal");
        $("#line6").fadeOut();
    } 
); 
$("#contact2").hover(
    function () {
        $("#contact2").css("fontWeight", "bold");
        $("#line7").fadeIn();
    },
    function () {
        $("#contact2").css("fontWeight", "normal");
        $("#line7").fadeOut();
    } 
);
$("#resume2").hover(
    function () {
        $("#resume2").css("fontWeight", "bold");
        $("#line8").fadeIn();
    },
    function () {
        $("#resume2").css("fontWeight", "normal");
        $("#line8").fadeOut();
    }
);
/* nav scroll*/ 
$("#footerNav").on("click", function (event){
    if(this.hash !=='') {
        e.preventDefault ();
        const hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
 });
 






        









