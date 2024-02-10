// 문제: 제네릭을 활용하여 다양한 타입의 데이터를 처리할 수 있는 큐(Queue) 데이터 구조를 구현해보세요. 
// GenericQueue<T>라는 이름의 클래스 생성
/*
메서드/속성 구현:
1. enqueue(item: T): 큐의 맨 끝에 새로운 아이템을 추가합니다.
2. dequeue(): 큐의 맨 앞에 있는 아이템을 제거하고 반환합니다. (큐가
비어있을 경우 undefined를 반환합니다)
3. peek(): 현재 큐에 맨 앞에 있는 아이템을 반환합니다
4. size(): 큐의 현재 크기 반환
*/

class GenericQueue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }
}

const stringQueue = new GenericQueue<string>();

stringQueue.enqueue("Hello");
console.log(stringQueue.peek());
stringQueue.dequeue();
stringQueue.enqueue("typeScript");
console.log(stringQueue.size());
console.log(stringQueue.peek());

const numberQueue = new GenericQueue<number>();

numberQueue.enqueue(1);
