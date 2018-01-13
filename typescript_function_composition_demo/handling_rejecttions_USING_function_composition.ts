// This example shows another way to handle Promise Rejection using
// Function Composition where we can compose our tasks first using
// Partial Application on a Curried 'compose' function to line up
// the execution, and then we fire up all the executions at once,
// then we put the catch statement at the very end of the Promise
// Chain. In this approach we can avoid inserting too many catch
// statement in our Promise Chain and hence reduce duplicate code
// blocks. Handling Errors in one spot is more manageable than handling
// them all over the place.

let task1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task 1 completed'), 1500)
    })
};

let task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Task 2 failed'), 1000)
    })
};

let task3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Task 3 failed'), 500)
    })
};

let allDone = () => {console.log('All Tasks Completed')};

let applyAsync = (acc, val) => acc.then(val);
let composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));

let allTasks = [task1, task2, task3];
let allTaskPromises = allTasks.map(task => {
    return () => {
        return task().then(console.log).catch(err => {throw  err})
    }
});

let runAll = composeAsync(...allTaskPromises);

// note that in this example, all the tasks we are composing are functions that takes not argument and returns a promise.
// therefore even though runAll is defined to take two arguments, we can supply a null as the value to the second param,
// since it is not going to be referred to nor used in the subsequent operations.
runAll(null).then(allDone).catch(err => console.log(`Error: ${err}`));


// simultaneously fire all tasks instead of executing them one by one.
// the example below simulates the situation where none of them tasks
// are dependent to another, i.e., all tasks are independent to each other.
// The result of executing a particular task will not affect the outcomes
// of other tasks' executions.
Promise.all(allTasks.map(task => {
    return task().then(console.log).catch(err => {
        console.log(err);
        throw 'one or more tasks failed'
    })
})) // if and only if all Promises in the all() call are resolved, the Promise.all will
    // be resolved in a single Promised and the subsequent then() will be called. Otherwise,
    // error will be propagated through the chain, if any of the tasks in all() were failed.
    .then(allDone)
    .catch(err => console.log(`Error: ${err}`));
// Note that we are executing the tasks immediately
// once they get mapped over. In the previous example (the one above),
// we instead wrap the execution of the task in an anonymous function.
