# Tools
- mathematica
- vscode
- math
- programming
- github

# Partitioning
- lines
- points
- surface of a sphere
- curve
- graph
- geometric
- algebraic
- probability

# Order
- non ordered
- total order
- partial order
- preorder

# DAG

### A directed acyclic graph (DAG) is a graph that has no cycles and is directed. This means that the edges have a direction and that there is no way to start at a vertex and follow the edges back to the same vertex. This is useful in many applications, such as scheduling, task management, and data processing.

# Void(canvas)
```mermaid
graph
  Space1[algebraic]
  Space2[geometric]
  Space3[trigonometric]
```

# Nodes ( no order )
```mermaid
graph
    A
    B
    C
```



# Edges
```mermaid
graph LR
    A --- B
```

# Non Directed Graph
```mermaid
graph LR
    A --- B
    B --- C
    C --- A
    C --- D
```

# Directed Graph
```mermaid
graph LR
    A --> B
    B --> C
    C --> A
    C --> D
```

# Directed Acyclic(no cycles) Graph
> With a join
```mermaid
graph LR
    A --> B
    B --> C
    B --> D
    A --> D
    D --> E
    C --> E
```

# Tree
> No Joins
```mermaid
graph LR
    A --> B
    A --> B
    B --> C
    A --> D
    C --> E
```

# Multi Directed Acyclic Graph
```mermaid
graph LR
    A --> B
    B --> C
    A --> D
    style A fill:#009900
```

# BiCartesian Category
```mermaid
graph LR
    one --> two
    two --> three
```

# Petri Net
```mermaid
graph LR
    subgraph one
    a1
    a2
    end
    subgraph two
    b1
    b2
    end
    subgraph three
    c1
    c2
    end
    a1 --> b1
    b1 --> c1
    a2 --> b2
    b2 --> c2
```

