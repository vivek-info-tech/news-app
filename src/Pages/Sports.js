import React, { Component } from 'react'
import NewsItems from '../Components/NewsItems'
import News from '../Components/News'

export default class Home extends Component {
    render() {
         
        return (
            <News pazeSize={6} country="in" category="sports" />
        )
    }
}

