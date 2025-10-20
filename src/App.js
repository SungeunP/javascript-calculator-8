import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 사용자의 입력을 받는다.
    const userInput = await Console.readLineAsync(
      "덧셈할 문자열을 입력해 주세요. \n"
    );

    // 계산을 수행한다.
    const result = 0;

    // 계산된 결과를 출력한다. (현재는 예시 결과 출력)
    Console.print(`결과 : ${result}`);
  }
}

export default App;
