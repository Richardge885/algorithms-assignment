// graph implemented as a object structure
const graph = {
    A: {
        id: 'A',
        name: 'Handsworth',
        neighbours: {
            B: 2,
            D: 1
        }
    },
    B: {
        id: 'B',
        name: 'Handsworth Woods',
        neighbours: {
            A: 2,
            C: 4,
            D: 3
        }
    },
    C: {
        id: 'C',
        name: 'Saltey',
        neighbours: {
            B: 4,
            G: 5,
            I: 3,
            E: 7
        }
    },
    D: {
        id: 'D',
        name: 'Smethwick',
        neighbours: {
            A: 1,
            B: 3,
            E: 4,
            F: 5
        }
    },
    E: {
        id: 'E',
        name: 'Birmingham City Center',
        neighbours: {
            D: 4,
            F: 3,
            C: 7,
            H: 5
        }
    },
    F: {
        id: 'F',
        name: 'Edgbaston',
        neighbours: {
            D: 5,
            E: 3
        }
    },
    G: {
        id: 'G',
        name: 'Lea Hall',
        neighbours: {
            C: 5,
            J: 4,
            H: 11
        }
    },
    H: {
        id: 'H',
        name: 'Tyseley',
        neighbours: {
            E: 5,
            I: 5,
            G: 11,
            K: 6
        }
    },
    I: {
        id: 'I',
        name: 'Smoll Heath',
        neighbours: {
            C: 3,
            H: 5
        }
    },
    J: {
        id: 'J',
        name: 'Marston Green',
        neighbours: {
            G: 4,
            K: 3
        }
    },
    K: {
        id: 'K',
        name: 'Elmdon',
        neighbours: {
            J: 3,
            H: 6
        }
    }
};

/**
 *
 * @param {Object} graph Graph Object
 * @param {String} startNode From where
 * @param {String} endNode To where
 * @returns
 */
function shortestPath(graph, startNode, endNode) {
    // Initialize the distances and visited nodes arrays
    const distances = {};
    const visited = {};
    const parents = {};
    Object.keys(graph).forEach((node) => {
        distances[node] = Infinity;
        visited[node] = false;
        parents[node] = null;
    });

    // Set the distance to the starting node to 0
    distances[startNode] = 0;

    // Loop through all the nodes
    let currentNode = startNode;
    while (currentNode !== endNode) {
        // Get the neighbours of the current node
        const neighbours = graph[currentNode].neighbours;
        Object.keys(neighbours).forEach((neighbour) => {
            // Calculate the distance to the neighbour through the current node
            const distance = distances[currentNode] + neighbours[neighbour];
            // Update the distance and parent if the new distance is shorter
            if (distance < distances[neighbour]) {
                distances[neighbour] = distance;
                parents[neighbour] = currentNode;
            }
        });
        // Mark the current node as visited
        visited[currentNode] = true;

        // Find the unvisited node with the shortest distance
        let shortestDistance = Infinity;
        let shortestNode = null;
        Object.keys(distances).forEach((node) => {
            if (!visited[node] && distances[node] < shortestDistance) {
                shortestDistance = distances[node];
                shortestNode = node;
            }
        });

        // If no unvisited nodes were found, break out of the loop
        if (shortestNode === null) {
            break;
        }

        // Set the current node to the node with the shortest distance
        currentNode = shortestNode;
    }

    // Build the path by following the parent pointers from the end node
    const path = [];
    let node = endNode;
    while (node !== null) {
        path.unshift(graph[node].name);
        node = parents[node];
    }

    // Return the path and distance as an object
    return {
        path: path,
        distance: distances[endNode]
    };
}

module.exports = { graph, shortestPath };
