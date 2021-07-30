const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

let countFrontend = 0;
let countBackend = 0;

const hoursFrontend = tasks
    .filter(task => task.category === 'Frontend')
    .reduce((sum, task) => {
        return sum + task.timeSpent;
    }, 0);

console.log('Hours for Frontend tasks:', hoursFrontend);

const hoursBug = tasks
    .reduce((acc, task) => {
        // let sum = acc;
    if (task.type === 'bug') {
        acc += task.timeSpent;
    }
        return acc;
}, 0);

console.log('Hours for BUGs tasks:', hoursBug);

const qtyTasks = tasks.filter(task => task.title.includes('UI'));

console.log('Quantity contain a "UI":', qtyTasks.length);

const objects = tasks.map (task => {
    if (task.category === 'Frontend') {
        countFrontend++
    }
    if (task.category === 'Backend') {
        countBackend++
    }

    return {
        Frontend: countFrontend,
        Backend: countBackend,
    }
})

console.log(objects);