import React from 'react';
import { Input } from 'antd';
import $ from 'jquery';
import '../css/search.css';

const Search = Input.Search;

class Searchsubs extends React.Component{
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }
    
    search(e){
        $(".subs").parent().hide();
        console.log(e);
        $("." +e).parents().show();
        $("#bigEmpty").hide();
    }

    render(){
        return(
            <div id='search-background'>
                <span>Search for an alternate item</span>
                <Search
                    id="search-input"
                    placeholder="input search text"
                    onSearch={this.search}
                    enterButton
                />
            </div>

        );
    }
}

export default Searchsubs;