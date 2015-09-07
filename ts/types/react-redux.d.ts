/// <reference path="../references.ts" />

declare module "react-redux" {
  import * as redux from 'redux';
  import * as React from 'react';

    interface ProviderProps {
        store: redux.Store;
        children?: Function;
        key?: string;
    }

    interface ProviderState {
        store: redux.Store;
    }

    class Provider extends React.Component<ProviderProps, ProviderState> {
      render(): any;
    }

    interface ConnectorProps {
        children: Function;
        select: Function;
    }

    class Connector extends React.Component<ConnectorProps, any> {}

    function connect(...args): Function;
}
