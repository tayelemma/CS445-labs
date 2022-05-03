/**
 * Implement Strategy pattern to choose between different logging algorithms, choosing between:
    console.info()
    console.warn()
    console.error()
    console.table() accepts an array of objects
    When you finish, you can use the code below to test:
 */

class Info{
    logging(message){
        console.info(message);
    }
}

class Warn {
    logging(message){
        console.warn(message);
    }
}

class Error {
    logging(message){
        console.error(message);
    }
}

class Table{
    logging(message){
        console.table(message);
    }
}

class Strategy {
    setStrategy(classInstance){
        this.classInstance = classInstance;
    }

    logging (message){
        this.classInstance.logging(message);
    }
}

const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);