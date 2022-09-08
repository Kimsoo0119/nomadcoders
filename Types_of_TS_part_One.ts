const player: {
  name: string;
  age?: number; //?를 붙이면 선택적 변수(optional parameter)를 지정 할 수 있음
} = {
  name: "kim",
};

if (player.age && player.age < 10) {
}

const playerKim: {
  name: string;
  age?: number;
} = {
  name: "kim",
};

const playerLee: {
  name: string;
  age?: number;
} = {
  name: "kim",
};

//Alias(별칭) Alias를 사용하면 코드 재사용성이 높아짐
type Player = {
  name: string;
  age?: number;
};

const kim: Player = {
  name: "soo",
  age: 24,
};

const lee: Player = {
  name: "sin",
  age: 24,
};

//function에서의 타입 지정
function plyerMaker(name: string): Player {
  return {
    name,
  };
}
const kimkim = plyerMaker("kimsoo");
kimkim.age = 12; //age를 추가하려면 playerMaker의 리턴값에 Player타입을 추가

const playerMakerr = (name: string): Player => ({ name });
const lees = playerMakerr("leesin");
lees.age = 12;
