import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as CodeMirror } from "react-codemirror2";

export default function Editor( props ) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange( editor, data, value){
        onChange(value)
    }

    return (
        <div className="editorPane">
            <div className="editorName">
                {displayName}
                <button> O/C </button>
            </div>
            < CodeMirror
                value={value}
                onBeforeChange={handleChange}
                className="codeMirrorWrapper"
                options={
                    {
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        theme: 'material',
                        lineNumbers: true
                    }
                }
            />
        </div>
    );
}
