const args = process.argv.slice(2);

for (let num of args) {
  if (num < 0 || args === [] || Number(num) != num) {
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000)
  }

}

//EXAMPLE
// In command line: node timer1.js 5 3 7 2 -8 4 bird 15
// You will hear 'beep' 6 times