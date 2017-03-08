ArrayList city = new ArrayList();

float num = 0;

void setup() {
  size(640, 640, P3D);
  noStroke();
  fill(255);
  for (int x = -5; x <= 5; x++) {
    for (int z = -5; z <= 5; z++) {
      float r = random(0, 1);
      if (r > 0.3) {
        float d = abs(10-dist(x, 0, z, 0, 0, 0));
        city.add(new Building(new PVector(x*35, 0, z*35), random(d-d/2, d+(d*d)/5)));
      }
    }
  }
}

void draw() {
  background(255);
  translate(width/2, height/2+50, 0);
  rotateX(-radians(20));
  rotateY(radians(45+num));
  pointLight(255, 255, 255, -width, -height, -width);
  for (int i = 0; i < city.size (); i++) {
    Building b = (Building) city.get(i);
    b.draw();
  }
  num+=0.3;
}

class Building {
  PVector loc;

  float size, num;

  Building(PVector loc, float size) {
    this.loc  = loc;
    this.size = size*12;
  }

  void draw() {
    pushMatrix();
    translate(loc.x, loc.y-num/2, loc.z);
    fill(constrain(size, 0, 255));
    box(20, num, 20);
    popMatrix();
    // Animate growth
    if (num < size) {
      num+=map(size, 0, 200, 0.3, 4);
    }
  }
}