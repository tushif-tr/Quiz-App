function OpenScreen(props) {
    return (
      <div className="open-screen-content">
        <h1 className="header">Quizzz Time</h1>
        <p className="description">Ready to test your knowledge?</p>
        {/* on click: show questions screen */}
        <button
          className="start-btn"
          onClick={() => props.setShowQuestions(true)}
        >
          Start quiz
        </button>
      </div>
    );
  }
  
  export default OpenScreen;