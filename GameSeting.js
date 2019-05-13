class GameSeting
{
    constructor(type,container,width,height,x,y,src,bg,velX,velY,targetX,targetY)
    {
        this.type=type;
        this.container=container;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.src=src;
        this.bg=bg;
        this.velX=velX;
        this.velY=velY;
        this.targetX=targetX;
        this.targetY=targetY;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=bg;
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        
        this.img=document.createElement("img");
        this.img.style.width=100+"%";
        this.img.style.height=100+"%";
        this.img.src=this.src;
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.div.appendChild(this.img);
        this.container.appendChild(this.div);
        

        //프로그램을 실행시켰을때 이미지들이 안뜨는데 그 이유를 여쭤보자!!
        this.img=document.createElement("img");
        this.div.src=this.src;
        

    }
    tick()
    {  
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
    }
    render()
    {
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}