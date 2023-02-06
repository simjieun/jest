const fn_mock = {
  add: (num1, num2) => num1 + num2,
  createUser: (name) => {
    console.log("실제로 사용자가 생성되었습니다");
    return {
      name,
    };
  },
  makeUser: (name, age) => ({ name, age }),
};

module.exports = fn_mock;
