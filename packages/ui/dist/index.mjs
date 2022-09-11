// src/components/Button/Button.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var Button = React.forwardRef(
  ({
    children,
    className = "",
    loading,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx("button", {
      ref,
      ...props,
      children
    });
  }
);
Button.displayName = "Button";
export {
  Button
};
