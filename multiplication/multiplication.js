function display_mul(a,b,res){
    var t = Math.floor(Math.random() * 4) + 1;
    document.getElementById('question').innerHTML= a + " * " +b;
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
function check_mul(res,l,s,e,c,p){
    $('#hintshow').on('click',function(){
        if (($('#l'+l).text())=='l1')
            {
            document.getElementById('hintm').innerHTML=("2 * 2 = 4 3 * 2 = 6<br>2 * 3 = 6 3 * 3 = 9<br>2 * 4 = 8 3 * 4 = 12<br>2 * 5 = 10 3 * 5 = 15<br>2 * 6 = 12 3 * 6 = 18<br>2 * 7 = 14 3 * 7 = 21<br>2 * 8 = 16 3 * 8 = 24<br>2 * 9 = 18 3 * 9 = 27<br><hr>4 * 2 = 8 5 * 2 = 10<br>4 * 3 = 12 5 * 3 = 15<br>4 * 4 = 16 5 * 4 = 20<br>4 * 5 = 20 5 * 5 = 25<br>4 * 6 = 24 5 * 6 = 30<br>4 * 7 = 28 5 * 7 = 35<br>4 * 8 = 32 5 * 8 = 40<br>4 * 9 = 36 5 * 9 = 45<br><hr>6 * 2 = 12 7 * 2 = 14<br>6 * 3 = 18 7 * 3 = 21<br>6 * 4 = 24 7 * 4 = 28<br>6 * 5 = 30 7 * 5 = 35<br>6 * 6 = 36 7 * 6 = 42<br>6 * 7 = 42 7 * 7 = 49<br>6 * 8 = 48 7 * 8 = 56<br>6 * 9 = 54 7 * 9 = 63<br><hr>8 * 2 = 16 9 * 2 = 18<br>8 * 3 = 24 9 * 3 = 27<br>8 * 4 = 32 9 * 4 = 36<br>8 * 5 = 40 9 * 5 = 45<br>8 * 6 = 48 9 * 6 = 54<br>8 * 7 = 56 9 * 7 = 63<br>8 * 8 = 64 9 * 8 = 72<br>8 * 9 = 72 9 * 9 = 81<br><hr>");
            }
        else if(l==2)
            {
            document.getElementById('hintm').innerHTML=("36 * 11 = 396<br>3_(3+6)_6<br>396<hr>78 * 11 = 858<br>7_(7+8)_8<br>7_(15)_8<br>(7+1)_5_8<br>858<hr>Note:<br>if two digit number multiply by 11 then last digit of ans is same as last digit of number");
            }
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
                        mult(l,s,e,c,p);
                    },500);
                }
                else if(c <= 10)
                    {
                        $('#question').text(" Wrong ");
                        c += 1;
                        setTimeout(
                    function(){
                        mult(l,s,e,c,p);
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
function mult(l,s,e,c,p){
    if(l==1)
    {
        // mult table
        var a = Math.floor(Math.random() * 10)+1;
        var b = Math.floor(Math.random() * 10)+1;
    }
    else if(l==2)
    {
        // multi by 11
        var a = Math.floor(Math.random() * 99)+1;
        var b = 11;
    }
    else if(l==3)
    {
        // multi by _1 and _1
        var a = (Math.floor(Math.random() * 9)+1)*(10)+1;
        var b = (Math.floor(Math.random() * 9)+1)*(10)+1;
    }
    else if(l==4)
    {
        // multi g_ and g_ then _ + _ = 10
        var temp = Math.floor(Math.random()*8)+1;
        var a = (Math.floor(Math.random() * 9)+1)*10+temp;
        var b = (Math.floor(Math.random() * 9)+1)*10+(10-temp);
    }
    else if(l==5)
    {
        // multi 11 - 19
        var a = Math.floor(Math.random() * 9)+11;
        var b = Math.floor(Math.random() * 9)+11;
    }
    else if(l%2==0)
    {
        var a = Math.floor(Math.random() * e)+1;
        var b = s;
    }
    else
    {
        var a = Math.floor(Math.random() * e)+101;
        var b = s;
    }
        
    var res = a * b;
    $('.qs').text((c+1)+" - 12");
    display_mul(a,b,res);
    check_mul(res,l,s,e,c,p);
}
