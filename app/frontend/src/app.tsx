import { Logo } from './logo'
import { Button } from 'ui'

export function App() {
  return (
    <>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <Button>Changed!</Button>
      <p>
        <a
          class="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </>
  )
}
