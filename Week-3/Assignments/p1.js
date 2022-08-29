//memoization function
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

// reducer method
function add (a, b) {
    return a + b || a || b;
}
//timing function
function time (fn) {
    console.time();
    console.log(fn());
    console.timeEnd();
}

const memoizeAdd = memoize(add);

time(() => memoizeAdd(100, 100));
time(() => memoizeAdd(100));
time(() => memoizeAdd(100, 200));
time(() => memoizeAdd(100, 100));
