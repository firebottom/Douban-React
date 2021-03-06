import React, { Component } from 'react'

import List from './list'
import Footer from '../../views/footer'

class Group extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupList: []
    }
  }
  componentDidMount() {
    fetch('../../../group.json')
      .then(
          (response) => {
            return response.json();
          }
        ).then(
          (data) => {
            console.log('Request successful', data.info);
            this.setState({
              groupList: data.info
            },() => {
              console.log(this.state.groupList);
            })
          }
        ).catch(function(error) {
            console.log('Request failed', error);
        });
  }
  render() {
    return (
      <div>
        <List list = {this.state.groupList}/>
        <Footer text = '我们的精神角落'/>
      </div>
    )
  }
}

export default Group;
