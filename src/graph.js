const parsePairs = function (pairs) {
  const graph = {};
  pairs.forEach((pair) => {
    const parent = pair[0];
    if (graph[parent] === undefined) {
      graph[parent] = [];
    }
    graph[parent].push(pair[1]);
  });
  return graph;
};

const getChildren = (graph, parent) =>
  graph[parent] === undefined ? [] : graph[parent];

const updateVisited = (visited, newElements) => {
  newElements.forEach((element) => {
    visited.add(element);
  });
};

const filterNonVisited = (graph, parent, visited) => {
  const children = getChildren(graph, parent);
  return children.filter((element) => !visited.has(element));
};

const validatePath = (graph, target, queue, visited) => {
  while (queue.length !== 0) {
    const currentElement = queue.shift();
    if (currentElement == target) {
      return true;
    }
    const nonVisited = filterNonVisited(graph, currentElement, visited);
    queue = queue.concat(nonVisited);
    updateVisited(visited, nonVisited);
  }
  return false;
};

const bfs = function (pairs, source, target) {
  const graph = parsePairs(pairs);
  const queue = getChildren(graph, source);
  const visited = new Set();
  updateVisited(visited, queue);
  return validatePath(graph, target, queue, visited);
};

module.exports = { bfs };
