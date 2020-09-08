import React from "react";
import classname from "classname";

export default function Input({
  type,
  error,
  placeholder,
  name,
  handler,
  value,
  info,
}) {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classname("form-control", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        onChange={handler}
        value={value || ""}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}
