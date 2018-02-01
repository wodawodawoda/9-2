var femaleNames = ['Ania', 'Małgorzata', 'Ewelina', 'Agata', 'Eliza'];
var maleNames = ['Mateusz', 'Piotr', 'Krzysztof', 'Maciej', 'Tomasz'];

femaleNames.push('Krystyna');
maleNames.splice(0, 0, 'Michał');

var allNames = femaleNames.concat(maleNames);

allNames