import React from 'react';
import 'antd/dist/antd.css';
import '../../App.css';
import AntLayout from "../layout/ant_layout";
import { AutoComplete } from 'antd';
import { Table, Divider, Tag, Button, Icon } from 'antd';
import {Dropdown} from "antd/lib/dropdown";

const Option = AutoComplete.Option;

const columns = [{
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
},  {
    title: 'Roles',
    key: 'roles',
    dataIndex: 'roles',
    render: roles => (
        <span>
          {roles.map(role => {
              let color = role.length > 5 ? 'geekblue' : 'green';
              if (role === 'loser') {
                  color = 'volcano';
              }
              return <Tag color={color} key={role}>{role.toUpperCase()}</Tag>;
          })}
        </span>
    ),
},{
    title: 'Manage',
    dataIndex: 'manage',
    key: 'manage',
}];




class Manageuser extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dataSource: [
                {
                    key: '1',
                    value: 'dupa',
                    address: '10 Downing Street',
                    roles: ["USER"]
                },
                {
                    key: '2',
                    value: 'dupa2',
                    address: '10 Downing Street',
                    roles: ["ADMIN"]
                },
                {
                    key: '3',
                    value: 'dupa3',
                    address: '10 Downing Street',
                    roles: ["USER"]
                },
                {
                    key: '4',
                    value: 'jasia',
                    address: '10 Downing Street',
                    roles: ["MOD", "USER"]
                }
            ],
            currentValue: ""
        };
    }

    renderOption(item){
        return (
            <Option {...item} value={item.value}>
                {item.value}
            </Option>
        );
    }

    generateRows(item){
        console.log("item", item.props);
        return(
            {
                key: item.key,
                username: item.key,
                roles: item.props.roles,
                manage: <a>Edit roles <Icon type="edit" /></a>
            }
        );
    }
    render() {
        const { dataSource, currentValue, dataSource2 } = this.state;
        return (
            <AntLayout>
                <div>
                    <AutoComplete
                        style={{ width: '100%' }}
                        dataSource={dataSource.map(this.renderOption)}
                        value={this.state.currentValue}
                        onChange={value => this.setState({currentValue: value})}
                        open={true}
                        placeholder="username"
                        optionLabelProp="value"
                        onDropdownVisibleChange={this.testDropdown}
                        dropdownRender={menu => (
                            <React.Fragment>
                                <div>
                                    {console.log(menu)}
                                    <Table columns={columns}
                                           dataSource={menu.props.menuItems.map(this.generateRows)}
                                           size="middle"
                                           onRowClick={row => this.setState({currentValue: row.username})}
                                           pagination={false}
                                    />
                                </div>
                            </React.Fragment>
                        )}
                        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                    />
                </div>
            </AntLayout>
        );
    }
}

export default Manageuser;

