import {convertToRaw, EditorState} from "draft-js";
import draftToHtml from "draftjs-to-html";
import {Editor} from 'react-draft-wysiwyg';
import React, { Component } from "react";


const testStyle = {
    border: 'solid 1px rgb(241, 241, 241',
    lineHeight: '0px',
    width: '100%'
}

class WYSWIGField extends Component {

    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
        this.onChange = this.onChange.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onChange(value){
        this.setState({ value });
    }

    onEditorStateChange(editorState){
        const { onChange, value } = this.props;

        const newValue = draftToHtml(convertToRaw(editorState.getCurrentContent()));

        if (value !== newValue) {
            onChange(newValue);
        }

        this.setState({ editorState });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true }
                    }}
                    editorStyle={testStyle}
                />
            </div>
        );
    }
}

export const EditorFieldComponent = props => {
    const { placeholder, input: { onChange, value }, disabled, id } = props;

    return (
        <WYSWIGField
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};