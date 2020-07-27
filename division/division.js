function display_div(a,b,res){
    var t = Math.floor(Math.random() * 4) + 1;
    document.getElementById('question').innerHTML= a + " ÷ " +b;
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
function check_div(res,l,s,c,p){
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
                        divt(l,s,p,c);
                    },500);
                }
                else if(c <= 10)
                    {
                        $('#question').text(" Wrong ");
                        c += 1;
                        setTimeout(
                    function(){
                        divt(l,s,p,c);
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
function divt(l,s,p,c){
    if(l==1)
        {
            var temp = Math.floor(Math.random()*20)+1;
            var a = (Math.floor(Math.random() * 500)+1)*temp;
            var b = temp;
        }
    else
        {
            var a = (Math.floor(Math.random() * 500)+1)*s;
            var b = s;
        }
    var res = a / b;
    $('.qs').text((c+1)+" - 12");
    display_div(a,b,res);
    check_div(res,l,s,c,p);
}