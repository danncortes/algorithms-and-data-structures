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

    depthFirstSearch(start: string): string[] {
        const visited: { [key: string]: boolean } = {};
        
        function visitVertex(list: string[], visited: { [key: string]: boolean }, adjacencyList: { [key: string]: string[] }): string[] {
            const next = list.filter((v: string) => !visited[v]);

            for(let i = 0; i < next.length; i++) {
                const nextVertex = next[i];
                visited[nextVertex] = true;
                if(adjacencyList[nextVertex].some((v: string) => !visited[v])) {
                    return [nextVertex, ...visitVertex(adjacencyList[nextVertex], visited, adjacencyList)]
                } else {
                    const newList = next.slice(i + 1);
                    if(newList.length) {
                        return [nextVertex, ...visitVertex(newList, visited, adjacencyList)]
                    } else {
                        return [nextVertex];
                    }
                }
            }
            
            return [];
        }

        visited[start] = true;
        
        return [start, ...visitVertex(this.adjacencyList[start], visited, this.adjacencyList)];
    }
}

export default () => {
    const graph = new Graph();
    graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');
 
graph.addEdge('S','P');
graph.addEdge('S','U');
 
graph.addEdge('P','X');
graph.addEdge('U','X');
 
graph.addEdge('P','Q');
graph.addEdge('U','V');
 
graph.addEdge('X','Q');
graph.addEdge('X','Y');
graph.addEdge('X','V');
 
graph.addEdge('Q','R');
graph.addEdge('Y','R');
 
graph.addEdge('Y','W');
graph.addEdge('V','W');
 
graph.addEdge('R','T');
graph.addEdge('W','T');
    console.log(graph.adjacencyList);
    console.log(graph.depthFirstSearch('S'));
}