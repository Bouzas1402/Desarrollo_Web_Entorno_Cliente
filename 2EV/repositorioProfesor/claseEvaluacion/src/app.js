class App{
    constructor(){

        this.minAge = 13;
        this.maxAge = 60;

        this.maxStudentsPerClassRoom = 30;
        this.minStudentsPerClassRoom = 8;

        this.classrooms = []
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    createClassRooms(numClassRooms){
       var numStudents = this.getRandomInt(500,1000);

        
        for (let index = 0; index < numClassRooms; index++) {

            this.classrooms[index] = new ClassRoom(this.maxStudentsPerClassRoom);
            while(numStudents > 0 && this.classrooms[index].students.length < this.classrooms[index].maxStudents){

                let student = new Student(faker.name.findName(),this.getRandomInt(this.minAge,this.maxAge));
                this.classrooms[index].students.push(student);
                numStudents--;
            }
        }
    }

    getClassRooms(){
        return this.classrooms;
    }
}