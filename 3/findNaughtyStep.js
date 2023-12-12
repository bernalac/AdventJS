/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.
Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

/*
A tener en cuenta:
1 - Siempre habrá un paso de diferencia o ninguno.
2 - La modificación puede ocurrir en cualquier lugar de la cadena.
3 - La secuencia original puede estar vacía.
*/

function findNaughtyStep(original, modified) {
  for (let i = 0; i < modified.length; i++) {
    if (original[i] !== modified[i]) {
      return modified[i];
    }
  }
  return '';
}

const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''
