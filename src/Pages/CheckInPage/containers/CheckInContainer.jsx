import React, { Component } from 'react'
import axios from 'axios'

class CheckInContainer extends Component {
    constructor(props) {
        super(props)

        this.baseUrl = "http://localhost:3001"
        this.state = {
            checkInData: []
        }
    }

    async componentDidMount() {
        const response = await axios.request(`${this.baseUrl}/check_ins`)
        this.setState({
            checkInData: response.data.check_in.data
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default CheckInContainer
