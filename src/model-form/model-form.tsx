import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { assocPath } from "ramda";
import { type FormEvent, useMemo } from "react";
import { useState } from "react";
import {
	type BasicModelInstance,
	type FieldType,
	type Model,
	newInstanceFromValuesOrZeroValue,
} from "../generators";
import { ModelFormField } from "./model-form-field";

export interface ModelFormProps<T extends BasicModelInstance> {
	model: Model;
	dense?: boolean;
	initialValues?: T;
	saveButtonText: string;
	onSubmit: (values: T) => void;
}

/**
 *
 * ModelForm component is a generic form component for handling model-based forms.
 * It renders form fields based on the provided model and handles form submission.
 */
export const ModelForm = <T extends BasicModelInstance>({
	model,
	saveButtonText,
	dense,
	onSubmit,
	initialValues,
}: ModelFormProps<T>) => {
	const valuesInitialState = useMemo(
		() => newInstanceFromValuesOrZeroValue<T>(model, initialValues),
		[model, initialValues],
	);
	const [values, setValues] = useState<T>(valuesInitialState);

	const setKeyValue = (path: string[], value: FieldType | null) => {
		setValues((v) => assocPath(path, value, v));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(values);
	};

	return (
		<Grid container component="form" spacing={2} onSubmit={handleSubmit}>
			{model.fields.map((f) => (
				<ModelFormField
					key={f.id}
					dense={dense}
					field={f}
					value={values[f.id]}
					update={!!initialValues}
					onChangeValue={setKeyValue}
				/>
			))}
			<Grid item xs={12}>
				<Button
					type="submit"
					variant="contained"
					size={dense ? "small" : "medium"}
				>
					{saveButtonText}
				</Button>
			</Grid>
		</Grid>
	);
};
