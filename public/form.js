 //$(document).ready(function(){
    //$("#s1").click(function() {
       // alert("hi alisha");
        
        
   // });
// });

//$(document).ready(function(){
   // $("#s1").on({
         // click:function(event) {
             // event.preventDefault();
            // }


          //mouseleave:function() {
          //  var x= $(".a1").val();
           //          $("#p1").text(x);
                
       //  }
     //   });
// });
//$(document).ready(function(){
   // $("#s1").click(function(event){
       // event.preventDefault();
        
      // var a= $("#a1").val();
       // var b= $("#a2").val();
     //   var c= $("#a3").val();
    //     var d= $("#a4").val();
     //    var e= $("#a5").val();
    //     var f= $("#a6").val();
    //     var g= $("#a7").val();
    //     $("#p1").text(a);
    //     $("#p2").text(b);
    //     $("#p3").text(c);
    //    $("#p4").text(d);
    //    $("#p5").text(e);
    //    $("#p6").text(f);
    //    $("#p7").text(g);
                

      //  console.log("#p1");
        
   // });
//});

$(document).ready(function(){
    
$("#s1").click(function (event) {
   
    event.preventDefault();
    var firstN=$("input[name='fName']").val();
    var lastN=$("input[name='lName']").val();
    
    $.ajax( {
        type:"POST",
        url:"/users",
        
        data:{firstN,lastN},
        
        success: function (data) {
            console.log(data);
         // document.getElementById("div1").innerHTMl=data;
          //  $("#div1").text(data);
            var store="";
            var i;
            for(i in data) {
          store=store+data[i];
            }
            $("#div1").text(store);
            
            

                
            
        }
    });
});
});

    


    