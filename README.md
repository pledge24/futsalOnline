# Welcome to our FutsalOnline API!
<img src="https://github.com/pledge24/futsalOnline/assets/104922729/a4bfa5cc-50cb-4ff3-a586-505a4229c523">

# 게임 로직 설명서

## 가챠 시스템

- 선수는 총 47명이 있습니다.
- 선수는 희귀도가 존재합니다. 브론즈, 실버, 골드 선수가 있으며 희귀도에 따른 선수 비율은 6:3:1입니다.(플레티넘 제외)
- Platinum 카드(즐라탄 9번)가 등장할 확률은 1/1000 입니다. (Platinum 카드가 등장할 확률은 나머지 카드 연산이 시작하기 전에 먼저 실행됩니다.)
- 뽑기 횟수의 선택지는 단챠와 10연차만 가능합니다.
- 뽑기 횟수는 1회당 100 게임 머니가 소비됩니다.

## 강화 시스템

- 모든 선수의 강화 확률은 **강화 수치와 상관없이 100% 입니다.**
- **기본적으로 0강만 재료로 사용하며** 강화를 할 때마다 필요한 재료가 1개씩 늘어납니다. ex) +3 → +4 0강 4개 필요
- 강화스탯은 기본적으로 올스텟에 적용됩니다. 자세한 정보는 아래 표를 참조해주세요.

### 강화시 능력치 변동 표
<img src="https://github.com/pledge24/futsalOnline/assets/104922729/6dd253a3-cd9b-406e-a614-3422f4b62348">


## **게임 시스템**

### 게임 플레이

- 기본적으로 내 구단에 3명의 선수가 있고 상대도 동일하게 3명의 선수가 있어야 플레이를 할 수 있습니다.
- 게임을 시작하면 스탯 가중치로 계산을 하여 총 점수를 계산해 나와 상대방의 총 점수를 계산하여 점수 비율을 통한 골 득점 확률을 얻습니다. ex) 총점수: 300 나: 100, 상대:200 ⇒ 골 득점 확률: 33% :66%)
- 설정한 골 시도 횟수(기본값 10)만큼 반복하여 나와 상대의 골 점수를 얻습니다. ex)

물론 점수가 낮다 해도 이길 수 있습니다. 예로 한국과 독일전에서 한국이 이긴 것 처럼요.

### 스텟 가중치 설정 표
<img src="https://github.com/pledge24/futsalOnline/assets/104922729/64f2eec3-c3c1-418a-be3d-9e169b9fd5fe">

### 랭크게임

- 큐를 돌렸을 때 나와 비슷한 레이팅 점수를 가지는 유저와 매칭이 됩니다. 만약, 적절한 상대가 없는 경우 매칭 범위를 확장합니다. (기본 범위 -100~100)
- 매칭 범위는 찾지 못했을 때 범위가 2배씩 늘어나며, 최대 -1600~1600까지 검색합니다.
- 게임결과에 따라 레이팅 점수가 변동되며 승리시 100, 패배시 -100으로 조정됩니다. 상대 또한 조정됩니다.
- 랭크 점수는 0보다 작을 수 없습니다.

### 커스텀게임

- 유저를 검색(account_id로 검색)해 자유롭게 플레이를 합니다.
- 하지만 3명의 선수가 있어야 플레이할 수 있는건 동일합니다.
- 커스텀 게임은 랭크 점수 변동이 발생하지 않습니다.

# API 명세서

https://unmarred-september-484.notion.site/futsalOnline-API-1d82dea5c7fa4dd9a23aa2971ba1661a
