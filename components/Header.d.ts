/// <reference types="react" />
import * as React from 'react';
export declare type Props = {
    Logo: Function;
    titles: Array<string>;
    baseUrl: string;
};
export declare type State = {
    isActive: boolean;
};
export declare class Header extends React.PureComponent<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
