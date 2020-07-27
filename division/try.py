stra ='''
<a id="l1" onclick="divt(1,10,50,0)" class="l_s btn" href="division/d1.html">Level 1</a>
                        <a id="l2" onclick="divt(2,2,0,0)" class="l_s btn" href="division/d2.html">Level 2</a>
                        <a id="l3" onclick="divt(3,3,0,0)" class="l_s btn" href="division/d3.html">Level 3</a>
                        <a id="l4" onclick="divt(4,4,0,0)" class="l_s btn" href="division/d4.html">Level 4</a>
                        <a id="l5" onclick="divt(5,5,0,0)" class="l_s btn" href="division/d5.html">Level 5</a>
                        <a id="l6" onclick="divt(6,6,0,0)" class="l_s btn" href="division/d6.html">Level 6</a>
                        <a id="l7" onclick="divt(7,7,0,0)" class="l_s btn" href="division/d7.html">Level 7</a>
                        <a id="l8" onclick="divt(8,8,0,0)" class="l_s btn" href="division/d8.html">Level 8</a>
                        <a id="l9" onclick="divt(9,9,0,0)" class="l_s btn" href="division/d9.html">Level 9</a>
                        <a id="l10" onclick="divt(10,10,0,0)" class="l_s btn" href="division/d10.html">Level 10</a>
                        <a id="l11" onclick="divt(11,11,0,0)" class="l_s btn" href="division/d11.html">Level 11</a>
                        <a id="l12" onclick="divt(12,12,0,0)" class="l_s btn" href="division/d12.html">Level 12</a>
                        <a id="l13" onclick="divt(13,13,0,0)" class="l_s btn" href="division/d13.html">Level 13</a>
                        <a id="l14" onclick="divt(14,14,0,0)" class="l_s btn" href="division/d14.html">Level 14</a>
                        <a id="l15" onclick="divt(14,15,0,0)" class="l_s btn" href="division/d15.html">Level 15</a>
                        <a id="l16" onclick="divt(15,16,0,0)" class="l_s btn" href="division/d16.html">Level 16</a>
                        <a id="l17" onclick="divt(16,17,0,0)" class="l_s btn" href="division/d17.html">Level 17</a>
                        <a id="l18" onclick="divt(18,18,0,0)" class="l_s btn" href="division/d18.html">Level 18</a>
                        <a id="l18" onclick="divt(18,18,0,0)" class="l_s dropdown-item" href="#">Level 18</a>
'''
a = stra.replace("btn","dropdown-item")
b = a.replace(")",",0)")
print(a.replace("division/",""))
