var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//define canvas width,height

c.height = window.innerHeight;
c.width = window.innerWidth;

//hindi character taken from unicode character set
var hindi = "ॐनमःशिवय";
//convert this to character array
hindi = hindi.split('');

var font_size = 15;
var column = c.width/ font_size;

//an array of drops per column
var drops = [];
//x below is the x co-ordinates
//1=y co-ordinates of the drop is same for all(initially)
for(var x=0;x<column;x++)
drops[x]=1;

function draw()
{
    //fill canvas
    //translucent BG to show trail
    ctx.fillStyle   = "rgba(0,0,0,0.05)";

    ctx.fillRect(0,0,c.width,c.height);

    ctx.fillStyle = "#F61"; //font color
    ctx.font = font_size + "px arial";

    for(var i=0; i<drops.length;i++)
    {
        // a random hindi character
        var n = Math.random()*hindi.length;
        var text = hindi[Math.floor(Math.random()*hindi.length)];
        //x= i*font_size, y = value of drops[i] * font_size
        var x = i*font_size;
        var y = drops[i]*font_size;
        ctx.fillText(text,i*font_size,drops[i]*font_size);
        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height  && Math.random() > 0.975)
        {
                drops[i]=0;
        }
        //increment Y co-ordinate
        drops[i]++;
    }

}

setInterval(draw, 50);