import React from 'react';
import $ from 'jquery';
import { Button } from 'antd';
import '../css/submit.css';

class Submit extends React.Component{
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.continue = this.continue.bind(this);
    }

    search() {
        $("#search-background").show();
        $(".ant-list").hide();
        $("#search-input").val("");
        $("#bigEmpty").show();
    }

    continue() {


    }

    render(){
        return (
            <div id="buttongroup">
                <Button id="search" type="primary" onClick={this.search}>SEARCH CATALOG</Button>
                <Button id="continue" type="primary" onClick={this.continue}>CONTINUE</Button>
            </div>
        );
    }
}


export default Submit;