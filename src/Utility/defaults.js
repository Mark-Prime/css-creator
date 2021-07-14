const styles = {
    "Text" : {
        "enabled": true,
        "props": {
            "fontSize": {
                val: "16px",
                enabled: true,
                alias: "font-size",
                type: 'number'
            },
            "textDecoration": {
                val: 'none',
                enabled: false,
                alias: "text-decoration",
                type: 'select',
                options: ['none', 'overline', 'line-through', 'underline']
            },
            "textAlign": {
                val: "left",
                enabled: false,
                alias: "text-align",
                type: 'select',
                options: ['center', 'left', 'right', 'justify']
            },
            "color": {
                val: "#000000",
                enabled: false,
                alias: "color",
                type: 'color'
            },
        }
    },
    "Content" : {
        "enabled": false,
        "props": {
            "width": {
                val: "75px",
                enabled: false,
                alias: "width",
                type: 'number'
            },
            "minWidth": {
                val: "60px",
                enabled: false,
                alias: "min-width",
                type: 'number'
            },
            "maxWidth": {
                val: "100px",
                enabled: false,
                alias: "max-width",
                type: 'number'
            },
            "height": {
                val: "20px",
                enabled: false,
                alias: "height",
                type: 'number'
            },
            "minHeight": {
                val: "10px",
                enabled: false,
                alias: "min-height",
                type: 'number'
            },
            "maxHeight": {
                val: "30px",
                enabled: false,
                alias: "max-height",
                type: 'number'
            },
            "background": {
                val: "#000000",
                enabled: false,
                alias: "background",
                type: 'color'
            },
        }
    },
    "Padding" : {
        "enabled": false,
        "props": {
            "padding": {
                val: "3px",
                enabled: false,
                alias: "padding",
                type: 'number'
            },
            "paddingLeft": {
                val: "3px",
                enabled: false,
                alias: "padding-left",
                type: 'number'
            },
            "paddingTop": {
                val: "3px",
                enabled: false,
                alias: "padding-top",
                type: 'number'
            },
            "paddingRight": {
                val: "3px",
                enabled: false,
                alias: "padding-right",
                type: 'number'
            },
            "paddingBottom": {
                val: "3px",
                enabled: false,
                alias: "padding-bottom",
                type: 'number'
            },
        }
    },
    "Border" : {
        "enabled": false,
        "props" : {
            "borderWidth": {
                val: "1px",
                enabled: false,
                alias: "border-width",
                type: 'number'
            },
            "borderRadius": {
                val: "0px",
                enabled: false,
                alias: "border-radius",
                type: 'number'
            },
            "borderStyle": {
                val: "solid",
                enabled: false,
                alias: "border-style",
                type: 'select',
                options: ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'hidden']
            },
            "borderColor": {
                val: "#000000",
                enabled: false,
                alias: "border-color",
                type: 'color'
            },
        }
    },
    "Margin" : {
        "enabled": false,
        "props": {
            "margin": {
                val: "3px",
                enabled: false,
                alias: "margin",
                type: 'number'
            },
            "marginLeft": {
                val: "3px",
                enabled: false,
                alias: "margin-left",
                type: 'number'
            },
            "marginTop": {
                val: "3px",
                enabled: false,
                alias: "margin-top",
                type: 'number'
            },
            "marginRight": {
                val: "3px",
                enabled: false,
                alias: "margin-right",
                type: 'number'
            },
            "marginBottom": {
                val: "3px",
                enabled: false,
                alias: "margin-bottom",
                type: 'number'
            },
        },
    },
    "Display" : {
        "enabled": false,
        "props": {
            "display": {
                val: "solid",
                enabled: false,
                alias: "display",
                type: 'select',
                options: ['block', 'inline', 'inline-block', 'flex', 'inline-flex', 'grid', 'inline-grid', 'flow', 'flow-root', 'none', 'contents', 'table', 'table-row', 'list-item', 'inherit', 'initial', 'revert', 'unset']
            },
            "justifyContent": {
                val: "solid",
                enabled: false,
                alias: "justify-content",
                type: 'select',
                options: ['normal', 'start', 'center', 'end', 'flex-start', 'flex-end', 'left', 'right', 'baseline', 'first baseline', 'last baseline', 'space-between', 'space-around', 'space-evenly', 'stretch', 'inherit', 'initial', 'revert', 'unset'],
                key: 'display',
                showOnValue: {
                    flex: true,
                    "inline-flex": true,
                }
            },
        },
    },
}

export default styles;