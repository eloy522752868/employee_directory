import React, { Component } from 'react'
//Modified By: Eloy Gonzalez
//Modified Date: Eloy Gonzalez
// footer
class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer  className = "footer-copyright text-center py-3">
                    <span className="text-muted">All Rights Reserved 2021</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent