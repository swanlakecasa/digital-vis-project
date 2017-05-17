float x=0;

car []amaxiaa = new car[50];
car1 []amaxia = new car1[50];
boolean miafora =true;



void setup(){
  
  size(550,700);
  
  

  
  for(int i =0;i<amaxia.length;i++){
  
      amaxia[i]= new car1();
      amaxia[i].manufacture();
      amaxiaa[i]= new car();
      amaxiaa[i].manufacture();
  }


}


void draw(){
    background(19,28,32);
    
    
  //print(mouseY+ " " );
  
  for(int i=0; i<height;i+=height/10){
    
   pushMatrix();
   stroke(254,255,255);
   strokeWeight(10);
   line(0,i,width,i);  
   popMatrix();
  }
  noStroke();
  
  
 for( car amaxi: amaxiaa){
  amaxi.update();
  amaxi.create();
  
 
 }
 
  
  float y;
  float y1;
  float y2;
  
  
 for(int i=0; i<height;i+=height/10){
    
   stroke(254,255,255);
   strokeWeight(10);
   line(0,i,width,i);  
  } 
  

 
 
beginShape();
fill(41,49,56);
vertex(43, height);
vertex(277, 0);
vertex(357, 0);
vertex(123, height);
endShape(CLOSE);

  line(43,height,277,0);
  line(123,height,357,0);
  

beginShape();
vertex(117, 0);
vertex(333, height);
vertex(443, height);
vertex(217, 0);
endShape(CLOSE);

 line(117,0,333,height);
 line(217,0,443,height);

beginShape();
vertex(650, 0);
vertex(360, height);
vertex(560, height);
vertex(850, 0);
endShape(CLOSE);

 
 line(650,0,360,height);
 line(850,0,560,height);




  if(frameCount%4==0){
    x+=10;
    if(x>800){x=4;};
    y=(-height*x/234)+960;
    y1=(height*x/216)-550;
    y2=(-height*x/290)+1800;
    //print(y + " " );
    fill(255);    
    //rectMode(CENTER);
    point(x,y);
    point(x,y1);
    point(x,y2);
      
   


  }
  noStroke();
   for( car1 amaxi: amaxia){
  amaxi.update();
  amaxi.create();
 
 }
  
//if(frameCount%30==0){
  
  // thread("avoid");
//};
  


}




void avoid(){
  
  
  for(car targetcar : amaxiaa){
    
   for(int i=0; i<amaxiaa.length;i++){
    
     if(targetcar.lane==amaxiaa[i].lane){ 
       if (dist(targetcar.x,targetcar.y,amaxiaa[i].x,amaxiaa[i].y)<1){
         targetcar.x+=0;
         print(2); 
        }
      
        print(1);
      
      }
      print("epomeno");
    }
  }
  
  print("telos");
  
};



class car{
  
  float x;
  float y;
  color c;
  int lane;

 void manufacture(){
   
   this.lane = int(random(1,10));
   //print("lane" + lane +" ");
   this.x=random(0,width);
   y=((lane*height)/10)+20;
   this.c= color(random(0,255),random(0,255),69);

  }
  
  
  void create(){
    
   
   rectMode(CENTER);
   fill(c);
   
   rect(x,y,40,10);
    
  }
  
  void update(){
    
   this.x+=2.5;

   if(this.x>width){this.x=0;};
  // print("cordinates" + x + " " +y + "end ");
  }
  
  
  
}

class car1{
  
  float x;
  float y;
  int lane;
  color c;
 void manufacture(){
   
   this.lane = int(random(0,3));
   //print("lane" + lane +" ");
   this.x=random(0,width);
   this.c= color(random(0,255),random(0,255),69);
    
  

}
  
  
  void create(){
    
   rectMode(CENTER);
   
   fill(c);
   pushMatrix();
   translate(x,y);
   rectMode(CENTER);
   if(lane==2){
     rotate(-PI/10);
     rect(0,0,30,60);
   
     }else if (lane==1 && !(this.y >116 && this.y<368)){
   
       rotate(PI/9);
       rect(0,0,30,60);
       
       }else if (lane==0){
     
         rotate(PI/9);
         rect(0,0,30,60);
         
       };
       
 
   popMatrix();

  };

  void update(){
    
   this.x+=2.5;
   if(this.x>width){this.x=0;};
      if(lane==1){
     this.y=(-height*x/234)+960;
   }else if(lane==2){
     
     this.y=(height*x/216)-550;
   }else{
     
     this.y=(-height*x/290)+1800;
     
   };
  // print("cordinates" + x + " " +y + "end ");
  }
  
  
  
}