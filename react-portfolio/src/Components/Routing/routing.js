// this is the "routing" for the portfolio, the route doesn't actually change, the content does though
//there is a page state that is set to 1 
//that gets updated based on what the user clicks 

import React, { Component } from 'react';
//navbar
import Nav from '../Navigation/nav'
class Index extends Component {
    state = {
        //the state of the page, default set to the first page ie. 1
        page: 1
    }

    //change state to the first page
    changePageToOne = () => {
        console.log('Pressed 1')
        this.setState({
            page: 1
        })
    }

    //change to page 2
    changePageToTwo = () => {
        this.setState({
            page: 2
        })
    }

    //change to page 3 
    changePageToThree = () => {
        this.setState({
            page: 3
        })
    }

    render() {
        //set the variable pageNumber to the page state
        const pageNumber = this.state.page;
        //create a page variable
        let displayPage;

        //display different pages based on the page state

        if (pageNumber === 1) {
            displayPage = <p>Page 1</p>
        } else if (pageNumber === 2) {
            displayPage = <p>Page 2</p>
        } else {
            displayPage = <p>Page 3</p>
        }

        return (
            <div>
                <Nav showPage1={this.changePageToOne} showPage2={this.changePageToTwo} showPage3={this.changePageToThree} />
                {displayPage}
            </div>
        );
    }
}

export default Index;