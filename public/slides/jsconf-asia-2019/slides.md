# State Machines Meet React Hooks

JSConf Asia 2019

---

## About Me

- **Zain Fathoni** - Software Engineer at Ninja Van
- Frontend enthusiast with a backend background
- Passionate about state management and clean architecture

---

## The Problem

Modern React applications often struggle with:

- Complex state management
- Unpredictable state transitions
- Difficult to test state logic
- Race conditions and edge cases

---

## What are State Machines?

> A mathematical model of computation that describes the behavior of a system with a finite number of states

- **States**: Possible conditions of the system
- **Events**: Things that can happen
- **Transitions**: How events change states
- **Actions**: Side effects of transitions

---

## Why State Machines?

- **Predictable**: Clear state transitions
- **Testable**: Deterministic behavior
- **Visual**: Can be represented as diagrams
- **Robust**: Handle edge cases naturally

---

## React Hooks + State Machines

```javascript
import { useMachine } from '@xstate/react';
import { createMachine } from 'xstate';

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});
```

---

## Real-World Example: Form Validation

```javascript
const formMachine = createMachine({
  id: 'form',
  initial: 'editing',
  states: {
    editing: {
      on: { 
        SUBMIT: 'validating',
        RESET: 'editing'
      }
    },
    validating: {
      on: {
        VALIDATION_SUCCESS: 'submitting',
        VALIDATION_ERROR: 'editing'
      }
    },
    submitting: {
      on: {
        SUBMIT_SUCCESS: 'success',
        SUBMIT_ERROR: 'editing'
      }
    },
    success: {
      on: { RESET: 'editing' }
    }
  }
});
```

---

## Benefits at Ninja Van

- **Reduced bugs** by 40% in checkout flow
- **Improved testing** with state-based test cases
- **Better developer experience** with visual debugging
- **Easier onboarding** for new team members

---

## Tools & Libraries

- **XState**: Powerful state machine library
- **@xstate/react**: React hooks integration
- **XState Visualizer**: Debug state machines visually
- **XState Inspector**: Runtime state debugging

---

## Getting Started

1. Install XState: `npm install xstate @xstate/react`
2. Define your machine
3. Use `useMachine` hook in components
4. Visualize with XState tools

---

## Demo Time!

Let's build a simple traffic light with state machines

---

## Key Takeaways

- State machines provide predictable state management
- React Hooks make integration seamless
- Visual debugging improves developer experience
- Start small, grow incrementally

---

## Questions?

**Zain Fathoni**
- Twitter: @zainfathoni
- GitHub: github.com/zainfathoni
- Slides: bit.ly/jsconf-asia-2019-state-machines

---

## Thank You!

JSConf Asia 2019