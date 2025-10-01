# Writing Reliable Tests for React using AI

Hacktiv8 Technical Workshop • July 2025

---

## About This Workshop

- **Interactive live coding** session
- **Real-world examples** with React components
- **AI-assisted** test writing techniques
- **Hands-on practice** with modern testing tools

---

## About Me

**Zain Fathoni**
- Senior Software Engineer with 8+ years experience
- Speaker at JSConf Asia, CityJS Singapore
- Passionate about testing and code quality
- AI enthusiast and early adopter

---

## What We'll Cover

1. **Testing fundamentals** refresher
2. **Common testing pitfalls** and how to avoid them
3. **AI tools** for test generation
4. **Best practices** for reliable tests
5. **Live coding** examples

---

## Why Testing Matters

- **Confidence** in code changes
- **Documentation** of expected behavior
- **Regression prevention**
- **Faster development** in the long run
- **Better code design**

---

## The Testing Pyramid

```
    E2E Tests
   /         \
  /           \
 / Integration \
/      Tests    \
-----------------
   Unit Tests
```

**Unit Tests**: Fast, isolated, many
**Integration Tests**: Medium speed, realistic, some  
**E2E Tests**: Slow, full user flows, few

---

## Common Testing Mistakes

1. **Testing implementation details**
2. **Over-mocking everything**
3. **Brittle selectors**
4. **Not testing user behavior**
5. **Ignoring accessibility**

---

## AI Tools for Testing

- **GitHub Copilot**: Code completion and test generation
- **ChatGPT/Claude**: Test strategy and complex scenarios
- **Cursor**: AI-powered code editor
- **TestGPT**: Specialized testing AI
- **Codium**: AI test generation

---

## Live Coding: Todo Component

Let's build and test a simple Todo component together

```jsx
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.text}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      <span className={todo.completed ? 'completed' : ''}>
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        aria-label={`Delete "${todo.text}"`}
      >
        Delete
      </button>
    </div>
  )
}
```

---

## AI Prompt for Test Generation

**Prompt**: 
> "Write comprehensive tests for this React TodoItem component. Focus on user interactions, accessibility, and edge cases. Use React Testing Library and Jest. Test the behavior, not implementation."

---

## AI-Generated Test (Refined)

```javascript
import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from './TodoItem'

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    text: 'Learn React Testing',
    completed: false
  }
  
  const mockOnToggle = jest.fn()
  const mockOnDelete = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders todo text correctly', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    )
    
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument()
  })
```

---

## Testing User Interactions

```javascript
it('calls onToggle when checkbox is clicked', () => {
  render(
    <TodoItem 
      todo={mockTodo} 
      onToggle={mockOnToggle} 
      onDelete={mockOnDelete} 
    />
  )
  
  const checkbox = screen.getByRole('checkbox', {
    name: /mark "learn react testing" as complete/i
  })
  
  fireEvent.click(checkbox)
  
  expect(mockOnToggle).toHaveBeenCalledWith(1)
  expect(mockOnToggle).toHaveBeenCalledTimes(1)
})
```

---

## Testing Visual States

```javascript
it('applies completed styling when todo is completed', () => {
  const completedTodo = { ...mockTodo, completed: true }
  
  render(
    <TodoItem 
      todo={completedTodo} 
      onToggle={mockOnToggle} 
      onDelete={mockOnDelete} 
    />
  )
  
  const todoText = screen.getByText('Learn React Testing')
  expect(todoText).toHaveClass('completed')
})
```

---

## Accessibility Testing

```javascript
it('has proper ARIA labels for screen readers', () => {
  render(
    <TodoItem 
      todo={mockTodo} 
      onToggle={mockOnToggle} 
      onDelete={mockOnDelete} 
    />
  )
  
  expect(screen.getByLabelText(/mark "learn react testing" as complete/i))
    .toBeInTheDocument()
    
  expect(screen.getByLabelText(/delete "learn react testing"/i))
    .toBeInTheDocument()
})
```

---

## Edge Cases with AI Help

**AI Prompt**: 
> "What edge cases should I test for this TodoItem component? Consider empty states, long text, special characters, and accessibility concerns."

**AI Response**:
- Empty todo text
- Very long todo text
- Special characters and emojis
- XSS prevention
- Keyboard navigation
- Screen reader compatibility

---

## Testing Complex Components

```jsx
function TodoList({ todos, onAddTodo, onToggleTodo, onDeleteTodo }) {
  const [newTodo, setNewTodo] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTodo.trim()) {
      onAddTodo(newTodo.trim())
      setNewTodo('')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
      
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggleTodo}
          onDelete={onDeleteTodo}
        />
      ))}
    </div>
  )
}
```

---

## Integration Testing

