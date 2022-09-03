function createStack () {
    const items = [];
    function push (item) {
       items.push(item);
    }
    function pop () {
       items.pop();
    }
    return [items, push, pop];
}

const [items, push, pop] = createStack();
push(10);
push(5);
pop();
console.log(items);