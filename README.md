# 🚀 DevStack

### Build Your Ideal Technology Stack

DevStack is a React-based web application where developers can explore different technologies and create their own custom development stack. Users can select technologies, view their selected stack, and remove individual technologies or the entire stack.

## 🛠️ Technologies Used

* ⚛️ **React 19**
* 📘 **TypeScript**
* ⚡ **Vite**
* 🎨 **Tailwind CSS**
* 🌼 **DaisyUI**
* 🔔 **React Toastify**
* 📄 **JSON** for technology data

## ✨ Features

### 1. 🔍 Explore Technologies

Browse different technologies with information such as category, difficulty, rating, badge, and description.

### 2. 🧩 Build Your Own Stack

Add technologies to **Your Stack** and see the number of selected technologies dynamically.

### 3. 🔔 Interactive Stack Management

Get toast notifications when adding, removing, or trying to add a technology that is already in your stack. You can also remove all selected technologies at once.

---

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. React uses JSX to make UI code easier to read and write.

---

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

For example, this project passes technology data through props, while the selected technologies are stored in state.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates and manages changing data inside a React component.

In this project, I used it in `Technologies.tsx` to store the selected technologies:

```tsx
const [selectedStack, setSelectedStack] = useState<ITechnology[]>([])
```

When a technology is added or removed, the state updates and React updates the UI.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to run code after a component renders, commonly for things like fetching data.

**In this project, I did not use `useEffect` to load the JSON data.** I used `fetch()` with a Promise and React's `use()` function instead.

```tsx
const technologyFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}
```

Then the data is received in `Technologies.tsx` using:

```tsx
const technologies = use(technologiesPromise);
```

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item in a list. It allows React to efficiently understand which items were added, removed, or changed.

In this project:

```tsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
```

Here, `technology.id` is used as the unique key.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it to show an empty-stack message when no technology is selected:

```tsx
selectedStack.length === 0
  ? <p>Your stack is empty.</p>
  : <button>Remove All</button>
```

If the stack is empty, the user sees **"Your stack is empty."** Otherwise, the **Remove All** button appears.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.

A child can communicate back to the parent by calling a **function passed through props**.

For example, `Technologies` passes a function to `TechnologyCard`:

```tsx
<TechnologyCard
  technology={technology}
  handleSelectedStack={handleSelectedStack}
/>
```

The child calls that function when the user clicks the button:

```tsx
onClick={() => handleSelectedStack(technology)}
```

So the child doesn't directly change the parent's state. It calls the function provided by the parent.
