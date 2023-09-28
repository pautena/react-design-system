import Typography from "@mui/material/Typography";
import { Variant } from "@mui/material/styles/createTypography";
import { loremIpsum } from "lorem-ipsum";
import { LoremUnit } from "lorem-ipsum/types/src/constants/units";

export interface LoremIpsumPlaceholderProps {
  count?: number;
  units?: LoremUnit;
  variant?: Variant;
}

export const LoremIpsumPlaceholder = ({
  count = 3,
  units = "paragraph",
  variant = "body1",
}: LoremIpsumPlaceholderProps) => {
  return (
    <Typography variant={variant}>
      {loremIpsum({
        count,
        units,
      })}
    </Typography>
  );
};
