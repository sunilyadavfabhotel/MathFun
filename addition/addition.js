/*<!--Copyright 2020-2021 SUNIL KUMAR YADAV. (https://sunilkuyadav.github.io/MathFun/)-->*/
function display(a,b,res){
    var t = Math.floor(Math.random() * 4) + 1;
    document.getElementById('question').innerHTML= a + " + " +b;
    for(var i=1;i<=4;i++)
        {
            if(i==t)
                document.getElementById('btn'+i).innerHTML=res;
            else if(i%2==0)
                document.getElementById('btn'+i).innerHTML=res - (Math.floor(Math.random() * 10) + 1);
            else
                document.getElementById('btn'+i).innerHTML=res + (Math.floor(Math.random() * 10) + 1);
        }
}
function check(res,l,s,e,c,p){
    $('#hintshow').on('click',function(){
        $('#hint1').delay(10).fadeIn();
       document.getElementById('hint1').innerHTML=("435 + 262 = ?<br>(4+2) (3+6) (5+2)<br>697<hr>479 + 288 = ?<br>(4+2) (7+8) (9+8)<br>(6) (1_5) (1_7)<br>(6+1) (5+1) (7) <br>767<hr>Number close to hundred<br>379 +492 = ?<br>(379) (500-8)<br>(879)-8<br>871<hr>252 + 707 = ?<br>(252) (700+7)<br>(952) + 7<br>959") 
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
                        ques(l,s,e,c,p);
                    },500);
                }
                else if(c <= 10)
                    {
                        $('#question').text(" Wrong ");
                        c += 1;
                        setTimeout(
                    function(){
                        ques(l,s,e,c,p);
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
function ques(l,s,e,c,p){
    var a = Math.floor(Math.random() * e) + s;
    var b = Math.floor(Math.random() * e) + s;
    var t = Math.floor(Math.random() * 4) + 1;
    var res = a+b;
    $('.qs').text((c+1)+" - 12");
    display(a,b,res);
    check(res,l,s,e,c,p);
}