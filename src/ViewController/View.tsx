import React from "react";
import type { ViewProps } from "./types";
/**
 * View Component
 * Description: Renders the specified component based on the active prop.
 
 * Props:
 * - id: Unique identifier for the view.
 * - active: Boolean indicating if the view is active.
 * - component: The React component to render when active.
 * - navigateTo?: Function to navigate to another view.
 */
export class View extends React.PureComponent<ViewProps> {
    render() {
        const { 
            component: Component, 
            active = false, 
            navigateTo = () => {} 
            } = this.props;

        return (
            <div className={`view ${active ? "view--active" : "view--inactive"}`}>
                <Component active={active} navigateTo={navigateTo} />
            </div>
        );
    }
}