// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker1{
    constructor(attributes){
    this.length=attributes.length;
    this.width=attributes.width;
    this.height=attributes.height
    }

    volume(){
    return this.height*this.length*this.width;
    }

    surfaceArea(){
    return 2* (this.length*this.width + this.length*this.height + this.width*this.height);
    }

}
  
  const cuboid1=new CuboidMaker({length:4,width:5, height:5});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Classes: now test:")
 console.log('The cuboids volume is : '+cuboid1.volume()); // 100
 console.log('The cuboids surface area is:' +cuboid1.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods 
//using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker1{

    constructor(attributes){
        super(attributes);
    }

    volume(){
    return Math.pow(this.height,3);
    }

 surfaceArea(){
    return  6* Math.pow(this.height, 2)
  }

}

console.log("Classes Stretch: now test:")
  
const cube=new CubeMaker({length:5,width:5, height:5});

console.log('The cubes volume is:'+ cube.volume()); 
console.log('The cubes surfaceArea is' + cube.surfaceArea()); 