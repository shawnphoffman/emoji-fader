import React from 'react'
import PropTypes from 'prop-types'
import './EmojiFader.css'

const nextIndex = (i, listLength) => (i + 1 === listLength ? 0 : i + 1)

const EmojiFader = ({ emojis, interval = 1000 }) => {
	// Tracks the visible index
	const [index, setIndex] = React.useState(0)

	// Timer
	React.useEffect(() => {
		const timer = setTimeout(() => {
			setIndex(nextIndex(index, emojis.length))
		}, interval)
		return () => {
			clearTimeout(timer)
		}
	}, [emojis.length, index, interval])

	if (!emojis) return null

	return (
		<span className="icon-wrapper">
			<span className="icon">{emojis[nextIndex(index, emojis.length)]}</span>
			{/* Current index below next so that it fades into it */}
			<span className="icon fade-out" style={{ animationDuration: `${interval}ms` }} key={index}>
				{emojis[index]}
			</span>
		</span>
	)
}

EmojiFader.propTypes = {
	emojis: PropTypes.array,
	interval: PropTypes.number,
}

export default EmojiFader
