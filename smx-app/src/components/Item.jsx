import React from 'react';
import { List, Card, Button } from 'antd';
import $ from 'jquery';
import '../css/item.css';
const { Meta } = Card;

class Substitue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                "data": [
                {   "id":1,
                    "title":"Luffa",
                    "price":"2.00$",
                    "itemno":"0191516",
                    "url":"../images/luffa.jpg",
                    "type":"fruit",
                },
                {   "id":2,
                    "title":"Greens",
                    "price":"2.50$",
                    "itemno":"0191517",
                    "url":"../images/greens.jpg",
                    "type":"vegetable",
                },
                {   "id":3,
                    "title":"Meat",
                    "price":"4.50$",
                    "itemno":"0191518",
                    "url":"../images/meat.jpg",
                    "type":"meat",
                }
                ]

            };
        this.findsubs = this.findsubs.bind(this);
    }

    findsubs(e) {
        $(".subs").parent().hide();
        let name = e.target.id;
        $("." +name).parents().show();
        
    }

    render(){
        return (
            <List 
                
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.state.data}
                renderItem={item => (
                <List.Item className="item">
                <Card
                    
                    title={item.title}
            
                    //extra={<a href="#">More</a>}
                    style={{ width: 240 }}
                    cover={<img alt="example" src={item.url} />}
                >
                <Meta
                    title={item.price}
                    description={item.itemno}
                />
                <div id="description">iapanese cucumberfresh packer</div>
                <br/>
                <Button id={item.type} className="substitute" type="primary" onClick={this.findsubs}>Find a Substitue</Button>

                </Card>
                </List.Item>
                )}
            />
        );
    }
    listStyle={marginRight: -160}
}

export default Substitue;