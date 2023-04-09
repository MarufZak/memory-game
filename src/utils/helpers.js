export function range(start, end, step = 1) {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
}

export function randomRepeatedRange(end) {
  const range = [];
  for (let i = 1; i <= end; i++) {
    range.push(i);
  }
  const result = range.concat(range);
  return shuffleArray(result);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function addZero(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num;
}
