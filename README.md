# Todo List

Week 2 assignment. React, TypeScript, Vite, Zustand, and Tailwind.

## Setup

From this folder:

```bash
cd code/start
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## What it does

Type a task and click Add. The input clears after you add one. In the list, the checkbox marks a task done, and Delete removes it. The list is stored in `todoStore`.

## Tests

```bash
cd code/start
npm test
```

Store tests check add, toggle, and delete. The component tests mock `useTodoStore` so `TodoForm` and `TodoList` are tested on their own.

Screenshots are in the `screenshots` folder.
