//!failed

/**
 * heads of sorted list
 * list 1 and list 2
 * merge two lists
 * into one sorted list
 *
 */
// used for making a list
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

const mergeTwoLists = (arr1, arr2) => {
  let head = [];
  let list1 = createTestCase(arr1);
  let list2 = createTestCase(arr2);

  while (list1 || list2) {
    switch (true) {
      case !list2:
        head.push(list1.val);
        list1 = list1.next;
        break;
      case list1.val < list2.val:
        head.push(list1.val);
        list1 = list1.next;
      case list2.val < list1.val:
        head.push(list2.val);
        list2 = list2.next;
      case list1.val === list2.val:
        head.push(list1.val);
        list1 = list1.next;
      default:
        console.log('default ran');
        if (list1) list1 = list1.next;
        if (list2) list2 = list2.next;
        break;
    }
    while (list2) {
      switch (true) {
        case !list1:
          head.push(list2.val);
      }
    }
  }
  console.log(head);
};

// const res = mergeTwoLists([1, 2, 4], [1, 3, 4]);
// console.log(res);
