function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createTestCase(array) {
  let head;
  let curr;
  for (const val of array) {
    node = new ListNode(val);
    if (curr) {
      curr.next = node;
    }
    if (!head) {
      head = node;
    }
    curr = node;
  }
  return head;
}

const createNodeList = (val, next) => {
  val;
};

var mergeTwoLists = function (arr1, arr2) {
  // new head
  const head = {};
  let list1 = createTestCase(arr1);
  let list2 = createTestCase(arr2);

  // check if list1.val is > OR < list2.val
  console.log(list1.next.next);

  //loop through list1
  // list.next
  // as long as list.next !== null
  // while (list1 !== null) {
  //   console.log(list1.val);
  //   list1 = list1.next;
  // }

  // loop
  // condition find which list val is lower
  // push lower val to head
  // increment that list
  while (list1 !== null || list2 !== null) {
    let val;
    list1.val > list2.val ? (val = list1.val) : (val = list2.val);
  }

  // push smaller value to head
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);

// const head = new ListNode(1);

// head.next = new ListNode(2);

// head.next.next = new ListNode(4);

// console.log(head);

// ==============================================

// const mergeTwoLists = function (list1, list2) {
//   if (!list1) {
//     return list2;
//   }
//   if (!list2) {
//     return list1;
//   }
//   if (list1.val < list2.val) {
//     list1.next = mergeTwoLists(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeTwoLists(list1, list2.next);
//     return list2;
//   }
// };