```javascript
it('adds new todo when form is submitted', async () => {
  const mockOnAddTodo = jest.fn()
  
  render(
    <TodoList 
      todos={[]} 
      onAddTodo={mockOnAddTodo}
      onToggleTodo={jest.fn()}
      onDeleteTodo={jest.fn()}
    />
  )
  
  const input = screen.getByPlaceholderText(/add a new todo/i)
  const button = screen.getByRole('button', { name: /add todo/i })
  
  fireEvent.change(input, { target: { value: 'New task' } })
  fireEvent.click(button)
  
  expect(mockOnAddTodo).toHaveBeenCalledWith('New task')
  expect(input).toHaveValue('')
})
```

---

## AI Prompt Templates

### For Unit Tests
> "Write unit tests for this React component: [COMPONENT]. Focus on props, state changes, and user interactions. Use React Testing Library."

### For Integration Tests  
> "Create integration tests for these components working together: [COMPONENTS]. Test the complete user workflow from [START] to [END]."

### For Edge Cases
> "What edge cases and error scenarios should I test for this component? Consider validation, network errors, and accessibility."

---

## Best Practices

1. **Test behavior, not implementation**
2. **Use semantic queries** (`getByRole`, `getByLabelText`)
3. **Write descriptive test names**
4. **Keep tests isolated** and independent
5. **Mock external dependencies** appropriately
6. **Test accessibility** from the start

---

## Testing Library Queries Priority

1. **getByRole** - Accessible elements
2. **getByLabelText** - Form elements
3. **getByPlaceholderText** - Input placeholders
4. **getByText** - Visible text content
5. **getByDisplayValue** - Form input values
6. **getByAltText** - Images with alt text
7. **getByTitle** - Elements with title attribute
8. **getByTestId** - Last resort only

---

## Hands-On Exercise

Let's practice together:

1. **Create** a LoginForm component
2. **Use AI** to generate test scenarios
3. **Write tests** for validation logic
4. **Test accessibility** features
5. **Handle error states**

---

## Debugging Failed Tests

```javascript
// Add screen.debug() to see rendered output
it('shows error message for invalid input', () => {
  render(<LoginForm />)
  
  fireEvent.click(screen.getByRole('button', { name: /login/i }))
  
  screen.debug() // Shows current DOM state
  
  expect(screen.getByText(/email is required/i)).toBeInTheDocument()
})
```

---

## AI for Test Maintenance

**Prompt for refactoring**:
> "This test is failing after a component refactor. The component now uses a different structure but the same behavior. Update the test to work with the new implementation: [FAILING_TEST]"

---

## Performance Testing Considerations

```javascript
// Test component performance with React Testing Library
import { render, waitFor } from '@testing-library/react'
import { performance } from 'perf_hooks'

it('renders large list efficiently', async () => {
  const start = performance.now()
  
  render(<TodoList todos={largeTodoList} />)
  
  await waitFor(() => {
    expect(screen.getAllByRole('checkbox')).toHaveLength(1000)
  })
  
  const end = performance.now()
  expect(end - start).toBeLessThan(100) // 100ms threshold
})
```

---

## Common AI Testing Prompts

### Test Generation
> "Generate tests for this React hook: [HOOK_CODE]. Include edge cases and error handling."

### Test Review
> "Review these tests and suggest improvements for reliability and maintainability: [TEST_CODE]"

### Mock Strategy
> "How should I mock these dependencies for testing? [DEPENDENCIES]"

---

## Tools and Setup

```bash
# Essential testing dependencies
npm install --save-dev \
  @testing-library/react \
  @testing-library/jest-dom \
  @testing-library/user-event \
  jest-environment-jsdom

# Optional but helpful
npm install --save-dev \
  @testing-library/jest-dom/extend-expect \
  jest-axe
```

---

## Jest Configuration

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js',
    '!src/reportWebVitals.js',
  ],
}
```

---

## Key Takeaways

1. **AI accelerates** test writing but doesn't replace understanding
2. **Focus on user behavior** rather than implementation
3. **Accessibility testing** should be part of every test suite
4. **Test names** should describe expected behavior clearly
5. **Regular refactoring** keeps tests maintainable

---

## Next Steps

- **Practice** with your own components
- **Experiment** with different AI tools
- **Join** testing communities online
- **Read** Testing Library documentation
- **Share** your testing wins and failures

---

## Resources

- **Testing Library**: testing-library.com
- **Jest**: jestjs.io
- **React Testing Examples**: github.com/kentcdodds/react-testing-examples
- **AI Testing Tools**: cursor.sh, github.com/copilot
- **This Workshop**: github.com/zainfathoni/reliable-tests-with-ai

---

## Questions & Discussion

Let's discuss:
- Your current testing challenges
- AI tools you've tried
- Testing scenarios you'd like to explore

---

## Thank You!

**Zain Fathoni**
- Website: zainf.dev
- GitHub: github.com/zainfathoni
- Twitter: @zainfathoni
- Workshop Repo: github.com/zainfathoni/reliable-tests-with-ai

*Keep testing, keep learning!* 🧪✨