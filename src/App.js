import { Console } from "@woowacourse/mission-utils";

const DEFAULT_DIVIDER = [",", ":"];
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
      console.error("입력한 값이 숫자가 아닙니다. 프로그램을 종료합니다.");
      process.exit();
    };

    // 계산을 수행한다.
    let calcResult = 0;
    let numberMemory = ""; // string으로 누적하도록 수정

    charsOfUserInput.forEach((char, i) => {
      const isDivider = DEFAULT_DIVIDER.includes(char);
      const isDigit = /[0-9]/.test(char);

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
