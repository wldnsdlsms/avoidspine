//게임에 등장할 객체의 등록, 게임에서 제거될 객체의 삭제
//화면에 등장하는 모든 오브젝트를 대상으로 tick(), render()
// PR Test
class ObjectManager{
	constructor(){
		this.objectArray=[];//종류에 상관없이 모든~~게임객체들이
									//담겨질 배열
	}
    addObject(obj){//클래스 소유인 objectArray배열에 html에서 담아올 방법이 없으므로
                            //함수로 만들어준다.
		this.objectArray.push(obj);
	}
	removeObject(obj){
		//보여지는 것부터 먼저 처리하고, 진정한 삭제를 하자!!
		obj.container.removeChild(obj.div);//DOM 을 지워야 하기에...
		this.objectArray.splice(this.objectArray.indexOf(obj) , 1);
	}
	tick(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0;i<this.objectArray.length;i++){
			this.objectArray[i].render();
		}
	}
}