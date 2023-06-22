import { Checkbox, FormControlLabel } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export function Radio({ label, ...props }) {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<RadioButtonCheckedIcon />}
          {...props}
        />
      }
    />
  );
}
