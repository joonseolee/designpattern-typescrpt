# design pattern with typescript

타입스크립트로 간단한 디자인패턴 적용시켜보는 잡 프로젝트  
기본적으로 `npm run test` 를 통해서 각 디자인패턴 결과를 확인할수있음

## abstract factory

factory method 로 기본적인 요구사항을 충분히 만족할수있는데  
세부적으로 또 각각의 팩토리를 만들어서 그에 맞는 구현체를 만들어낼떄 사용  
즉 구체적인 내용은 각각의 팩토리내에 존재함

## template method

말이 좀 어렵긴하지만 단순하게 공통 로직을 부모클래스에 두고 자식클래스들이 그것을 공통적으로 사용하는것을 말함.  
부모클래스에 있는 공통 메소드 즉 템플릿안에는 추상메소드를 넣을수도 있고 그런데 내가 만든 로직은 비교적 간단하게 표현함.  
약간 `sandbox` 패턴하고도 조금 헷갈렸지만 사용 목적이 다른데 `template method` 는 공통기능을 위로 뺀다~ 라는 느낌이지만  
`sandbox` 는 이와다르게 위로 뺀것들을 이용해 하나의 공통 인터페이스로 묶어 자식클래스에 구현한다는 느낌으로만 파악하면 될듯

## state

객체 상태의 변화에 따라 유동적으로 보여주는 값이 달라야 하는게 핵심이라고 생각되기때문에 예제를 만들어보았다. 테스트코드를 보면 인위적으로 `employeeState` 을 세팅해주고있지만 예를들어 디비에서 별도의 `hireType` 이란게 선언되고 그 숫자값에 따라 `employeeState` 의 구현체가 변한다고 생각했다.  
본인도 해당 패턴이 `strategy` 패턴하고 완전 똑같다싶어서 많이 찾아보았었지만.. 주 목적은 다르지만 형태만 같은걸로 이해하면될듯

```
state - 조건문 대체
strategy - 상속 대체
```

## composite

이름만 봐서는 바로 파악하기 어려웠는데 정의를 알고나서 바로 파악이 되었다.  
`하나 이상의 유사한 객체를 구성으로 설계된 객체로 모두 유사한 기능을 나타내는것` 이라고 정의되어있는데 바로 드는 예제가 `폴더`, `파일` 구조라고 생각했다.  
그래서 예제를 만들긴했지만 뭔가 엉성하긴하다...ㅠ  
여기서 포인트는 복합객체나 단일객체나 모두 동일하게 취급한다는것에 목적을 두고 있다.

## singleton

싱글턴 패턴은 웬만해서는 잘 쓰이지않는 안티패턴이라 추가안할려고하다가  
`java`쪽는 멀티쓰레드이다보니 소스를 일부 다르게 짜는데 `javascript` 쪽은 어떨까싶어서 만들어보았다.  
역시 싱글쓰레드이다보니 많이 간단한듯싶다. 그래도 싱글턴보다는 `static` 으로 짜는게 낫다고 생각이 듦.

## factory-method

위에서 소개한 `abstract-factory`패턴하고 비슷하다고 느껴질수있는데  
각 컴포지트별로 세분화하여 만들때는 위에서 소개한걸쓰고 이외에 기본적인 요구사항을 반영할때는 `factory-method`패턴을 쓴다.  
단순히 생성이라는 책임을 자식클래스가 하는건 동일한데 컴포지트 단위로 생성한다는 개념이 살짝 다르다고 생각된다.

## adapter

`HasA`로 가지고있는것을 `IsA`로써 쓰고싶을때 사용한다.

## bridge

추상적인것과 구체적인것을 연결하고자 할때 사용한다고 하는데 사실 의미 파악이 잘 안되었다. ㅠㅠ  
근본적인것은 구현해야할것을 인터페이스로 분리해서 확장성있게 설계하고 그것을 사용하는 예를들어 예제로 만든 `user` 클래스를 상속받아  
n개의 자식클래스를 만들어도 그 구현부에는 큰 영향이 가지않도록 해야한다는것이다.
그래서 위키피디아를 보면 아래와 같이 되어있는데 계속해서 곱씹어 세기도록하자.

> 브리지 패턴(Bridge pattern)이란 구현부에서 추상층을 분리하여 각자 독립적으로 변형할 수 있게 하는 패턴이다.

## decorator

> 데코레이터 패턴(Decorator pattern)이란 주어진 상황 및 용도에 따라 어떤 객체에 책임을 덧붙이는 패턴으로,
> 기능 확장이 필요할 때 서브클래싱 대신 쓸 수 있는 유연한 대안이 될 수 있다.

