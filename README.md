# design pattern with typescript

타입스크립트로 간단한 디자인패턴 적용시켜보는 잡 프로젝트 
기본적으로 `npm run test` 를 통해서 각 디자인패턴 결과를 확인할수있음  

## abstract factory

factory method 로 기본적인 요구사항을 충분히 만족할수있는데  
세부적으로 또 각각의 팩토리를 만들어서 그에 맞는 구현체를 만들어낼떄 사용  
즉 구체적인 내용은 각각의 팩토리내에 존재함  