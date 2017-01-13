var data ={};

var motor = function ( ){
	this.name = 'General';
	this.model = 'GM';
	this.speed = '0 km/h';
	this.numOfDoors = 4;
	this.isSaloon = true;
};

data.Car = function (name, model, type, speed, drive = false) {
    motor.call(this);
    this.name = name;
    this.model = model;
    this.type = type;
    if (name == null && model == null){
        this.name = 'General';
        this.model = 'GM';
    }
    if (name == undefined && model == undefined){
        this.name = 'General';
        this.model = 'GM';
    }
    if(drive) {
      this.speed = speed;
    }
    if (name == 'Porshe' || name == 'Koenigsegg'){ 
      this.numOfDoors = 2;
    }
    if (type == 'trailer') {
      this.numOfWheels = 8;
      this.isSaloon = false;
    }
    if (this.isSaloon == true) {
      this.numOfWheels = 4;
    }
    this.drive = function(){
        if (this.name == 'Porshe' || this.name == 'Koenigsegg'){
            this.speed = '250 km/h';
          }
        else if (this.type == 'trailer') {
            this.speed = "77 km/h";
          }
        else {
            this.speed = "77 km/h";
         }
         return new data.Car(this.name, this.model, this.type, this.speed, true);
  }
};
module.exports= data;