위키에 보면 위와 같이 설명이 되어있는데 도무지 짐작할수없다..  
서브클래스를 대신해서 쓸수있다고 하는데 공부하면서 헷갈렸던 부분은 `decorator` 와 `bridge` 패턴의 차이이다.  
[스택오버플로우](https://stackoverflow.com/questions/48355238/difference-between-bridge-and-decorator-pattern)에서는 모든 클래스들이 공통된 수퍼클래스를 가지는게 `decorator` 라고 하고,  
`bridge`는 하나의 추상 수퍼클래스와 다른 구현체들로 나뉘고 그 수퍼클래스는 다른 구현체들을 `hasA` 관계로 설명하고있다.

## facade

이게 아마 제일 쉬운 패턴이 아닐까 싶은데 간단하게 말해서 복잡한거를 뒤로 감추는거다.  
즉 디비 연결을 해서 쿼리 날리는게 클라이언트쪽에 그대로 있다고 예상할때 그 소스들을 다른 클래스 내부로 옮겨  
보기 편하게끔 만드는 패턴이다.  
의존같은건 결국 뒤에 모두 있지만 기존보다 소스를 더 읽기쉽다면 이점이 있는 패턴.  
누구나 알고 누구나 쓸수있지만 이름을 모르는 그런 패턴인거같다..(사실 내가 그랬음).

## flyweight

자주 변하는 속성과 자주 변하지 않는 속성을 분리해서 객체를 가볍게 만들어 메모리 사용을 최소화 하는 패턴.
예전에 자바로 개발할때는 `weakHashMap` 구현체를 사용했었는데 뭐..그냥 일반 `hashMap` 을 사용해도 상관없을꺼같다.
다른 패턴들같은경우 보기쉽게 이런 개념으로 개발한건데 이것만큼은 성능에 영향을 주는 패턴이다.

## chain-of-responsibility

책임연쇄패턴을 적용해보면서 바로 생각이 든게 스프링시큐리티 공부할떄 배운 `filter chain` 이 생각났다.  
역시나 생각했던게 맞아서 신기했는데 앞으로 코딩할때 요긴하게 쓰일수있는 방법인거같다.  
다른 패턴에 비해 특징이 아주 명확함.

## command

invoker 자체는 변화하는게 없고 command 쪽만 변화하는 특징을 가진 패턴인데 다른 패턴들보다 이해하기 제일 어려웠다.  
그도그럴게 `invoker`, `command`, `concreteCommand`, `receiver` 4개의 키워드가 항상 딸려오는데  
이 부분의 정확한 특징과 실제 업무에서 어떻게 적용할수있을지 감이 안잡혔기때문이다.  
약간 위키를 보면서 외운게 없지않아 있지만 계속 곱씹어가면서 여러번 읽다보면 이해가 되긴했다.

> 커맨드 객체(command 인터페이스를 상속받은 구현체들)는 수신자 객체(command 가 동작을 해야하는 객체)를 가지고있으면서
> 수신자의 메소드를 호출하고 자신에게 정의된 메소드를 수행한다. 커맨드 객체는 별도로 발동자 객체에 전달되어 명령을 발동하게 한다. (여기서 발동자 객체란 invoker 에 해당한다.)
> 발동자 객체는 필요에 따라 명령 발동에 대한 기록을 남길수있다. 한 발동자 객체에 다수의 커맨드 객체가 전달될수있다. (요기서는 command 를 따로 히스토리를 남기는 객체를 두거나 할수있다.)
> 이제 사용하는 클라이언트 객체는 발동자 객체와 하나 이상의 커맨드 객체를 보유한다.
> 클라이언트 객체는 어느 시점에서 어떤 명령을 수행할지를 결정한다. 명령을 수행하려면, 클라이언트 객체는 발동자 객체로 커맨드 객체를 전달한다.

## iterator

루프되는것의 타입(aggregator)를 감추는게 주목적이고  
실제로 자바나 typescript 에 기본 api 로 같이 있다.  
나쁘진않지만 굳이 루프돌리기위해서 이걸 구현한다는게 그런 케이스가 별로 없을듯싶다.

## mediator

이름그대로 중재자라는 뜻인데 예를들어서 **client(고객) <-> restaurant(식당)** 이런 관계의 객체가 있을경우  
각자 서로의 객체를 가지고있다던지 결합도가 높은 상태인데  
이것을 가운데 **client(고객) <-> server(서버) <-> restaurant(식당)** 서버를 두는것이 이 패턴의 특징이다.  
실제 예제로 만든 소스는 좀 복잡할수도 있는데 `CommunicatedMediator` 가 비즈니스 로직같은것을 처리한다고 보면 된다.

## memento

이건 사용자에 따라 다른데 저장하고싶은 데이터를 따로 둬서 언제든지 이전 값으로 불러들일수있도록 값을 설정하는것이다.  
다만 일반 자료형일땐 상관없는데 객체일때는 문제가 될수있어서 예제파일에서는 임시로 JSON.stringfy 함수를 썼지만  
실제로 상용에서 쓸때는 `prototype` 패턴을 쓰든지 해야겠다.

## 참조

1. [위키백과 - 디자인패턴](https://ko.wikipedia.org/wiki/%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EB%94%94%EC%9E%90%EC%9D%B8_%ED%8C%A8%ED%84%B4)
2. [인프런 - 디자인 패턴](https://www.inflearn.com/course/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4)
3. [refactoring-guru](https://refactoring.guru/)
