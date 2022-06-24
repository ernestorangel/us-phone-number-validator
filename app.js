function telephoneCheck(str) {

  str = str.split(' ').join('')

  let allowedRegexes = [
    /^\d{10}$/g,
    /^[1]\d{10}$/g,
    /^\(\d{3}\)\d{7}$/g,
    /^\d{3}\-\d{3}\-\d{4}$/g,
    /^\(\d{3}\)\d{3}\-\d{4}$/g,
    /^[1]\d{3}\-\d{3}\-\d{4}$/g,
    /^[1]\(\d{3}\)\d{7}$/g,
    /^[1]\(\d{3}\)\d{3}\-\d{4}$/g
  ]

  for (let i = 0; i < allowedRegexes.length; i++) {

    if (allowedRegexes[i].test(str)) {
        console.log(str + ' é valido!');
        return true;
        
    };

  }

  console.log(str + ' NÃO é valido!');
  return false;

};

telephoneCheck("555-555-5555");