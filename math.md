# Narrative 

Mathematics is useful independent of any particual field or application.

We are not going to do any calculations or proofs. Instead we will focus on looking at ones own internal perception of nature and the world around us.

What kinds of patterns come up in our thoughts and how do we use them to make decisions?

These tools can help reduce confusion by removing unecessary complexity. 

# 40 symbols
- verbal
- written
- sign language
- touch like braille

# Concrete Examples

For example if we are trying to understand a complex system we can use these tools to break it down into smaller parts and then recombine them in a way that is more managable.

In your own mind can you see how no matter the subject of your attention it seems to act like a kind of knife. And by that I mean it splits or cuts into at least two parts. 

For example with something as familiar as food. 

# imediate usefullness
- scale and proportion
    - ratios
    - percentages
    - zooming in and out
- estimation
    - rounding
    - approximating
    - guessing
- counting
    - measuring
    - comparing
- graphs and systems
    - patterns
    - relationships
- compose & combine 
    - multiplication
    - addition
    - division
    - subtraction

# Tools
- mathematica
- vscode
- github

# Partitioning Space
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

# Prepositions

# Mereology



# Simple to Complex
- many small simple things can be combine to make a complex thing
- a complex thing can be broken down into many small simple things

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
    A -.-> D
    style A fill:#009900
    linkStyle 2 stroke:red,stroke-width:1px;
    linkStyle 3 stroke:#44f,stroke-width:3px;
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

