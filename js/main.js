$(document).ready(function(){


    // $(".right").hover(
        
    //     function() {

    //     $(".left").css({"width":"60%","transition-duration":"2s"});

        
    //     $(this).css({
    //         "width":"40%", "transition-duration":"2s", "padding-right":"0px"
    //         }); 
        
        
    //     },
    //     function(){

    //         $(this).css({
    //             "width":"50%", "transition-duration":"2s", "padding-right":"0px"
    //         });

    //         $(".left").css({"width":"50%","transition-duration":"2s"});

    //     });


    //     $(".left").hover(
        
    //         function() {
    
    //         $(".right").css({"width":"60%","transition-duration":"2s","padding-right":"0px"});
    
            
    //         $(this).css({
    //             "width":"40%", "transition-duration":"2s"
    //             }); 
            
            
    //         },
    //         function(){
    
    //             $(this).css({
    //                 "width":"50%", "transition-duration":"2s", "padding-right":"10px"
    //             });
    
    //             $(".right").css({"width":"50%","transition-duration":"2s","padding-right":"0px"});
    
    //         });


    $(".right").hover(
        function(){
        $(".option-left").css({"transform":"rotate(90deg)","transition-duration":"1s"});
        }, 
    
        function(){
            $(".option-left").css({"transform":"rotate(0deg)","transition-duration":"0.8s"});
        }
    );

    $(".left").hover(
        function(){
        $(".option-right").css({"transform":"rotate(-90deg)","transition-duration":"1s"});
        }, 
    
        function(){
            $(".option-right").css({"transform":"rotate(0deg)","transition-duration":"0.8s"});
        }
    );


});

