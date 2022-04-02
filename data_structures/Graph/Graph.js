class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
  }

  //undirected graph
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
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
}
