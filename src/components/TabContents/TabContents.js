import React from "react";

function TabContents({ activeView, children }) {
  return (
    <div className="tab-content">
      {children.map(child => {
        if (child.props.label !== activeView) return undefined;
        return child;
      })}
    </div>
  );
}

export default TabContents;
