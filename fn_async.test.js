const fn_async = require('./fn_async');

test("3초 후에 받아온 이름은 Mike", done => {
    function callback(name) {
        try{
            expect(name).toBe('Mike');
            done();
        } catch(error) {
            done();
        }
    }
    fn_async.getName(callback);
});


test("3초 후에 받아온 나이는 30", () => {
   return fn_async.getAge().then(age => {
    expect(age).toBe(30);
   }); 
});

// resolves, rejects
test("3초 후에 받아온 나이는 30", () => {
    return expect(fn_async.getAge()).resolves.toBe(30);
 });
// async await
test("3초 후에 받아온 나이는 30", async () => {
    const age = await fn_async.getAge();
    expect(age).toBe(30);
});

test("3초 후에 받아온 나이는 30", async () => {
   await expect(fn_async.getAge()).resolves.toBe(30);
});