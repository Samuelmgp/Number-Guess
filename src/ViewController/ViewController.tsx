import React  from "react";
import type { ViewID, ViewProps } from "./types";
import { View } from "./View";

interface State {
    currentView: ViewID;
    previousView?: ViewID;
    pageProps?: any; // Optional state to hold props for the current page
}

/**
 * ViewController Component
 * Description: Manages multiple View components and handles navigation between them.
 * 
 * State:
 * - currentView: The ID of the currently active view.
 * - previousView: The ID of the previously active view (optional).
 * 
 * Methods:
 * - navigateTo: Function to change the current view to the specified view ID.
 *
 * Props:
 * - children: The View components to be managed by the ViewController.
 */
export class ViewController extends React.Component<React.PropsWithChildren, State> {
    state: State = {
        currentView: 'home', // default view ID
        previousView: undefined,
        pageProps: undefined,
    };

    navigateTo = (to?: ViewID, props?: any) => {
        if (to === null || to === undefined) return;
        if (to === this.state.currentView || to === "") return; // No change if navigating to the same view
        if (to === 'previous' && this.state.previousView) {
            this.setState((prevState) => ({
                currentView: prevState.previousView!,
                previousView: prevState.previousView ? prevState.currentView : undefined,
                pageProps: undefined, // Clear page props when navigating back
            }));
            return;
        }
        
        this.setState((prevState) => ({
            previousView: prevState.currentView,
            currentView: to,
            pageProps: props ?? undefined, // Clear page props when navigating to a new view
        }));
    };

    render() {
        const { currentView } = this.state;

        return (
            <div className="view-controller">
                {React.Children.map(this.props.children, (child) => {
                    if (!React.isValidElement<ViewProps>(child)) return null;
                    if (child.type !== View) return null;

                    return React.cloneElement<ViewProps>(child, {
                        active: child.props.id === currentView,
                        navigateTo: this.navigateTo,
                        props: child.props.id === currentView ? this.state.pageProps : child.props.props, // Pass pageProps to the active view
                    });
                })}
            </div>
        )
    }
}

