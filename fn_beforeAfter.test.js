const fn_beforeAfter = require("./fn_beforeAfter");

// let num = 0;
// beforeEach(() => {
//   num = 0;
// });

// afterEach(() => {
//   num = 0;
// });

// test("0 더하기 1은 1이야", () => {
//   num = fn_beforeAfter.add(num, 1);
//   expect(num).toBe(1);
// });

let user;

beforeAll(async () => {
  user = await fn_beforeAfter.connectUserDb();
});
afterAll(() => {
  return fn_beforeAfter.disconnectDb();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test.only("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test.skip("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});
