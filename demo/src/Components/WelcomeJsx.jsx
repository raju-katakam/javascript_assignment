import React from 'react'

function WelcomeJsx() {
    const description = "JSX allows us to write HTML-like code inside JavaScript and use dynamic data easily.";
  return (
    <div>
        <h1>Welcome to JSX</h1>
        <p>{description}</p>
    </div>
  )
}

export default WelcomeJsx
