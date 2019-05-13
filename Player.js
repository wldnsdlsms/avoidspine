class Player extends GameSeting
{
    constructor(type,container,width,height,x,y,src,bg,velX,velY,targetX,targetY)
    {
        super(type,container,width,height,x,y,src,bg,velX,velY,targetX,targetY);

    }

    tick()
    {  
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;

        var hitCount=0;
        var hitTarget; //부딪친 객체를 담아놓기위한 변수

        //충돌검사 
        for(var i=0;i<objectManager.objectArray.length;i++){
            var obj=objectManager.objectArray[i];
            if(obj.type=="SPLINTER"){
                    if(collisionCheck(this, obj)){//여기서 this는  Player
                        // console.log("충돌!!");
                        hitCount++;
                        hitTarget=obj;//충돌난 애들을 obj에 담아두겠다!! 예시로 고등학생들이 막~있어 그런데 내가 고등학생들 중 절반을 따귀를 때렸어 
                                            //그다음에 내가 나한테 싸대기 쳐맞은 새끼들 여기 obj에 서있어 라고 말했어.즉, 싸대기 쳐맞은새끼들이 hitTarget이며
                                            // 맞은 새끼들을 데리고있을 장소가 obj이다
                    }
            }
        }

        if(hitCount > 0){ //충돌났으면.,,
            // stage.removeChild(hitTarget.div);
            objectManager.removeObject(hitTarget);    
            objectManager.removeObject(this);    

            endGame();    
            // Score();
        }
        
    }
    render()
    {
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}
