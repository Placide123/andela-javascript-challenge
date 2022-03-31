const array = ["Patrick wyne, 30", "lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22","Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"]


let newObject = {}

for (let i=0; i < array.length; i++) {
  if (array[i] !== undefined) {
    newObject[i] = array[i];
  }
}