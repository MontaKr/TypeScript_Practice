let myName: string = "철수";
let yourName: string = "영희";
let myArray: string[] = ["바둑이", "백구"]; // 배열
let myObject: { name?: string } = { name: "철수" }; // 오브젝트
let otherName: string | number = "3"; // 문자열이나 숫자 가능

// 함수의 인자가 무조건 숫자여야하고 결과도 숫자여야함
function 함수(x: number): number {
  return x * 2;
}

//튜플
type Member = [number, boolean];
let john: Member = [123, true];

//오브젝트 속성 한번에 설정
type newMember = {
  [key: string]: string; // key가 문자열일 때 value는 문자열이어야 함
};

let mark: newMember = { name: "mark" };
