        var start = new Date().getTime();
            
            function getRandomColor(){
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for(var i=0; i<6; i++){
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
          
          
            function visibilityofShape(){
                var top = (Math.random())*300;
                var left = (Math.random())*900;
                var width = (Math.floor(Math.random()*200))+100;
                var height = (Math.floor(Math.random()*200))+100;
                    if(width < 200){
                    document.getElementById("shape").style.borderRadius="50%";
                    }else{
                    document.getElementById("shape").style.borderRadius="0%";
                    }
                document.getElementById("shape").style.top= top +"px";
                document.getElementById("shape").style.left= left +"px";
                document.getElementById("shape").style.width= width +"px";
                document.getElementById("shape").style.height= height +"px";
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                document.getElementById("shape").style.display = "block";
                start = new Date().getTime();
            }
            function shapeAppearAgain(){
                 setTimeout(visibilityofShape, Math.random()*2000);
            }
           shapeAppearAgain();
                document.getElementById("shape").onclick = function() {
                
                    document.getElementById("shape").style.display = "none";
                    var end = new Date().getTime();
                    var time = (end - start)/1000;
                    document.getElementById("timeTaken").innerHTML =  time+"s";
                    shapeAppearAgain();

            }