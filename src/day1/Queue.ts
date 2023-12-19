type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    // head = start of the queue or first value;
    private head?: Node<T>;
    // taile = end of the queue or last value;
    private tail?: Node<T>;

    constructor() {
        this.tail = this.head = undefined;
        this.length = 0;
    }

    // js version of unshift;
    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;

        if (!this.tail) {
            this.tail = this.head = node;
        }

        // pointing our tail to another element i.e recently added.
        this.tail.next = node;
        // assigning our tail to recently added value;
        this.tail = node;
    }
    // js version of shift;
    deque(): T | undefined {
        if (!this.head) return undefined;

        this.length--;

        // creating head for reference
        const head = this.head;
        // assigning our head to next value, cause its previous value is being removed.
        this.head = head.next;

        // free space (optional cause js does itself)
        head.next = undefined;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
