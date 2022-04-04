const PriorityQueue = require("../PriorityQueue");
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
        }
    }

    //undirected graph
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }

    DfsRecursive(startVertex) {
        const visited = {};
        const result = [];
        const list = this.adjacencyList;

        (function helper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            list[vertex].forEach((v) => {
                if (!visited[v]) return helper(v);
            });
        })(startVertex);

        return result;
    }

    DfsIterative(startVertex) {
        const trackVertices = [startVertex];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[startVertex] = true;

        while (trackVertices.length) {
            currentVertex = trackVertices.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    trackVertices.push(v);
                }
            });
        }

        return result;
    }

    BfsIterative(startVertex) {
        const queue = [startVertex];
        const visited = {};
        const result = [];
        let current;
        while (queue.length) {
            current = queue.shift();
            visited[current] = true;
            result.push(current);

            this.adjacencyList[current].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    queue.unshift(v);
                }
            });
        }
        return result;
    }

    //Dijkstra's Algorith -- Find the shortest path betweent two vertexs
    DijkstrasAlgorithm = (startVertex, endVertex) => {
        const distances = {};
        const queue = new PriorityQueue();
        const previous = {};
        let currentVertex;

        for (let vertex in this.adjacencyList) {
            if (vertex === startVertex) {
                distances[vertex] = 0;
                queue.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                queue.enqueue(vertex, Infinity);
            }

            previous[vertex] = null;
        }

        while (queue.values.length) {
            currentVertex = queue.dequeue().val;
            if (currentVertex === endVertex) return;

            if (currentVertex || distances[currentVertex] !== Infinity) {
                for (let closeNode in this.adjacencyList[currentVertex]) {
                    let nextNode = this.adjacencyList[currentVertex][closeNode];
                }
            }
        }
    };
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.DijkstrasAlgorithm("A", "E");
