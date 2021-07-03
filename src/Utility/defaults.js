const styles = {
    "Text" : {
        "enabled": true,
        "props": {
            "color": {
                val: "#000000",
                enabled: false,
                alias: "color",
                type: 'color'
            },
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
    "Color" : {
        "enabled": false,
        "props": {
            "background": {
                val: "#000000",
                enabled: false,
                alias: "background",
                type: 'color'
            },
            "borderColor": {
                val: "#000000",
                enabled: false,
                alias: "border-color",
                type: 'color'
            },
        }
    },
}

export default styles