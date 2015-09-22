
        $(document).ready(function(){ 
            
            // alert("a");
            $("#search").change(function() {
                      // alert("a");
                var product=$("#search").val();
                          // alert(product);
                              $.ajax( {
                              type:"POST",
                              url:"/products",
                              data:{product},
                              success: function (data) {
                              }
                              });
                              
            });
               $("#b1").click(function() {
                 //  alert("a");
                   
                 var item=$("#input1").val();
                 var description=$("#input2").val();
                 var price=$("#input3").val();
                   
                   if(typeof item==="string" && typeof description==="string" && typeof price=== "string") {
                    //  alert("L");
                      // return(true);
                       $("#input1").val("");
                       $("#input2").val("");
                       $("#input3").val("");
                  }
                   else {
                      //  alert(typeof item);
                      // alert(typeof description);
                     //  alert(typeof price);
                       alert("Please check out your input. INVALID INPUT !!!!");
                     //  return (false);
                   }
                    
                     $.ajax ( {
                     type:"POST",
                     url:"/products",
                     data:{item,description,price},
                     success: function(data) { 
                 //   alert("alishaSoni");
                     store1=(data.item);
                     store2=(data.description);
                     store3=(data.price);
                     $("#d1").append ('<div class="alert alert-success"> \
                    <a href="#" class="glyphicon glyphicon-remove-sign pull-right" data-dismiss="alert" arial-label="close">  </a> \
                 <h4 > <strong id="s1"> ' + store1 + '</strong>   <button id="btn" type="button" class="btn btn-primary pull-right">'+ store3+                   '</button> </h4> \
                  <p id="p1">'+ store2+'</p>\
                  </div>');
                     
                  }
        });
        });
           
        });
         
        