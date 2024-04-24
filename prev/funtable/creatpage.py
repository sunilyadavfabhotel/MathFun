#for i in range(0,22):
#    print('<a id="l'+str((i+1))+'" onclick="tablefun('+str(i+1)+',3,'+str((i*5))+','+str(((i+1)*5))+',0)" class="dropdown-item l_s" href="#">3*['+str((i*5))+'...'+str(((i+1)*5))+']</a>')
#print('<a id="l'+str(i)+'" class="btn l_s" href="funtable/l'+str(i)+'.html">'+str(i)+"*[1...99]</a>")
b = '''

<!--Copyright 2020-2021 SUNIL KUMAR YADAV. (https://sunilkuyadav.github.io/MathFun/)-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TableFun Level 2</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="teblefun.js"></script>
    <link rel="stylesheet" href="../cal.css">
    <script defer src="cdown.js"></script>
</head>

<body>
    <div class="cantainer">
        <div class="main">
            <div class="operation">
                <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link sp" href="../addition.html">Addition</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link sp" href="../substraction.html">Substraction</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link sp" href="../multiplication.html">Multiplication</a>
                      </li> 
                      <li class="nav-item">
                        <a class="nav-link sp" href="../division.html">Division</a>
                      </li>
                        <li class="nav-item">
                        <a class="nav-link sp" href="../tablefun.html">TableFun</a>
                      </li>
                    </ul>
                  </div>  
                </nav>
            </div>
            <div class="mul">
            <div class="dropdown">
                <button type="button" class="btn dropdown-toggle btnl" data-toggle="dropdown">Level 1
    </button>
                <div id="qs" class="qs"></div>
                    <div class="text-center dropdown-menu">
                        <a id="l1" onclick="tablefun(1,|,1,5,0,0)" class="dropdown-item l_s" href="#">|*[1...5]</a>
                        <a id="l2" onclick="tablefun(2,|,5,10,0,0)" class="dropdown-item l_s" href="#">|*[5...10]</a>
                        <a id="l3" onclick="tablefun(3,|,10,15,0,0)" class="dropdown-item l_s" href="#">|*[10...15]</a>
                        <a id="l4" onclick="tablefun(4,|,15,20,0,0)" class="dropdown-item l_s" href="#">|*[15...20]</a>
                        <a id="l5" onclick="tablefun(5,|,20,25,0,0)" class="dropdown-item l_s" href="#">|*[20...25]</a>
                        <a id="l6" onclick="tablefun(6,|,25,30,0,0)" class="dropdown-item l_s" href="#">|*[25...30]</a>
                        <a id="l7" onclick="tablefun(7,|,30,35,0,0)" class="dropdown-item l_s" href="#">|*[30...35]</a>
                        <a id="l8" onclick="tablefun(8,|,35,40,0,0)" class="dropdown-item l_s" href="#">|*[35...40]</a>
                        <a id="l9" onclick="tablefun(9,|,40,45,0,0)" class="dropdown-item l_s" href="#">|*[40...45]</a>
                        <a id="l10" onclick="tablefun(10,|,45,50,0,0)" class="dropdown-item l_s" href="#">|*[45...50]</a>
                        <a id="l11" onclick="tablefun(11,|,50,55,0,0)" class="dropdown-item l_s" href="#">|*[50...55]</a>
                        <a id="l12" onclick="tablefun(12,|,55,60,0,0)" class="dropdown-item l_s" href="#">|*[55...60]</a>
                        <a id="l13" onclick="tablefun(13,|,60,65,0,0)" class="dropdown-item l_s" href="#">|*[60...65]</a>
                        <a id="l14" onclick="tablefun(14,|,65,70,0,0)" class="dropdown-item l_s" href="#">|*[65...70]</a>
                        <a id="l15" onclick="tablefun(15,|,70,75,0,0)" class="dropdown-item l_s" href="#">|*[70...75]</a>
                        <a id="l16" onclick="tablefun(16,|,75,80,0,0)" class="dropdown-item l_s" href="#">|*[75...80]</a>
                        <a id="l17" onclick="tablefun(17,|,80,85,0,0)" class="dropdown-item l_s" href="#">|*[80...85]</a>
                        <a id="l18" onclick="tablefun(18,|,85,90,0,0)" class="dropdown-item l_s" href="#">|*[85...90]</a>
                        <a id="l19" onclick="tablefun(19,|,90,95,0,0)" class="dropdown-item l_s" href="#">|*[90...95]</a>
                        <a id="l20" onclick="tablefun(20,|,95,99,0,0)" class="dropdown-item l_s" href="#">|*[95...99]</a>
                        <a id="l21" onclick="tablefun(21,|,1,99,0,0)" class="dropdown-item l_s" href="#">Level Final</a>
                    </div>
                </div>
                <div id="quest">
                    <div class="question" id="question">Select a level</div>
                    <div id="cd"><div id="app"></div></div>
                </div>
                <hr>
                <div class="input">
                    <div id="option-buttons" class="btn-grid">
                        <button id="btnm1" class="btn btnc" href="">1</button>
                        <button id="btnm2" class="btn btnc" href="#">2</button>
                        <button id="btnm3" class="btn btnc" href="#">3</button>
                        <button id="btnm4" class="btn btnc" href="#">4</button>
                    </div>
                </div>
                <hr>
                <div class="hint">
                    <h1 id="hint">Table Fun |</h1>
                </div>
            </div>        
            
        </div>
    </div>
    <footer>
            <div class="cpd">SUNIL KUMAR YADAV &copy; 2020-21</div>
    </footer>
</body>
        <script>
        $('.l_s').on('click',function(){
            $('.input').show();
            $('.btnl').text(($(this).text()));
        });
    </script>
</html>

'''
for i in range(2,100):
    x = b.replace('|',str(i))
    p = ('l'+str(i)+'.html')
    f = open(p,"w")
    f.write(x)
    f.close()
    
