import { __rest } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './button.css';
/** Primary UI component for user interaction */
export const Button = (_a) => {
    var { primary = false, size = 'medium', backgroundColor, label } = _a, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    const mode = primary
        ? 'storybook-button--primary'
        : 'storybook-button--secondary';
    return (_jsxs("button", Object.assign({ type: "button", className: ['storybook-button', `storybook-button--${size}`, mode].join(' ') }, props, { children: [label, _jsx("style", { jsx: true, children: `
        button {
          background-color: ${backgroundColor};
        }
      ` })] })));
};
//# sourceMappingURL=Button.js.map