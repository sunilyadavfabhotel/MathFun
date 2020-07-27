/*<!--Copyright 2020-2021 SUNIL KUMAR YADAV. (https://sunilkuyadav.github.io/MathFun/)-->*/
function display(a,b,res){
    var t = Math.floor(Math.random() * 4) + 1;
    document.getElementById('question').innerHTML= a + " * " +b;
    for(var i=1;i<=4;i++)
        {
            if(i==t)
                document.getElementById('btnm'+i).innerHTML=res;
            else if(i%2==0)
                document.getElementById('btnm'+i).innerHTML=res - (Math.floor(Math.random() * 10) + 1);
            else
                document.getElementById('btnm'+i).innerHTML=res + (Math.floor(Math.random() * 10) + 1);
        }
}
function check(res,l,s,e,c,b,p){      
            $(".btnc").on('click',function() { 
                var t = $(this).text(); 
                //$('#hint1').text("ID = " + t); 
                if(res==t && c <= 11)
                {
                    $('#question').text(" Right ");
                    c += 1;
                    p += 1;
                    setTimeout(
                    function(){
                        tablefun(l,b,s,e,c,p);
                    },500);
                }
                else if(c <= 11)
                    {
                        $('#question').text(" Wrong ");
                        c += 1;
                        setTimeout(
                    function(){
                        tablefun(l,b,s,e,c,p);
                    },500);
                    }
                    
                else
                    {
                        var pt = Math.floor(performance.now()/1000);
                        if(pt<30)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*100)+"/1200");
                        else if(pt<40)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*90+pt-30)+"/1200");
                        else if(pt<50)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*80+pt-40)+"/1200");
                        else if(pt<60)
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*70+pt-50)+"/1200");
                        else
                            document.getElementById('question').innerHTML=("Level Up "+l+"<br> you score<br> "+(p*60+60-pt)+"/1200");
                        $('#cd').hide();
                        $('.input').hide();
                        setTimeout(
                        function(){
                            location.reload();
                        },5000);
                    }
                    
            }); 
}
function tablefun(l,b,s,e,c,p){
    if(c==0)
        {
            /*$('#hintm').text((s+1-1)+" * "+b+" = "+((s+1-1)*b)+"\n"+(s+2)+" * "+b+" = "+((s+2-1)*b)+"\n"+(s+3-1)+" * "+b+" = "+((s+3-1)*b)+"\n"+(s+4-1)+" * "+b+" = "+((s+4-1)*b)+"\n"+(s+5-1)+" * "+b+" = "+((s+5-1)*b)+"\n");*/
            document.getElementById('question').innerHTML =((s+1-1)+" * "+b+" = "+((s+1-1)*b)+"<hr>"+(s+2-1)+" * "+b+" = "+((s+2-1)*b)+"<hr>"+(s+3-1)+" * "+b+" = "+((s+3-1)*b)+"<hr>"+(s+4-1)+" * "+b+" = "+((s+4-1)*b)+"<hr>"+(s+5-1)+" * "+b+" = "+((s+5-1)*b));
            setTimeout(
            function(){
                c += 1;
                tablefun(l,b,s,e,c,p);
            },7000);
        }
    else{
    if(l==21)
        var a = Math.floor(Math.random()*e)+s;
    else
        var a = Math.floor(Math.random() * 5) + s;
    var t = Math.floor(Math.random() * 4) + 1;
    var res = a*b;
    $('.qs').text((c)+" - 12");
    display(a,b,res);
    check(res,l,s,e,c,b,p);
    }
}