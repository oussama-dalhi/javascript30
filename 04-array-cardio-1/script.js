   const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

      // 1. Filter those were born in the 1500's
    const fiftens = inventors.filter(i => i.year < 1600 && i.year > 1499);
    console.table(fiftens);

    // 2. return an array of the inventors first and last names
    const fullName = inventors.map(e => `${e.first} ${e.last}`);
    console.table(fullName);

    // 3. Sort the inventors by birthdate, oldest to youngest
    const oldToYoung = inventors.sort((a, b) => {return -(a.year - b.year)});
    console.table(oldToYoung);

    // 4. How many years did all the inventors live all together?
    const sumOfYears = inventors.reduce((acc, e) => {return acc + (e.passed - e.year)}, 0);
    console.log(sumOfYears);

    // 5. Sort the inventors by years lived
    const sortByYears = inventors.map(e => e.passed - e.year).sort((a, b) => -(a - b));
    console.table(sortByYears);

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
   // Sort the people alphabetically by last name
    const alpha = people.sort(function(a, b){
      const [aLast, aFirst] = a.split(', ');
      const [bLast, bFirst] = b.split(', ');
      return aFirst > bFirst ? 1 : -1;
    });
    
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const indices = data.reduce((obj, item) => {
      if(!obj[item])
        {
          obj[item] = 0
        }

        obj[item]++;
        return obj;
    }, {});
