function Modal({ children, heading, state, onDismiss, onAccept }) {
  // check if there're onDismiss and onAccept functions
  const hasDismiss = typeof onDismiss === "function"
  const hasAccept = typeof onAccept === "function"

  if (!hasDismiss) {
    return console.log("%cYou need to pass a function to the onDismiss prop", "color: red; font-size: 1.2rem; font-weight: bold;")
  }

  const handleDismiss = () => onDismiss()

  const modalStyle = {
    opacity: state ? 1 : 0,
    pointerEvents: state ? "all" : "none",
  }

  const modalContentStyle = {
    opacity: state ? 1 : 0,
    transform: state ? "scale(1)" : "scale(0.9)",
    transition: "opacity 0.3s, transform 0.35s",
    transitonTimingFunction: "cubic-bezier(.5,-800,.5,800)",
    transitionDelay: state ? "0s" : "0.3s",
  }

  return ReactDOM.createPortal(
    <button className="modal" aria-modal="true" role="dialog" onClick={handleDismiss} style={modalStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={modalContentStyle}>
        <div className="modal-head">
          <h2>{heading}</h2>
        </div>
        <div className="modal-body" dangerouslySetInnerHTML={{ __html: children }} />
        <div className="modal-actions">
          <div className="btn dismiss" onClick={handleDismiss} aria-label="Close">
            Dismiss
          </div>
          {hasAccept && (
            <div className="btn accept" onClick={onAccept}>
              Accept
            </div>
          )}
        </div>
      </div>
    </button>,
    document.body
  )
}

function App() {
  const [state, setState] = React.useState(false)
  const [headingText, setHeadingText] = React.useState("")
  const [contentText, setContentText] = React.useState("")

  const handleCreateButton = () => {
    // check if there's any filed empty
    const heading = headingText.length > 0
    const content = contentText.length > 0

    if (!heading || !content) {
      alert("You need to fill all the fields")
      setState(false)
      return
    }

    setState(true)
  }

  return (
    <div id="app-content">
      <h2>Let's go create our modal. How about start choosing the content, heading and actions?</h2>

      {/* choose content and heading */}
      <div className="choose-content">
        <label htmlFor="modal-heading">
          <span>Modal heading</span>
          <input value={headingText} onChange={(e) => setHeadingText(e.target.value)} type="text" placeholder="Enter a heading" id="modal-heading" />
        </label>
        <label htmlFor="modal-content">
          <span>
            Modal content - <span className="small">it can also be a html content</span>
          </span>
          <textarea value={contentText} onChange={(e) => setContentText(e.target.value)} id="modal-content" placeholder="Enter the modal content" />
        </label>
        <button onClick={handleCreateButton}>Create</button>
      </div>

      <Modal
        heading={headingText}
        state={state}
        onDismiss={() => setState(false)}
        onAccept={() => {
          alert("You accepted the modal")
          setState(false)
        }}
      >
        {contentText}
      </Modal>
    </div>
  )
}

const app = ReactDOM.createRoot(document.getElementById("app"))
app.render(<App />)
