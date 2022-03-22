//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

//max 100, min 0
//less than 40 ? fail : pass
//if difference between grade and the next multiple of 5 is less than 3 => round up to the next multiple of 5
//if value of grade is less than 38 => no rounding

function gradingStudents(grades) {

  return grades.map(grade => {
    const round = Math.ceil((grade + 1) / 5) * 5;
    return (round - grade < 3) && grade >= 38 ? round : grade;
  });

  return grades;
}

//console.log(gradingStudents([73,67,38,33]));

//The function accepts following parameters:
//  *  1. INTEGER s - house start
//  *  2. INTEGER t - house end
//  *  3. INTEGER a - apple tree point
//  *  4. INTEGER b - orange tree point
//  *  5. INTEGER_ARRAY apples
//  *  6. INTEGER_ARRAY oranges
//https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
function countApplesAndOranges(houseStart, houseEnd, appleTree, orangeTree, apples, oranges) {

  const applesToHouse = apples.map(appleDistance => {
    return appleDistance + appleTree;
  });

  const orangesToHouse = oranges.map(orangesDistance => {
    return orangesDistance + orangeTree;
  });

  const trueApples = applesToHouse.filter(appleDistance => appleDistance >= houseStart && appleDistance <= houseEnd);
  const trueOranges = orangesToHouse.filter(orangeDistance => orangeDistance <= houseEnd && orangeDistance >= houseStart);

  console.log(trueApples.length + "\n" + trueOranges.length);
}

//countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);


//https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
/*Complete the 'kangaroo' function below.
  The function is expected to return a STRING.
  The function accepts following parameters:
  1. INTEGER x1 - start location
  2. INTEGER v1 - distance per jump
  3. INTEGER x2 - start location
  4. INTEGER v2 - distance per jump
*/

//timeout on this solution
/*
function kangaroo(x1, v1, x2, v2) {
  if (v2 > v1 && x2 > x1)
    return "NO";

  let distance1 = x1;
  let distance2 = x2;
  while (distance1 !== distance2) {
    distance2 += v2;
    distance1 += v1;
  }

  return "YES";
}
*/

function kangaroo(x1, v1, x2, v2) {
  if (v2 > v1)
    return "NO";

  if ((x2 - x1) % (v1 - v2) == 0)
    return "YES";

  return "NO";
}

//consol
// e.log(kangaroo(0, 3, 4, 2));

class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printLinkedList(head) {
  let node = head;
  while (node !== null) {
    console.log(node.data);
    node = node.next;
  }
}

let node1 = new SinglyLinkedListNode(0);
let node2 = new SinglyLinkedListNode(1);
let node3 = new SinglyLinkedListNode(2);
let node4 = new SinglyLinkedListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;

//console.log(printLinkedList(node1));

function insertNodeAtTail(head, data) {
  if (!head)
    return new SinglyLinkedListNode(data);

  let current = head;

  while (current.next) {
    current = current.next;
  }

  current.next = new SinglyLinkedListNode(data);
  return head;
}

let node5 = new SinglyLinkedListNode(4);

//console.log(insertNodeAtTail(node1, node5))

function insertNodeAtHead(head, data) {
  const newHead = new SinglyLinkedListNode(data);
  newHead.next = head;
  return newHead;
}

//console.log(insertNodeAtHead(node1, node5))

function deleteNode(llist, position) {

  if (position === 0)
    return llist.next;

  let currentNode = llist;
  let positionCounter = 0;

  while (positionCounter !== position - 1 && currentNode.next != null) {
    currentNode = currentNode.next;
    positionCounter++;
  }
  if (position === positionCounter)
    currentNode.next = null;

  if (currentNode.next === null)
    return currentNode;
  else if (currentNode.next.next === null)
    currentNode.next = null;
  else if (currentNode.next.next !== null)
    currentNode.next = currentNode.next.next;

  return llist;
}

//console.log(deleteNode(node1, 0));
//console.log(deleteNode(node5, 0));
//console.log(deleteNode(node5, 2));
//console.log(deleteNode(node1, 3));

//https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/problem?isFullScreen=true

/*function reversePrint(llist) {
  let previous = null;
  let current = llist;
  let next = null;

  while (current != null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    if (next != null)
      console.log(next.data);
  }
  llist = previous;
  return llist;
}*/

function reversePrint(llist) {
  if (!llist) return;
  reversePrint(llist.next);
  console.log(llist.data);
}

console.log(reversePrint(node1));
