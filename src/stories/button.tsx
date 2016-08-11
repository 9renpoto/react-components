import * as React from 'react'
import { storiesOf, action } from '@kadira/storybook'

declare var module: any

storiesOf('Button', module)
  .add('with a text', () => (
    <button onClick={ action('clicked') }>My First Button</button>
  ))
  .add('with no text', () => (
    <button></button>
  ))
