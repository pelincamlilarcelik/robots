import React,{Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'
class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  onSearchChange = (e) => {
    this.setState({searchField : e.target.value})
    
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({robots: users}))
  }
  render(){
    const {robots,searchField} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ? 
        <h1>Loading</h1> :
        (
        
            <div className='tc'>
              <h2>RoboFriends</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <ErrorBoundry>
                  <CardList robots={filteredRobots}/>
                </ErrorBoundry>
              </Scroll>
            </div>
    )
        
    
  }
  
}

export default App