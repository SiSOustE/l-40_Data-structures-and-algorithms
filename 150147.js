// Определение класса Node
class Node {
  constructor(element) {
    this.element = element; // Данные узла
    this.next = null;      // Указатель на следующий узел
  }
}

// Определение класса LinkedList
class LinkedList {
  constructor() {
    this.head = null; // Голова списка
    this.length = 0;  // Длина списка
  }

  // Метод для добавления элемента на определенную позицию
  addAt(element, position) {
    if (position < 0 || position > this.length) return null;

    const newNode = new Node(element);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let index = 0;

      while (index < position - 1) {
        current = current.next;
        index++;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    this.length++;
  }

  // Метод для добавления элемента в конец списка
  add(element) {
    const newNode = new Node(element);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.length++;
  }

  // Метод для удаления элемента по значению
  remove(element) {
    let current = this.head;
    let previous = null;

    while (current !== null) {
      if (current.element === element) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.length--;
        return current.element;
      }
      previous = current;
      current = current.next;
    }

    return null; // Если элемент не найден
  }

  // Метод для поиска индекса элемента
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }

    return -1; // Если элемент не найден
  }

  // Метод для вывода элементов списка в консоль
  printList() {
    let current = this.head;  // Переменная current используется для обхода всех узлов
    let list = [];
    while (current) {
      list.push(current.element); // Добавляем значение текущего узла в массив
      current = current.next; // Переходим к следующему узлу, обновляя current
    }
    console.log(list.join(' -> ')); // Преобразуем массив list в строку
  }

  // Метод для получения длины списка
  getLength() {
    return this.length;
  }

  // Метод для удаления элемента по позиции
  removeAt(position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }
}

// Создание экземпляра списка
const list = new LinkedList();

// Добавление элементов в список
console.log("Добавляем 'A' в конец списка");
list.add('A');
list.printList(); // Ожидаемый вывод: A

console.log("Добавляем 'B' в конец списка");
list.add('B');
list.printList(); // Ожидаемый вывод: A -> B

console.log("Добавляем 'C' на позицию 1");
list.addAt('C', 1);
list.printList(); // Ожидаемый вывод: A -> C -> B

// Поиск индекса элемента
console.log("Индекс элемента 'C': " + list.indexOf('C')); // Ожидаемый вывод: 1

// Удаление элемента по значению
console.log("Удаляем элемент 'C'");
list.remove('C');
list.printList(); // Ожидаемый вывод: A -> B

// Вывод длины списка
console.log("Длина списка: " + list.getLength()); // Ожидаемый вывод: 2