function generate(){
    var i,x;
    x=document.getElementById("textBox").value;
    for(i=1; i<=x; i++){
        gift=document.createElement("p");
        gift.innerHTML=i;
        document.getElementById("grid1").appendChild(gift);
    }
}