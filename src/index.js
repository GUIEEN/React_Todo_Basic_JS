import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import TodoList from './components/TodoList'

var destination = document.querySelector('#container')

function run () {
  ReactDOM.render(
    <div>
      <TodoList/>
    </div>,
    destination
  )
}
const loadedStates = ['complete', 'loaded', 'interactive']

if (loadedStates.includes(document.readyState) && document.body) {
  run()
} else {
  window.addEventListener('DOMContentLoaded', run, false)
}
