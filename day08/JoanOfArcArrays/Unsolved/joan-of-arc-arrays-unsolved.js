// Joan of Arc "properties".
var joanOfArcInfoParts = ['Real Name', 'Grew Up Where', 'Known For', 'Scars', 'Symbolism']

// Values for Joan's "properties".
var joanOfArcInfoValues = [
  'Jehanne la Pucelle.',
  'Domremy, a village in northeastern France.',
  'Peasant girl, daughter of a farmer, who rose to become Commander of the French army.',
  'Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris.',
  'Stands for French unity and nationalism.'
]

let joanOfArcInfo = {
  name: 'Jehanne la Pucelle ',
  hometown: 'Domremy, a village in northeastern France',
  knownFor:
    'Peasant girl, daughter of a farmer, who rose to become Commander of the French army',
  scars:
    'Took an arrow to the shoulder and a crossbow bolt to the thigh while trying to liberate Paris',
  symbolism: 'Stands for French unity and nationalism',
  battleCry () {
    console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! MY NAME IS ${this.name}`);
  }
}
