const fn = require("./fn");
const fn_mock = require("./fn_mock");

/* 
const mockFn = jest.fn();

mockFn();
mockFn(1);

test("mock 함수 확인용", () => {
  console.log(mockFn.mock.calls);
  expect("dd").toBe("dd");
});

test("함수는 2번 호출됨", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test("2번째로 호출된 함수에 전달된 첫번째 인수는 1입니다", () => {
  expect(mockFn.mock.calls[1][0]).toBe(1);
});
*/

/*
const mockFn = jest.fn();
function forEachAdd1(arr) {
  arr.forEach((num) => {
    mockFn(num + 1);
  });
}

forEachAdd1([10, 20, 30]);
test("함수 호출은 3번 됩니다", () => {
  expect(mockFn.mock.calls.length).toBe(3);
});

test("전달된 값은 11, 21, 31 입니다.", () => {
  expect(mockFn.mock.calls[0][0]).toBe(11);
  expect(mockFn.mock.calls[1][0]).toBe(21);
  expect(mockFn.mock.calls[2][0]).toBe(31);
});
*/

/*
// mock function
const mockFn = jest.fn((num) => num + 1);
mockFn(10);
mockFn(20);
mockFn(30);

test("10에서 1증가한 값이 반환된다", () => {
  expect(mockFn.mock.results[0].value).toBe(11);
});

test("20에서 1증가한 값이 반환된다", () => {
  expect(mockFn.mock.results[1].value).toBe(21);
});

test("30에서 1증가한 값이 반환된다", () => {
  expect(mockFn.mock.results[2].value).toBe(31);
});
*/

/*
const mockFn = jest.fn();
mockFn
  .mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValue(40);

mockFn();
mockFn();
mockFn();
mockFn();

test("dd", () => {
  console.log(mockFn.mock.results);
  expect("dd").toBe("dd");
});
*/

/*
// 훌수짝수를 구하는걸 mock함수로
const mockFn = jest.fn();

mockFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

const result = [(1, 2, 3, 4, 5)].filter((num) => mockFn(num));

test("홀수는 1,3,5", () => {
  expect(result).toStrictEqual([1, 3, 5]);
});
*/

/*
// mock으로 비동기 함수 만드는 예재
const mockFn = jest.fn();
mockFn.mockResolvedValue({ name: "Mike" });

test("받아온 이름은 Mike", () => {
  mockFn().then((res) => {
    expect(res.name).toBe("Mike");
  });
});
*/

/*
jest.mock("./fn_mock");
fn_mock.createUser.mockReturnValue({ name: "Mike" });

test("유저를 만든다", () => {
  const user = fn_mock.createUser("Mike");
  expect(user.name).toBe("Mike");
});

*/

const mockFn = jest.fn();

mockFn(10, 20);
mockFn();
mockFn(30, 40);

test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalled();
});

test("정확히 세번 호출?", () => {
  expect(mockFn).toBeCalledTimes(3);
});

test("한번 이상 호출?", () => {
  expect(mockFn).toBeCalledWith(10, 20);
});
test("한번 이상 호출?", () => {
  expect(mockFn).lastCalledWith(30, 40);
});
