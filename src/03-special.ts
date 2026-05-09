//  union types

let title: string | number | undefined;
title = undefined;

//  void : when function does not return usefull values

function printMsg(msg: string): void {
  console.log(msg);
}

// never returns: never

function errorMsg(msg: string): never {
  throw new Error(msg);
}

//  do not use any -- try to ignore as much as possible
