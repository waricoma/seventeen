for (let age = 0; age < 100; age++) {
  for (let i = 2; i < 36; i++) {
    if (age.toString(i) === '17') {
      console.log(`${age}は${i}進数で17です`);
      break;
    }
  }
}
/*
15は8進数で17です
16は9進数で17です
17は10進数で17です
18は11進数で17です
19は12進数で17です
20は13進数で17です
21は14進数で17です
22は15進数で17です
23は16進数で17です
24は17進数で17です
25は18進数で17です
26は19進数で17です
*/