# toy project - oAuth2.0
## 구현 사항
1. 카카오, 구글의 소셜 로그인이 수행 되어야 합니다.
    * api 통신에는 ![Axios](https://github.com/axios/axios)라는 framework를 사용합니다.
2. 로그인 여부에 따라 표시되는 정보가 달라집니다.
    * 로그인이 되었을때는 유저의 이메일, 이름이 보여집니다.
    * 로그인이 되지 않았을때는 로그인 창이 보입니다.
        * 디자인 가이드는 참고자료를 참고하세요
            * 디자인이 우선사항이 아니니, 간단한 버튼 형태로 구현해 주세요.
3. 다음의 테스팅을 실행해주시고, 통과해주세요.
    1. oAuth api를 통해 인증할때, 인증 유무에 따라 레이아웃이 잘(특정 텍스트, 이미지 등 포함 여부) 출력되는가?
    2. 유저가 로그아웃 했을때, 로그인 창이 다시 잘 뜨는가?
4. 두분이서 위의 사항을 모두 만족하셨다면, 함께 작업했던 branch에 회고(아래 참고)와 함께 Pull Request를 날려주세요.
## 현재 적용된 규칙들
1. commitlint
    * commit message의 형태는 다음과 같습니다.
        ```
        <Type>: Short description
        ```
    * 자세한 사항은 다음 문서를 참고해주세요 [commit message convention](https://github.com/DevKor-Team/devkor_hackathon_back/blob/develop/.github/COMMIT_MESSAGE_CONVENTION.md)
    * 만약 commit message의 포맷이 맞지 않으면, commit이 되지 않습니다.
2. eslint
    * 이 프로젝트에서는 eslint라고 하는 automatic code formatter를 사용합니다. 
    * eslint plugin이 있으면 잘못된 포맷을 바로바로 빨간줄로 보여줍니다.
    * lint와 testing은 매 push마다 실행됩니다. 각 단계를 통과하지 못하면 push가 되지 않습니다.
3. testing
    * `__test__` 폴더 내에는 test 파일들이 들어갑니다. 
    * 해당 폴더 내에 test 파일을 작성해주세요.
    * lint와 testing은 매 push마다 실행됩니다. 각 단계를 통과하지 못하면 push가 되지 않습니다.

## 해결해야할 핵심 문제들
<details>
<summary>스스로 생각해볼 수 있다면 혼자서 해보기!</summary>
<div markdown="1">

1. react에서 state는 창이 새로고침되면 사라진다. 그러나 일반적인 페이지는 새로고침시에도 로그인이 유지된다. 이를 어떻게 해결할 것인가?
    * 사용 스택
        * react hook (useState, useEffect)
        * axios
2. 로그인 테스팅을 실행할때, 테스팅을 어떻게 실행할 것인가?
    * api만 따서?
    * state에 따른 component안에 있는 text?
    * 잘 조합해서 사용해보자
    * 만약 필요하다면 enzyme 등의 다른 testing library를 사용해도 무방하다.
        * 설치가 어려우시면 도와드리겠습니당
</div>
</details>

## 실행 방법
1. 먼저 nodejs와 yarn이 설치되있어야 합니다.
    * node : https://nodejs.org/en/
    * yarn : https://yarnpkg.com/
2. vscode 내에서 다음의 플러그인을 설치해주세요
    1. eslint
        ```
        Name: ESLint
        Id: dbaeumer.vscode-eslint
        Description: Integrates ESLint JavaScript into VS Code.
        Version: 2.2.2
        Publisher: Dirk Baeumer
        VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
        ```
    2. prettier
        ```
        Name: Prettier - Code formatter
        Id: esbenp.prettier-vscode
        Description: Code formatter using prettier
        Version: 9.0.0
        Publisher: Prettier
        VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
        ```
3. 다음의 명령어를 실행합니다. 자세한 명령어는 `package.json`을 참고해주세요.
    ```bash
    yarn # 패키지 설치
    yarn husky # git hooks 설치용
    yarn dev # 개발 서버 실행
    ```

## 참고 자료
### testing
* jest docs - https://jestjs.io/
* react testing docs - https://testing-library.com/docs/react-testing-library/intro/
### 구현
* https://www.hacksoft.io/blog/google-oauth2-with-django-react-part-2
### 디자인
* oAuth2.0 디자인 가이드
    * https://developers.google.com/identity/branding-guidelines
    * https://developers.kakao.com/docs/latest/ko/reference/design-guide

## 회고합시다!
**develop branch에 PR을 날릴때 항목별로 한줄 회고를 남겨주세요** 실제 프로젝트 진행할때 반영하겠습니다.
1. 프로젝트를 진행하면서 가장 어려웠던 부분은? (테스팅? linting? git? 구현?)
2. 프로젝트를 진행하면서 불필요하다고 생각되었던 부분은? (ex. 과도한 linting 규칙, testing)