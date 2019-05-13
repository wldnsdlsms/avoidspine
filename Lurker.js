/*상속은 GameSeting클래스 이하 클래스에게 모두 적용한 상태이며 
오버라이딩은 진행되지 않은 상태이다*/
class Lurker extends GameSeting
{
    constructor(type,container,width,height,x,y,src,bg,velX,velY,targetX,targetY)
    {
        super(type,container,width,height,x,y,src,bg,velX,velY,targetX,targetY)
    }
}