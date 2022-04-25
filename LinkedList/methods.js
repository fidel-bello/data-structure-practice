class node
{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedlist
{
    #head;
    #tail;
    #length;

    constructor(){
        this.#head;
        this.#tail;
        this.#length;
    }

    print(){
        for(let cur = this.#head; cur; cur = cur.next)
            console.log(cur.data);
    }

    insert_end(val){
        const newnode = new node(val);
        if(!this.#head)
            this.#head = this.#tail = newnode;
        else {
            this.#tail.next = newnode;
            this.#tail = newnode;
        }

       ++ this.#length;
    }

    insert_front(val){
        const newnode = new node(val);

        newnode.next = this.#head;
        this.#head = newnode;

        if(this.#length === 1)
            this.#tail = this.#head;

        ++ this.#length
    }

    reverse_list(){
        if(this.#length < 1)
            return;
        
        this.#tail = this.#head;
        let prv = this.#head;

        this.#head = this.#head.next;
        while(this.#head) {
            let next = this.#head.next;
            this.#head.next = prv;

            this.#tail.next = null;
            prv = this.#head;
            this.#head = next;
        }

        this.#head = prv;
    }
}


function methods(){
    let ll = new linkedlist();
    ll.insert_end(6);
    ll.insert_end(7);
    ll.insert_front(5);
    ll.print();
    ll.reverse_list();
    ll.print();
}

methods();
