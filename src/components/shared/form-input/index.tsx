import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/ui/form";
import { FormInputProps } from "./types";
import { renderFieldByType } from "./render-field-by-types";
import { Label } from "@/ui/label";

export function FormInput(props: FormInputProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={props.name}
      render={({ field }) => {
        return (
          <FormItem title={props.title || props.label}>
            {props.label && (
              <Label>
                {props.label}{" "}
                {props.required && <span className="text-destructive">*</span>}
              </Label>
            )}
            <FormControl>{renderFieldByType(props, field)}</FormControl>
            {props.description && (
              <FormDescription>{props.description}</FormDescription>
            )}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
