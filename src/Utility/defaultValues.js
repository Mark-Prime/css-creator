const defaults = `{
    "css": "",
    "Text" : {
        "enabled": false,
        "props": {
            "fontSize": {
                "val": "16px",
                "enabled": false,
                "alias": "font-size",
                "type": "number"
            },
            "textDecoration": {
                "val": "none",
                "enabled": false,
                "alias": "text-decoration",
                "type": "select",
                "options": ["none", "overline", "line-through", "underline"]
            },
            "textAlign": {
                "val": "left",
                "enabled": false,
                "alias": "text-align",
                "type": "select",
                "options": ["center", "left", "right", "justify"]
            },
            "color": {
                "val": "#000000",
                "enabled": false,
                "alias": "color",
                "type": "color"
            },
            "testIndent": {
                "val": "3px",
                "enabled": false,
                "alias": "text-indent",
                "type": "number"
            },
            "letterSpacing": {
                "val": "3px",
                "enabled": false,
                "alias": "letter-spacing",
                "type": "number"
            },
            "lineHeight": {
                "val": "3px",
                "enabled": false,
                "alias": "line-height",
                "type": "number"
            },
            "wordSpacing": {
                "val": "3px",
                "enabled": false,
                "alias": "word-spacing",
                "type": "number"
            }
        }
    },
    "Content" : {
        "enabled": false,
        "props": {
            "width": {
                "val": "75px",
                "enabled": false,
                "alias": "width",
                "type": "number"
            },
            "minWidth": {
                "val": "60px",
                "enabled": false,
                "alias": "min-width",
                "type": "number"
            },
            "maxWidth": {
                "val": "100px",
                "enabled": false,
                "alias": "max-width",
                "type": "number"
            },
            "height": {
                "val": "20px",
                "enabled": false,
                "alias": "height",
                "type": "number"
            },
            "minHeight": {
                "val": "10px",
                "enabled": false,
                "alias": "min-height",
                "type": "number"
            },
            "maxHeight": {
                "val": "30px",
                "enabled": false,
                "alias": "max-height",
                "type": "number"
            },
            "background": {
                "val": "#000000",
                "enabled": false,
                "alias": "background",
                "type": "color"
            },
            "overflow": {
                "val": "visible",
                "enabled": false,
                "alias": "overflow",
                "type": "select",
                "options": ["visible", "hidden", "scroll", "auto"]
            },
            "overflowX": {
                "val": "visible",
                "enabled": false,
                "alias": "overflow-x",
                "type": "select",
                "options": ["visible", "hidden", "scroll", "auto"]
            },
            "overflowY": {
                "val": "visible",
                "enabled": false,
                "alias": "overflow-y",
                "type": "select",
                "options": ["visible", "hidden", "scroll", "auto"]
            }
        }
    },
    "Padding" : {
        "enabled": false,
        "props": {
            "padding": {
                "val": "3px",
                "enabled": false,
                "alias": "padding",
                "type": "number"
            },
            "paddingShorthand": {
                "isKey": true,
                "enabled": false,
                "alias": "padding",
                "type": "shorthand",
                "props": {
                    "paddingTop": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<top/bottom/all>",
                        "type": "number",
                        "index": 0
                    },
                    "paddingRight": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<right/left>",
                        "type": "number",
                        "index": 1
                    },
                    "paddingBottom": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<bottom>",
                        "type": "number",
                        "index": 2
                    },
                    "paddingLeft": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<left>",
                        "type": "number",
                        "index": 3
                    }
                }
            },
            "paddingTop": {
                "val": "3px",
                "enabled": false,
                "alias": "padding-top",
                "type": "number"
            },
            "paddingLeft": {
                "val": "3px",
                "enabled": false,
                "alias": "padding-left",
                "type": "number"
            },
            "paddingRight": {
                "val": "3px",
                "enabled": false,
                "alias": "padding-right",
                "type": "number"
            },
            "paddingBottom": {
                "val": "3px",
                "enabled": false,
                "alias": "padding-bottom",
                "type": "number"
            }
        }
    },
    "Border" : {
        "enabled": false,
        "props" : {
            "borderShorthand": {
                "isKey": true,
                "enabled": false,
                "alias": "border",
                "type": "shorthand",
                "props": {
                    "borderWidth": {
                        "val": "1px",
                        "enabled": false,
                        "alias": "<width>",
                        "type": "number",
                        "index": 0
                    },
                    "borderStyle": {
                        "val": "solid",
                        "enabled": false,
                        "alias": "<style>",
                        "type": "select",
                        "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
                        "index": 1
                    },
                    "borderColor": {
                        "val": "#000000",
                        "enabled": false,
                        "alias": "<color>",
                        "type": "color",
                        "index": 2
                    }
                }
            },
            "borderWidth": {
                "val": "1px",
                "enabled": false,
                "alias": "border-width",
                "type": "number"
            },
            "borderStyle": {
                "val": "solid",
                "enabled": false,
                "alias": "border-style",
                "type": "select",
                "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"]
            },
            "borderColor": {
                "val": "#000000",
                "enabled": false,
                "alias": "border-color",
                "type": "color"
            },
            "borderTop": {
                "enabled": false,
                "alias": "border-top",
                "type": "shorthand",
                "key": "borderShorthand",
                "props": {
                    "borderWidth": {
                        "val": "1px",
                        "enabled": false,
                        "alias": "<width>",
                        "type": "number",
                        "index": 0
                    },
                    "borderStyle": {
                        "val": "solid",
                        "enabled": false,
                        "alias": "<style>",
                        "type": "select",
                        "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
                        "index": 1
                    },
                    "borderColor": {
                        "val": "#000000",
                        "enabled": false,
                        "alias": "<color>",
                        "type": "color",
                        "index": 2
                    }
                }
            },
            "borderRight": {
                "enabled": false,
                "alias": "border-right",
                "type": "shorthand",
                "key": "borderShorthand",
                "props": {
                    "borderWidth": {
                        "val": "1px",
                        "enabled": false,
                        "alias": "<width>",
                        "type": "number",
                        "index": 0
                    },
                    "borderStyle": {
                        "val": "solid",
                        "enabled": false,
                        "alias": "<style>",
                        "type": "select",
                        "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
                        "index": 1
                    },
                    "borderColor": {
                        "val": "#000000",
                        "enabled": false,
                        "alias": "<color>",
                        "type": "color",
                        "index": 2
                    }
                }
            },
            "borderLeft": {
                "enabled": false,
                "alias": "border-left",
                "type": "shorthand",
                "key": "borderShorthand",
                "props": {
                    "borderWidth": {
                        "val": "1px",
                        "enabled": false,
                        "alias": "<width>",
                        "type": "number",
                        "index": 0
                    },
                    "borderStyle": {
                        "val": "solid",
                        "enabled": false,
                        "alias": "<style>",
                        "type": "select",
                        "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
                        "index": 1
                    },
                    "borderColor": {
                        "val": "#000000",
                        "enabled": false,
                        "alias": "<color>",
                        "type": "color",
                        "index": 2
                    }
                }
            },
            "borderBottom": {
                "enabled": false,
                "alias": "border-bottom",
                "type": "shorthand",
                "key": "borderShorthand",
                "props": {
                    "borderWidth": {
                        "val": "1px",
                        "enabled": false,
                        "alias": "<width>",
                        "type": "number",
                        "index": 0
                    },
                    "borderStyle": {
                        "val": "solid",
                        "enabled": false,
                        "alias": "<style>",
                        "type": "select",
                        "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
                        "index": 1
                    },
                    "borderColor": {
                        "val": "#000000",
                        "enabled": false,
                        "alias": "<color>",
                        "type": "color",
                        "index": 2
                    }
                }
            },
            "borderRadius": {
                "val": "0px",
                "enabled": false,
                "alias": "border-radius",
                "type": "number"
            }
        }
    },
    "Outline" : {
        "enabled": false,
        "props" : {
            "outlineShorthand": {
                "isKey": true,
                "enabled": false,
                "alias": "outline",
                "type": "shorthand",
                "props": {
                    "outlineWidth": {
                        "val": "1px",
                        "enabled": false,
                        "alias": "<width>",
                        "type": "number",
                        "index": 0
                    },
                    "outlineStyle": {
                        "val": "solid",
                        "enabled": false,
                        "alias": "<style>",
                        "type": "select",
                        "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"],
                        "index": 1
                    },
                    "outlineColor": {
                        "val": "#000000",
                        "enabled": false,
                        "alias": "<color>",
                        "type": "color",
                        "index": 2
                    }
                }
            },
            "outlineWidth": {
                "val": "1px",
                "enabled": false,
                "alias": "outline-width",
                "type": "number"
            },
            "outlineStyle": {
                "val": "solid",
                "enabled": false,
                "alias": "outline-style",
                "type": "select",
                "options": ["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "none", "hidden"]
            },
            "outlineColor": {
                "val": "#000000",
                "enabled": false,
                "alias": "outline-color",
                "type": "color"
            },
            "outlineColor": {
                "val": "0px",
                "enabled": false,
                "alias": "outline-offset",
                "type": "number"
            }
        }
    },
    "Margin" : {
        "enabled": false,
        "props": {
            "margin": {
                "val": "3px",
                "enabled": false,
                "alias": "margin",
                "type": "number"
            },
            "marginShorthand": {
                "isKey": true,
                "enabled": false,
                "alias": "margin",
                "type": "shorthand",
                "props": {
                    "marginTop": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<top/bottom/all>",
                        "type": "number",
                        "index": 0
                    },
                    "marginRight": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<right/left>",
                        "type": "number",
                        "index": 1
                    },
                    "marginBottom": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<bottom>",
                        "type": "number",
                        "index": 2
                    },
                    "marginLeft": {
                        "val": "3px",
                        "enabled": false,
                        "alias": "<left>",
                        "type": "number",
                        "index": 3
                    }
                }
            },
            "marginTop": {
                "val": "3px",
                "enabled": false,
                "alias": "margin-top",
                "type": "number"
            },
            "marginLeft": {
                "val": "3px",
                "enabled": false,
                "alias": "margin-left",
                "type": "number"
            },
            "marginRight": {
                "val": "3px",
                "enabled": false,
                "alias": "margin-right",
                "type": "number"
            },
            "marginBottom": {
                "val": "3px",
                "enabled": false,
                "alias": "margin-bottom",
                "type": "number"
            }
        }
    },
    "Display" : {
        "enabled": false,
        "props": {
            "display": {
                "val": "block",
                "enabled": false,
                "alias": "display",
                "type": "select",
                "isKey": true,
                "options": ["block", "inline", "inline-block", "flex", "inline-flex", "grid", "inline-grid", "flow", "flow-root", "none", "contents", "table", "table-row", "list-item", "inherit", "initial", "revert", "unset"]
            },
            "flexDirection": {
                "val": "row",
                "enabled": false,
                "alias": "flex-direction",
                "type": "select",
                "options": ["row", "row-reverse", "column", "column-reverse", "inherit", "initial", "revert", "unset"],
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true
                }
            },
            "flexWrap": {
                "val": "nowrap",
                "enabled": false,
                "alias": "flex-wrap",
                "type": "select",
                "options": ["nowrap", "wrap", "wrap-reverse", "inherit", "initial", "revert", "unset"],
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true
                }
            },
            "justifyContent": {
                "val": "normal",
                "enabled": false,
                "alias": "justify-content",
                "type": "select",
                "options": ["normal", "start", "center", "end", "flex-start", "flex-end", "left", "right", "baseline", "first baseline", "last baseline", "space-between", "space-around", "space-evenly", "stretch", "inherit", "initial", "revert", "unset"],
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true
                }
            },
            "alignContent": {
                "val": "normal",
                "enabled": false,
                "alias": "align-content",
                "type": "select",
                "options": ["normal", "start", "center", "end", "flex-start", "flex-end", "left", "right", "between", "around", "evenly", "inherit", "initial", "revert", "unset"],
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true
                }
            },
            "alignItems": {
                "val": "normal",
                "enabled": false,
                "alias": "align-items",
                "type": "select",
                "options": ["normal", "start", "center", "end", "flex-start", "flex-end", "baseline", "stretch", "inherit", "initial", "revert", "unset"],
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true
                }
            },
            "gap": {
                "val": "3px",
                "enabled": false,
                "alias": "gap",
                "type": "number",
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true,
                    "grid": true,
                    "inline-grid": true
                }
            },
            "rowGap": {
                "val": "3px",
                "enabled": false,
                "alias": "row-gap",
                "type": "number",
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true,
                    "grid": true,
                    "inline-grid": true
                }
            },
            "columnGap": {
                "val": "3px",
                "enabled": false,
                "alias": "column-gap",
                "type": "number",
                "key": "display",
                "showOnValue": {
                    "flex": true,
                    "inline-flex": true,
                    "grid": true,
                    "inline-grid": true
                }
            }
        }
    },
    "Position" : {
        "enabled": false,
        "props": {
            "position": {
                "val": "static",
                "enabled": false,
                "alias": "position",
                "type": "select",
                "isKey": true,
                "options": ["static", "sticky", "absolute", "fixed", "relative", "inherit", "initial", "revert", "unset"]
            },
            "top": {
                "val": "3px",
                "enabled": false,
                "alias": "top",
                "type": "number",
                "min": "none",
                "key": "position",
                "showOnValue": {
                    "absolute": true,
                    "relative": true,
                    "fixed": true,
                    "sticky": true
                }
            },
            "left": {
                "val": "3px",
                "enabled": false,
                "alias": "left",
                "type": "number",
                "min": "none",
                "key": "position",
                "showOnValue": {
                    "absolute": true,
                    "relative": true,
                    "fixed": true,
                    "sticky": true
                }
            },
            "right": {
                "val": "3px",
                "enabled": false,
                "alias": "right",
                "type": "number",
                "min": "none",
                "key": "position",
                "showOnValue": {
                    "absolute": true,
                    "relative": true,
                    "fixed": true,
                    "sticky": true
                }
            },
            "bottom": {
                "val": "3px",
                "enabled": false,
                "alias": "bottom",
                "type": "number",
                "min": "none",
                "key": "position",
                "showOnValue": {
                    "absolute": true,
                    "relative": true,
                    "fixed": true,
                    "sticky": true
                }
            },
            "zIndex": {
                "val": "3",
                "enabled": false,
                "alias": "z-index",
                "type": "number",
                "min": "none",
                "suffixOverrides": [],
                "key": "position",
                "showOnValue": {
                    "absolute": true,
                    "relative": true,
                    "fixed": true,
                    "sticky": true
                }
            },
            "float": {
                "val": "none",
                "enabled": false,
                "alias": "float",
                "type": "select",
                "options": ["left", "right", "none", "inline-start", "inline-end", "inherit", "initial", "revert", "unset"]
            },
            "clear": {
                "val": "none",
                "enabled": false,
                "alias": "clear",
                "type": "select",
                "options": ["left", "right", "none", "inline-start", "inline-end", "inherit", "initial", "revert", "unset"]
            }
        }
    },
    "Misc" : {
        "enabled": false,
        "props" : {
            "transitionShorthand": {
                "enabled": false,
                "alias": "transition",
                "type": "shorthand",
                "props": {
                    "transitionProperty": {
                        "val": "all",
                        "enabled": false,
                        "alias": "<property>",
                        "type": "select",
                        "options": ["all"],
                        "index": 0
                    },
                    "transitionDuration": {
                        "val": "0.2s",
                        "enabled": false,
                        "alias": "<duration>",
                        "type": "number",
                        "step": "0.1",
                        "suffixOverrides": [ "s", "ms" ],
                        "suffixSelected": "s",
                        "index": 1
                    },
                    "transitionTimingFunction": {
                        "val": "ease",
                        "enabled": false,
                        "alias": "<timing-function>",
                        "type": "select",
                        "options": [ "linear", "ease", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"],
                        "index": 2
                    },
                    "transitionDelay": {
                        "val": "0s",
                        "enabled": false,
                        "alias": "<delay>",
                        "type": "number",
                        "step": "0.1",
                        "suffixOverrides": [ "s", "ms" ],
                        "suffixSelected": "s",
                        "index": 3
                    }
                }
            },
            "Opacity": {
                "val": "1",
                "enabled": false,
                "alias": "opacity",
                "type": "number",
                "min": "0",
                "max": "1",
                "step": "0.1",
                "suffixOverrides": []
            },
            "cursor": {
                "val": "none",
                "enabled": false,
                "alias": "cursor",
                "type": "select",
                "options": ["default", "pointer", "alias", "all-scroll", "auto", "cell", "context-menu",
                    "col-resize", "copy", "crosshair", "e-resize", "ew-resize", "help", "move",
                    "n-resize", "ne-resize", "nesw-resize", "ns-resize", "nw-resize", "nwse-resize",
                    "no-drop", "none", "not-allowed", "progress", "row-resize", "s-resize", "se-resize",
                    "sw-resize", "text", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out",
                    "inherit", "initial", "revert", "unset"]
            }
        }
    }
}`

export default defaults;