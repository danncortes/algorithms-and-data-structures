class Graph {
    adjacencyList: { [key: string]: string[]} = {}
  constructor() {
  }
  addVertex(vertex: string) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  removeVertex(vertex: string) {
    if(vertex in this.adjacencyList) {
        const edges = this.adjacencyList[vertex];
        for(let edge of edges) {
            this.removeEdge(vertex, edge);
        }
        delete this.adjacencyList[vertex];
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    if(vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1: string, vertex2: string) {
    if(vertex1 in this.adjacencyList && vertex2 in this.adjacencyList) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  }
}

export default () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('D', 'E');
    console.log("🚀 ~ graph:", graph);
}