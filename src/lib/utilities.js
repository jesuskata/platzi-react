import React from 'react';

// --- Da formato de 00 a un número dado
export const leftPad = (number) => {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

// --- Da formato 00 : 00 (min : seg) a una cantidad de segundos dada
export const formattedTime = (secs) => {
  const minutes = parseInt(secs / 60, 10);
  const seconds = parseInt(secs % 60, 10);
  return `${minutes} : ${leftPad(seconds.toString())}`
}