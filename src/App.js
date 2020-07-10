import React from 'react'
import EmojiFader from './EmojiFader'
import './App.css'

const mages = ['🧙‍♀️', '🧙🏻‍♀️', '🧙🏼‍♀️', '🧙🏽‍♀️', '🧙🏾‍♀️', '🧙🏿‍♀️']
const wizards = ['🧙‍♂️', '🧙🏻‍♂️', '🧙🏼‍♂️', '🧙🏽‍♂️', '🧙🏾‍♂️', '🧙🏿‍♂️']
const apples = ['🍎️', '🍏️']

function App() {
	return (
		<div>
			<h1>emoji-fader</h1>
			<div>This is not an efficient method for doing this. This was only a test.</div>

			<h2>Basic Usage</h2>
			<div className="font-size-parent">
				<EmojiFader emojis={wizards} />
				<EmojiFader emojis={mages} />
				<EmojiFader emojis={apples} />
			</div>

			<h2>Interval</h2>
			<div className="font-size-parent">
				<EmojiFader emojis={apples} interval={500} />
			</div>

			<h2>Alignment Test</h2>
			<h3>Flex Row</h3>
			<div className="flex-row font-size-parent">
				<EmojiFader emojis={wizards} />
				<EmojiFader emojis={mages} />
			</div>

			<h3>Centered Over Text</h3>
			<div className="flex-column font-size-parent">
				<EmojiFader emojis={wizards} />
				<div className="dummy-text">Congratulations!</div>
			</div>
		</div>
	)
}

export default App
