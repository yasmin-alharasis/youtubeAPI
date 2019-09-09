import React from 'react'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            term:''
        }
    }
    handdleChange=(e)=>{
        this.setState({
            term:e.target.value})
            this.props.onSearchTermChange(e.target.value)
        
    }
    render() { 
        return ( 
            <div className='search-bar'>
                <input value={this.state.term} onChange={this.handdleChange}/>
                &nbsp; <i class="fas fa-search"></i>


            </div>
         );
    }
}
 
export default Search;