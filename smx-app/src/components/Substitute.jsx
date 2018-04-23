import React from 'react';
import { List, Card, Button, Icon, Input } from 'antd';
import PropTypes from 'prop-types';
import '../css/substitute.css';
const { Meta } = Card;

class Substitue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                "data": [
                {   "id":1,
                    "title":"Cuke",
                    "price":"2.00$",
                    "itemno":"019120",
                    "count":3,
                    "url":"../images/cuke.jpg",
                    "type":"fruit",
                },
                {   "id":2,
                    "title":"Spinach",
                    "price":"2.50$",
                    "itemno":"0191621",
                    "count":4,
                    "url":"../images/spinach.jpg",
                    "type":"vegetable",
                },
                {   "id":3,
                    "title":"Tomato",
                    "price":"1.50$",
                    "itemno":"0191622",
                    "count":5,
                    "url":"../images/tomato.jpg",
                    "type":"fruit",
                },
                {   "id":4,
                    "title":"Beef",
                    "price":"8.50$",
                    "itemno":"0191623",
                    "count":2,
                    "url":"../images/beef.jpg",
                    "type":"meat",
                },
                {   "id":5,
                    "title":"Fish",
                    "price":"5.50$",
                    "itemno":"0191624",
                    "count":8,
                    "url":"../images/fish.jpg",
                    "type":"meat",
                },
                {   "id":6,
                    "title":"Broccoli",
                    "price":"3.50$",
                    "itemno":"0191625",
                    "count":4,
                    "url":"../images/broccoli.jpg",
                    "type":"vegetable",
                },
                {   "id":6,
                    "title":"Broccoli",
                    "price":"3.50$",
                    "itemno":"0191625",
                    "count":4,
                    "url":"../images/broccoli.jpg",
                    "type":"vegetable",
                },
                {   "id":6,
                    "title":"Broccoli",
                    "price":"3.50$",
                    "itemno":"0191625",
                    "count":4,
                    "url":"../images/broccoli.jpg",
                    "type":"vegetable",
                },
                {   "id":6,
                    "title":"Broccoli",
                    "price":"3.50$",
                    "itemno":"0191625",
                    "count":4,
                    "url":"../images/broccoli.jpg",
                    "type":"vegetable",
                },
                {   "id":6,
                    "title":"Broccoli",
                    "price":"3.50$",
                    "itemno":"0191625",
                    "count":4,
                    "url":"../images/broccoli.jpg",
                    "type":"vegetable",
                },
                {   "id":6,
                    "title":"Broccoli",
                    "price":"3.50$",
                    "itemno":"0191625",
                    "count":4,
                    "url":"../images/broccoli.jpg",
                    "type":"vegetable",
                }
                ]

            };
        this.decline = this.decline.bind(this);
        this.increase = this.increase.bind(this);
    }

    decline(e){
        let data=this.state.data;
        for(let i =0;i<this.state.data.length;i++){
            if(e.target.id==this.state.data[i].id){
                if(data[i].count>0){
                    data[i].count=data[i].count-1
                }else{
                    data[i].count=0
                }
            }
        }
        this.setState({data});
    }

    increase(e){
        let data=this.state.data;
        for(let i =0;i<this.state.data.length;i++){
            if(e.target.id==this.state.data[i].id){
                data[i].count=data[i].count+1
            }
        }
        this.setState({data});
    }



    render(){
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={this.state.data}
                renderItem={item => (
                <List.Item  className="subs">
                <Card
                    className={item.type}
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
                <Button id={item.id} onClick={this.decline}>
                    <Icon type="minus" />
                </Button>
                <Input className="quantity" value={item.count} />
                <Button id={item.id} onClick={this.increase}>
                    <Icon type="plus" />
                </Button>

                </Card>
                </List.Item>
                )}
            />
        );
    }
    
}

export default Substitue;