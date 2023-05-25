var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img
        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });

}
function new_image(getImage)
{
    fabric.Image.fromURL(getImage, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if(key_pressed=="38")
    {
        console.log("up");
        up(); 
    }
    if(key_pressed=="40")
    {
        console.log("down");
        down(); 
    }
    if(key_pressed=="37")
    {
        console.log("left");
        left(); 
    }
    if(key_pressed=="39")
    {
        console.log("right");
        right(); 
    }
    if(key_pressed=="87")
    {
        console.log("w");
        new_image("wall.jpg");
    }
    if(key_pressed=="71")
    {
        console.log("g");
        new_image("ground.png");
    }
    if(key_pressed=="76")
    {
        console.log("l");
        new_image("light_green.png");
    }
    if(key_pressed=="84")
    {
        console.log("t");
        new_image("trunk.jpg");
    }
    if(key_pressed=="82")
    {
        console.log("r");
        new_image("roof.jpg");
    }
    if(key_pressed=="89")
    {
        console.log("y");
        new_image("yellow_wall.png");
    }
    if(key_pressed=="68")
    {
        console.log("d");
        new_image("dark_green.png");
    }
    if(key_pressed=="85")
    {
        console.log("u");
        new_image("unique.png");
    }
    if(key_pressed=="67")
    {
        console.log("c");
        new_image("cloud.jpg");
    }
    if(e.shiftKey==true && key_pressed=="80"){
        console.log("p and shift pressed together");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }
    if(e.shiftKey==true && key_pressed=="77"){
        console.log("m and shift pressed together");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }
}
 function up(){
    if(player_y>=0){
        player_y = player_y - block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When Up arrow key is pressed: X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
 }
 function down(){
    if(player_y<=500){
        player_y = player_y + block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When Down arrow key is pressed: X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
 }
 function left(){
    if(player_x>=0){
        player_x = player_x - block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When Left arrow key is pressed: X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
 }
 function right(){
    if(player_x<=900){
        player_x = player_x + block_image_height;
        console.log("block_image_height = " + block_image_height);
        console.log("When Right arrow key is pressed: X = " + player_x + "and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
 }
