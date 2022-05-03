/**
 * Implement Decorator pattern to add a logger to any object (additional class is needed). A logger method will log a message to the console.

    When you finish, you can use the code below to test:
 */

class User{
    constructor(fname){
        this.fname=fname;
    }
}
class DecoratedUser {
    constructor(user,street,city){
        this.user = user;
        this.fname = user.fname;
        this.street=street;
        this.city = city;
    }
    
    logger() {
        console.log( this.fname +  ": " + this.street + ", " + this.city);
    }

}



const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();