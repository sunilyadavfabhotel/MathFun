function display_sub(a,b,res){
    var t = Math.floor(Math.random() * 4) + 1;
    document.getElementById('question').innerHTML= a + " - " +b;
    for(var i=1;i<=4;i++)
        {
            if(i==t)
                document.getElementById('btns'+i).innerHTML=res;
            else if(i%2==0)
                document.getElementById('btns'+i).innerHTML=res - (Math.floor(Math.random() * 10) + 1);
            else
                document.getElementById('btns'+i).innerHTML=res + (Math.floor(Math.random() * 10) + 1);
        }
}
function check_sub(res,l,s,e,c,p){
    $('#hintshow').on('click',function(){
        $('#hints').delay(10).fadeIn();
       document.getElementById('hints').innerHTML=("147 - 132 = ?<br>(1-1) (4-3) (7-2)<br>015<hr>234 - 77 = ?<br>(200-0) (30-70) (4-7)<br>(200) (-40) (-3)<br>200 - 40 - 3 <br>157<hr>Number close to hundred<br>259 - 192 = ?<br>(259) - (200-8)<br>59 + 8<br>67<hr>259 - 203 = ?<br>259 - (200+3)<br>59 - 3<br>56") 
    });
            $(".btnc").on('click',function() { 
                var t = $(this).text(); 
                //$('#hint1').text("ID = " + t); 
                if(res==t && c <= 10)
                {
                    $('#question').text(" Right ");
                    c += 1;
                    p += 1;
                    setTimeout(
                    function(){
                        sub(l,s,e,c,p);
                    },500);
                }
                else if(c <= 10)
                    {
                        $('#question').text(" Wrong ");
                        c += 1;
                        setTimeout(
                    function(){
                        sub(l,s,e,c,p);
                    },500);
                    }
                    
                else
                    {
                        var pt = Math.floor(performance.now()/1000);
                        if(pt<60)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*100)+"/1200");
                        else if(pt<120)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*90+pt-60)+"/1200");
                        else if(pt<180)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*80+pt-120)+"/1200");
                        else if(pt<240)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*70+pt-240)+"/1200");
                        else
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*60+240-pt)+"/1200");
                        $('#cd').hide();
                        $('.input').hide();
                    }
                    
            }); 
}
function sub(l,s,e,c,p){
    var a = Math.floor(Math.random() * e) + s;
    var b = Math.floor(Math.random() * s);
    var res = a - b;
    $('.qs').text((c+1)+" - 12");
    display_sub(a,b,res);
    check_sub(res,l,s,e,c,p);
}
