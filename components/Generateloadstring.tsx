import { Center, Button, Input, Code } from "@chakra-ui/react";
import React from "react";
import { CreateProps, CreateState } from "../interfaces";
import copy from "copy-to-clipboard";

export default class generateloadstring extends React.Component<CreateProps, CreateState> {
    downloadloadstring = () => {
        const element = document.createElement("a");
        const file = new Blob([this.state.output], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "loadstring.txt";
        document.body.appendChild(element);
        element.click();
      };
      
    constructor(props: CreateProps) {
        super(props);
        this.state = {
            output: null,
            text: "📋 Copy To Clipboard",
        };
        this.handleChange = this.handleChange.bind(this);
        this.run = this.run.bind(this);
    }

    run() {
        copy(this.state.output);
        this.setState({
            text: "✅ Copied!",
        });
        setTimeout(() => {
            this.setState({
                text: "📋 Copy To Clipboard",
            });
        }, 2000);
    }

    handleChange(element) {
        if (element.target.value == "") {
            this.setState({
                output: null,
            });
        } else {
            this.setState({
                output:
                    'loadstring(game:HttpGet("' + element.target.value + '",true))()',
            });
        }
    }

    render()    {
        return (
            <>
                        <Input
                            id="url" 
                            variant='filled' 
                            placeholder='Insert RAW Link' 
                            type="url"
                            onChange={this.handleChange}
                        />                     
                        
                        {this.state.output ? (
                            <>
                                <Center>
                                <Code>{this.state.output}</Code>
                                </Center>
                                <Button
                                    colorScheme="blue"
                                    onClick={this.run}
                                    variant="outline"
                                >
                                    {this.state.text}
                                </Button>
                                <Button
                                    colorScheme="blue"
                                    variant="outline"
                                    onClick={this.downloadloadstring}
                                >
                                    Download Loadstring
                                    </Button>
                            </>
                        ) : null}

            </>
        );
    }
}

