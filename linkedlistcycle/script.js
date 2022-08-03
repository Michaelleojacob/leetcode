/**
 * my first solution.
 * two pointers
 * one fast pointer one slow pointer
 * chance of going through number of operations x2-x3.
 *
 */

var hasCycle = function (head) {
  if (!head) return false;
  let slowPointer = head;
  let fastPointer = head.next;
  while (slowPointer !== fastPointer) {
    if (!fastPointer) return false;
    if (!fastPointer.next) return false;
    if (!fastPointer.next.next) return false;
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return slowPointer === fastPointer ? true : false;
};

/**
 * much cleaner version:
 * makes use of head (param/arg) as the slow pointer
 *
 */
var hasCycle2 = function (head) {
  let fastPointer = head;
  while (fastPointer && fastPointer.next) {
    head = head.next;
    fastPointer = fastPointer.next.next;
    if (head == fastPointer) return true;
  }
  return false;
};

/**
 * same but does two defined pointers again
 * also 3 while(true, true, true) checks (line 46)
 */

var hasCycle3 = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }

  return false;
};
