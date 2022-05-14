import { Button } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import { CopyProps, CopyState } from "../interfaces";
import React from "react";

export default class Copy extends React.Component<CopyProps, CopyState> {
    constructor(props: CopyProps) {
        super(props);
        this.state = {
            text: "📋 Copy To Clipboard",
        };

        this.run = this.run.bind(this);
    }

    run() {
        copy(this.props.btc);
        this.setState({
            text: "✅ Copied!",
        });
        setTimeout(() => {
            this.setState({
                text: "📋 Copy To Clipboard",
            });
        }, 2000);
    }

    render() {
        return (
            <Button colorScheme="blue" variant="outline" onClick={this.run}>
                {this.state.text}
            </Button>
        );
    }
}
