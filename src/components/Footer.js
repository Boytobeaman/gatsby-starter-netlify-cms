import React from 'react'

export default class Footer extends React.Component{

  render() {
    return (
      <footer className="footer w-100 position-absolute" style={{ bottom: '0' }}>
        <div className="bg-secondary text-center p-2">
          <span className="text-white">© 2018 Shanghai Join Plastic, Inc. All Rights Reserved.</span>
        </div>
      </footer>
    )
  }
}
