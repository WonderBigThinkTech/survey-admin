import { InputLabel, FormLabel } from "@mui/material";

export default function Label({ label, asInputLabel, ...InputLabelProps }) {
  return asInputLabel ? (
    <InputLabel {...InputLabelProps}>{label}</InputLabel>
  ) : (
    <FormLabel>{label}</FormLabel>
  );
}
