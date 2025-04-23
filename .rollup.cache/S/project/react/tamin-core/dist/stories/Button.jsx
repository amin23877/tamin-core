import { __rest } from "tslib";
import React from 'react';
import './button.css';
/** Primary UI component for user interaction */
export const Button = (_a) => {
    var { primary = false, size = 'medium', backgroundColor, label } = _a, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';
    return (<button type="button" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} {...props}>
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>);
};
//# sourceMappingURL=Button.jsx.map