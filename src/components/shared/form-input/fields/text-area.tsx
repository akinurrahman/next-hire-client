import React from "react";
import { TextareaFieldProps } from "../types";
import { ControllerRenderProps } from "react-hook-form";
import { Textarea } from "@/ui/textarea";

interface TextAreaProps {
  props: TextareaFieldProps;
  field: ControllerRenderProps;
}

const TextArea = ({ props, field }: TextAreaProps) => {
  return (
    <Textarea placeholder={props.placeholder} rows={props.rows} {...field} />
  );
};

export default TextArea;
