
# 🍯 Contributing to the Hive

Welcome, Beekeeper! We are thrilled that you want to contribute to The Enchanted Apiary. To maintain the health of the colony, please adhere to the following guidelines.

## 🧬 The Prime Directive: Sacred Codons

This is not just a standard React project; it is a demonstration of **Hive Architecture**. All contributions must respect the **Sacred Codons** (Design Patterns).

### 1. The Law of Purity (Transformations)
If you are adding a utility function or a data processor (a **Transformation**):
*   It **MUST** be pure (deterministic output for given input).
*   It **MUST NOT** have side effects (no API calls, no global state mutation, no console logs in production).
*   *Think Hydrogen*: It bonds easily but doesn't provide structure on its own.

### 2. The Law of Structure (Aggregates)
If you are adding business logic components (**Aggregates**):
*   They **MUST** encapsulate state.
*   They **MUST** only communicate via Connectors or Genesis Events.
*   *Think Carbon*: The backbone of the molecule.

### 3. The Law of Bridging (Connectors)
If you are adding UI components or API calls (**Connectors**):
*   They **MUST** adapt external inputs to internal props/state.
*   They **MUST NOT** contain core business logic.
*   *Think Oxygen*: Essential for reaction but volatile if unchecked.

## 🛠️ Development Workflow

1.  **Fork the Hive**: Create your own copy of the repository.
2.  **Hatch a Branch**:
    *   `feature/new-visualizer`
    *   `fix/broken-bond`
    *   `docs/expand-grimoire`
3.  **Spin Your Cocoon**: Write your code.
4.  **Emerge as Adult**: Submit a Pull Request (PR).

## 🧪 Testing

Before submitting a PR, ensure:
*   The project builds: `npm run build`
*   No linting errors present.
*   The visualizers render correctly on both desktop and mobile.

## 🎨 Visual Style

We use a specific "Enchanted Science" aesthetic:
*   **Colors**: Amber, Gold, Slate, and molecular accent colors (Red/Blue/Purple).
*   **Shapes**: Hexagons and Circles.
*   **Fonts**: *Crimson Pro* (Serif) for headings, *Inter* (Sans) for UI, *Fira Code* (Mono) for code.

## 🐝 Code of Conduct

Be kind to your fellow bees. We are a collaborative colony, not a competitive swarm.
