import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DIVIDER = [",", ":"];
const NEW_DIVIDER_SYNTAX_CHAR = ["/", "\\", "n"];

class App {
  _isNaN(value, onNotANumber) {
    const isNotANumber = isNaN(value);
    isNotANumber && onNotANumber && onNotANumber();
    return isNotANumber;
  }

  async run() {
    // 사용자의 입력을 받는다.
    let validInputFlag = false;
    let userInput = "";
    while (!validInputFlag) {
      userInput = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요. \n"
      );
      if (userInput.trim() !== "") validInputFlag = true;
    }
    const charsOfUserInput = Array.from(userInput);

    // 공통 예외처리 함수
    const exceptionFunc = () => {
      console.error(
        "[ERROR] 입력한 값이 숫자가 아닙니다. 프로그램을 종료합니다."
      );
      process.exit();
    };

    // 계산을 수행한다.
    let calcResult = 0;
    let numberMemory = ""; // string으로 누적하도록 수정

    // 2가 되면 `isNewDivider` flag 변수를 활성화 시킨다.
    let newDividerActivateCount = 0;
    let newDividerDeActivateFlag = 0; // 이전 char가 '\'여야 함을 분기하기 위해 사용하는 변수다.
    charsOfUserInput.forEach((char, i) => {
      let newDivider = "";
      let isNewDivider = false;
      const isDivider = isNewDivider
        ? isNewDivider === char
        : DEFAULT_DIVIDER.includes(char);
      const isDigit = /[0-9]/.test(char);

      console.log("isNewDivider :>> ", isNewDivider);
      // 새로운 divider를 저장
      if (isNewDivider) {
        newDivider += char;
        console.log(`store new divider ${newDivider}`);
        return;
      }

      // new divider를 위한 char별 분기 로직
      if (NEW_DIVIDER_SYNTAX_CHAR[1] === char) {
        newDividerDeActivateFlag = true;
        return;
      }
      if (newDividerDeActivateFlag && NEW_DIVIDER_SYNTAX_CHAR[2] === char) {
        isNewDivider = false;
        return;
      }
      if (NEW_DIVIDER_SYNTAX_CHAR[0] === char) {
        if (++newDividerActivateCount == 2) {
          isNewDivider = true;
        }
        return;
      }
      if (isNewDivider) {
        newDivider += char;
        return;
      }

      console.log(`isDivider on ${char} :>> `, isDivider);
      // divider일 경우 메모리 숫자 파싱 후 결과에 합산
      if (isDivider) {
        const _num = parseInt(numberMemory || "0", 10);
        this._isNaN(_num, exceptionFunc); // 예외처리
        calcResult += _num;
        numberMemory = "";
        return;
      }

      // 예외 처리
      if (!isDigit) {
        // isNaN 검사를 통해 예외처리 함수 실행하도록 함
        this._isNaN(Number(char), exceptionFunc);
        return;
      }

      // 숫자일 경우 메모리에 누적
      numberMemory += char;

      // 마지막 문자이면 메모리 파싱하여 합산
      if (i === charsOfUserInput.length - 1) {
        const _num = parseInt(numberMemory, 10);
        this._isNaN(_num, exceptionFunc); // 예외처리
        calcResult += _num;
        numberMemory = "";
      }
    });

    // 계산된 결과를 출력한다. (현재는 예시 결과 출력)
    Console.print(`결과 : ${calcResult}`);
  }
}

export default App;
