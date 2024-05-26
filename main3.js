// Знаходимо індекс елемента item у масиві array
// Якщо елемент знайдено (індекс не дорівнює -1)
// Видаляємо елемент за допомогою splice
function removeElement(array, item) {
 const index = array.indexOf(item)
 if (index > -1) {
  array.splice(index, 1)
 }
}
const newArray = [1, 3, 4, 5, 67, 8]
removeElement(newArray, 3)
console.log(newArray)



//виводимо