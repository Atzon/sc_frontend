import React from 'react';
import {connect} from 'react-redux';
import AntLayout from "../layout/ant_layout";
import 'antd/dist/antd.css';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import {Col, Container, Row} from "react-grid-system";
import {marginRowTop} from "../../utils";
import {loadSubforum, addSubforum} from "../../actions";
import {Button, Modal, Input} from 'antd';
import {Field, reduxForm} from "redux-form";
import {EditorFieldComponent} from "../WYSWIGField";

const SortableItem = SortableElement(({value, key}) =>
    <Row key={key} style={marginRowTop}
         className="list-group-item">
        <Col md={8} xs={8}>
            {value}
        </Col>
    </Row>
);


const SortableList = SortableContainer(({items}) => {
    return (
        <Container>
            {items.map((item, index) => (
                <SortableItem key={`item-${index}`} index={index} value={item.content} />
            ))}
        </Container>
    );
});


class Managesubforum extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: this.props.subforums,
            visible: false,
            newSubforumName: ''
        }

        this.handleNewSubforumChange = this.handleNewSubforumChange.bind(this);
    }

    handleNewSubforumChange(event){
        this.setState({newSubforumName: event.target.value});

    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
        this.setItemsOrder();
    };

    setItemsOrder(){
        this.setState(({items}) => {
           items: items.map((item, index)=>{
               item.order = index;
           })
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.state.items.forEach((it)=>{
            console.log(it.content, it.order);
        });
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
            items: [ { id: 0, order: 0, topics: [], content: this.state.newSubforumName } ,...this.state.items]
        });

    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <AntLayout>
                <Button type="primary" onClick={this.showModal}>
                    Add new subforum
                </Button>
                <Modal
                    title="New subforum"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {/*<form onSubmit={handleSubmit(data =>*/}
                        {/*this.props.addSubforum(data))}>*/}

                        {/*<Field key="field"*/}
                               {/*name="name"*/}
                               {/*id="inputEditorText"*/}
                               {/*disabled={false}*/}
                               {/*placeholder="Type here" component="input" />*/}

                        {/*<button type="submit">Add post</button>*/}
                    {/*</form>*/}

                    <Input size="large"
                           placeholder="Subforum name"
                           value={this.state.newSubforumName}
                           onChange={this.handleNewSubforumChange} />
                </Modal>

                <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
                <a href="#" onClick={this.handleClick}>
                    Click me
                </a>
            </AntLayout>
            );
    }
}

function mapStateToProps(state){
    return{
        subforums: state.subforums
    };
}


export default connect(mapStateToProps, { loadSubforum, addSubforum })(
    reduxForm({form: "AddSubforum"})(Managesubforum));



