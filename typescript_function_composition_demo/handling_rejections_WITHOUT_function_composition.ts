import {error} from "util";

let task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task 1 completed'), 1500)
    })
};

let task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task 2 completed'), 1000)
    })
};

let task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task 3 completed'), 500)
    })
};

let allDone = () => {console.log('All Tasks Completed')};

task1().then(console.log).catch(error => {throw error})
.then(task2).then(console.log).catch(error => {throw error})
.then(task3).then(console.log).catch(error => {throw error})
.then(allDone).catch(err => {console.log('Error: ' + err)});