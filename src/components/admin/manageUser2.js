import React from 'react';
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];


export default class Complete extends React.Component {

    render() {
        return (
            <div>
                <AutoComplete
                    style={{ width: 200 }}
                    open={true}
                    dataSource={dataSource}
                    placeholder="try to type `b`"
                    filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                />
            </div>
        );
    }
}


