import React, { useCallback, useEffect, useRef, useState } from "react";
import { X } from "react-bootstrap-icons";

const EditableTagsInput = ({
  tags = [],
  className,
  onTagsChange,
  errors,
  disabled,
  inputPlaceHolder = "Enter here...",
}) => {
  const inputRefs = useRef([]);

  const focus = (index) => {
    if (!inputRefs.current[index]) return;
    const input = inputRefs.current[index];
    input.focus();
  };

  const blur = (index) => {
    if (!inputRefs.current[index]) return;
    const input = inputRefs.current[index];
    input.blur();
  };

  const handleTagChange = (value, index) => {
    const newTags = [...tags];
    newTags[index] = value;
    onTagsChange(newTags);
    focus(index);
  };

  const handleRemoveTag = (index) => {
    const filteredTags = tags.filter((_, i) => i !== index);
    onTagsChange(filteredTags);
  };

  // Refs assignment function to manage dynamic inputs
  const setRefs = (element, index) => {
    inputRefs.current[index] = element;
  };

  const calculateWidth = (value) => {
    if (!value) return "5ch";
    if (value.length >= 40) return "40ch";
    else return `${value.length + 2}ch`;
  };

  return (
    <div
      className={`border hover rounded pt-1 d-flex flex-wrap ${className}`}
      onClick={(e) => {
        focus(tags.length);
      }}
    >
      {[...tags, ""].map((tag, index) => (
        <div key={index} className="ms-1 mb-1">
          <div
            className={`${
              index >= tags.length ? "border-0" : "border"
            } p-1 d-flex align-items-center`}
          >
            {index < tags.length && (
              <span className="fw-bold">{index + 1}.</span>
            )}
            <input
              ref={(element) => setRefs(element, index)}
              className="border-0"
              type="text"
              disabled={disabled}
              onFocus={(e) => {
                e.stopPropagation();
                focus(index);
              }}
              onBlur={(e) => {
                e.stopPropagation();
                blur(index);
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              onChange={(e) => handleTagChange(e.target.value, index)}
              style={{
                background: "transparent",
                outline: "none",
                width:
                  index < tags.length
                    ? calculateWidth(tag)
                    : index >= tags.length
                    ? calculateWidth(inputPlaceHolder)
                    : "auto",
              }}
              value={tag}
              placeholder={index >= tags.length ? inputPlaceHolder : ""}
            />
            {!disabled && (
              <span
                onClick={() => handleRemoveTag(index)}
                className={`text-danger ${
                  false || index >= tags.length ? "invisible" : ""
                } hover-light mx-1`}
                style={{ cursor: "pointer" }}
              >
                <X size={18} />
              </span>
            )}
          </div>
          {errors && errors[index] && (
            <h6 className="smallFont text-danger ms-2 mb-0">{errors[index]}</h6>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditableTagsInput;
