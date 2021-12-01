const Queue = () => {
  let items = {};
  let tail = 0; // Points to next available tail for enqueue
  let head = 0;

  function enqueue(item) {
    items[tail] = item;
    tail++;
  }

  function dequeue() {
    if (head >= tail) throw new Error("Can not dequeue an empty queue");

    const deletedItem = items[head];
    delete items[head];
    head++;
    return deletedItem;
  }

  function peek() {
    if (head >= tail) throw new Error("Can not peek an empty queue");
    return items[head];
  }

  function length() {
    return tail - head;
  }

  return { enqueue, dequeue, peek, length };
};
