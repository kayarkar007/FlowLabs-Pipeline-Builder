# VPOS Manual Test Cases - Phase 3

## Phase 3: Semantic Control Flow

- [ ] **TC-P3-01 Simple Math**: Create `const a = 5`, `const b = 3`, `Call console.log(a+b)`. Run -> Expect Output `8`.
- [ ] **TC-P3-02 Parsing Execution**: Click 'Parse Demo', then 'Run Pipeline'. Expect Output `30`.
- [ ] **TC-P3-03 DAG Cycle Rejection**: Create a cycle (A->B->A). Run -> Expect "Cycle detected" log.
- [ ] **TC-P3-04 Disconnected Graph**: Run with disconnected components. Expect multiple valid traversals.
