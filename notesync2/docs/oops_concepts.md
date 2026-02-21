# Object-Oriented Programming (OOP) Concepts in NoteSyncV2

While NoteSyncV2 is primarily built using **React** and **Next.js** (which lean heavily towards Functional Programming), it effectively utilizes key **Object-Oriented Programming (OOP)** concepts to structure data, manage state, and ensure code reusability.

Here is a breakdown of how OOP pillars are implemented in this project:

## 1. Abstraction
Abstraction involves hiding complex implementation details and showing only the necessary features of an object. In TypeScript, this is primarily achieved through **Interfaces** and **Types**.

### Example: Data Models
In `components/sidebar.tsx`, the `RoomDocument` interface defines the structure of a document without exposing how it's stored or manipulated.

```typescript
// components/sidebar.tsx
interface RoomDocument extends DocumentData {
  createdAt: string;
  role: "owner" | "editor";
  roomId: string;
  userId: string;
}
```

Similarly, `liveblocks.config.ts` uses interfaces to define the shape of the real-time store, abstracting the underlying synchronization logic.

```typescript
// liveblocks.config.ts
interface Liveblocks {
  Presence: {
    cursor: { x: number; y: number } | null;
  };
  // ...
}
```

## 2. Inheritance
Inheritance allows a class or interface to derive properties and behavior from another.

### Example: Interface Extension
In the `RoomDocument` example above, the interface **extends** `DocumentData` from Firebase.

```typescript
interface RoomDocument extends DocumentData {
  // Inherits all properties from DocumentData
  // Adds specific properties for NoteSync
  createdAt: string;
  // ...
}
```
This means `RoomDocument` *is-a* `DocumentData`, inheriting its structure while adding specialized fields.

## 3. Encapsulation
Encapsulation bundles data (state) and methods (behavior) that operate on the data within a single unit, restricting direct access to some of an object's components.

### Example: React Components
React components act as encapsulated units. For instance, the `Sidebar` component in `components/sidebar.tsx`:
- **State (Data):** Manages its own internal state (`groupedData`) using `useState`.
- **Behavior (Methods):** Contains logic for fetching data (`useCollection`), grouping it, and sorting it.
- **Interface:** Exposes only the final UI (JSX) to the parent, keeping the logic hidden.

```typescript
// components/sidebar.tsx
function Sidebar() {
  // Private State
  const [groupedData, setGroupedData] = useState<...>(...);

  // Private Logic
  useEffect(() => {
    // Logic to group and sort data
  }, [data]);

  // Public Interface (Render)
  return (
    <aside>...</aside>
  );
}
```

### Example: Modules
Files like `firebase.ts` encapsulate the configuration and initialization of the Firebase app. Other parts of the app import only the `db` instance, without needing to know the API keys or initialization logic.

## 4. Polymorphism
Polymorphism allows objects of different types to be treated as objects of a common super type.

### Example: Component Reusability
The `SidebarOption` component is used polymorphically to render both "My Documents" and "Shared with me" documents. Even though the context differs (owner vs. editor), the component adapts to display the link correctly based on the props passed to it.

```typescript
// components/sidebar.tsx
{groupedData.owner.map((doc) => (
  <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
))}

{groupedData.editor.map((doc) => (
  <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`} />
))}
```

## Summary
| Concept | Implementation in NoteSyncV2 |
| :--- | :--- |
| **Abstraction** | TypeScript Interfaces (`RoomDocument`, `User`), Custom Hooks. |
| **Inheritance** | Interface extension (`extends DocumentData`). |
| **Encapsulation** | React Components (`Sidebar`), Modules (`firebase.ts`), Hooks (`useCollection`). |
| **Polymorphism** | Reusable Components (`SidebarOption`), Prop variations. |
