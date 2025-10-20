# javascript-calculator-precourse

## 구현할 기능 목록

### > 초기 질문 출력 및 문자열 입력 받은 후, 예시 결과 출력

- `@woowacourse/mission-utils` 패키지의 `Console` 객체를 사용하여 `초기 질문 출력`, `문자열 입력` 기능을 수행하도록 한다.
- 마찬가지로 예시 결과 출력도 `Console` 객체를 사용하여 요구사항대로 구현하고자 한다.
- 예시 결과까지 출력하는 이유는 프로그램의 전체적인 뼈대를 잡고, 핵심 기능에 집중하기 위함이다.

### > 핵심 기능 구현 - divider를 기준으로 값 계산 및 예시 결과를 실제 결과로 바꿈

- 프로그램의 전체적인 flow는 잡았으니, 핵심 기능(계산)에 집중한다.
- 입력받은 string을 해석하는 기능을 구현한다.
- divider를 기준으로 number 값을 구분하여 가져올 때마다 변수에 직접 합산하는 로직을 구현한다.

### > 핵심 기능 구현 - new divider를 수용하도록 로직 추가

- 요구사항에 따라 divider가 변수화 돼야 한다. 따라서 하드코딩된 divider를 변수화 하여, //<new_divider>\n 와 같은 형태로, "//"와 "\n" 사이에 존재하는 string을 divider로 사용한다.

### > 사용자 친화적인 마무리 작업

- 입력 받은 데이터가 parse 후 number가 아닌 경우 계산하지 않고, 경고 메시지를 출력한다.
- new divider를 받을 때, 공백이 있을 경우 공백을 삭제하고 divider를 지정할까? 라고 생각 했지만, 1-space divider, 2-space divider ... n-space divider도 수행되어야 함으로, 이 기능을 구현하지 않는다.
