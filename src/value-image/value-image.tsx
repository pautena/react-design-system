import Box from "@mui/material/Box";
import type { BaseValueProps } from "../value-base";
import { ValueContent } from "../value-content";

export interface ValueImageProps extends BaseValueProps<string> {
	/**
	 * Image size
	 */
	size?: number;
}

const DefaultSize = 100;
const DefaultDenseSize = 50;

/**
 * Displays a image value with a label
 */
export const ValueImage = ({
	label,
	value,
	size: sizeArg,
	dense,
}: ValueImageProps) => {
	const size = sizeArg || (dense ? DefaultDenseSize : DefaultSize);
	return (
		<ValueContent label={label} dense={dense}>
			<Box
				component="img"
				src={value}
				alt={label}
				sx={{ width: size, height: size }}
			/>
		</ValueContent>
	);
};
