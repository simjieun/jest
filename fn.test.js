const fn = require('./fn');

test('1은 1이야.', ()=>{
    expect(1).toBe(1);
});

test('2 더하기 3은 5야.', ()=>{
    expect(fn.add(2,3)).toBe(5);
});

test('3 더하기 3은 5가 아니야.', ()=>{
    expect(fn.add(3,3)).not.toBe(5);
});

test('이름과 나이를 전달받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("Mike", 30)).toEqual({
        name:"Mike",
        age: 30
    });
});

test('이름과 나이를 전달받아서 객체를 반환해줘', ()=>{
    expect(fn.makeUser("Mike", 30)).toStrictEqual({
        name:"Mike",
        age: 30
    });
});

// toBeNull
// toBeUndefined
// toBeDefined
test("null은 null입니다.", ()=>{
    expect(null).toBeNull();
});

// toBeTruthy
// toBeFalsy
test("0은 false 입니다.", ()=>{
    expect(fn.add(1, -1)).toBeFalsy();
    expect(fn.add("hello", "world")).toBeTruthy();
});
test("비어있지 않은 문자열은 true 입니다.", ()=>{
    expect(fn.add("hello", "world")).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다
test("ID는 10자 이하여야 합니다", ()=>{
    const id = "THE_BLACK";
    expect(id.length).toBeLessThanOrEqual(10);
});

test("비밀번호 4자리", ()=>{
    const pw = "1234";
    expect(pw.length).toBe(4);
});

// toBeCloseTo : 근접한 소수점
// toMatch : 정규표현식
test("0.1 더하기 0.2는 0.3 입니다", ()=>{
    expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World에 a라는 글자가 있나?", ()=>{
    expect("Hello World").toMatch(/h/i);
});

// toContain
test("유저 리스트에 Mike가 있나?", ()=>{
    const user = "Mike";
    const userList = ["Tom", "Mike", "Kai"];
    expect(userList).toContain(user);
});

// toThrow : 에러를 감지할때
test("이거 에러나나요?", ()=>{
    expect(()=> fn.throwErr()).toThrow();
});