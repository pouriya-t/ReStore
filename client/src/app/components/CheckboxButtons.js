import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

export default function CheckboxButtons({ items, checked, onChange }) {
  const [checkedItems, setCheckedItems] = useState(checked || []);

  function handleChecked(value) {
    const currentIndex = checkedItems.findIndex((item) => item === value);
    let newChecked = [];
    if (currentIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((item) => item !== value);
    setCheckedItems(newChecked);
    onChange(newChecked);
  }

  return (
    <FormGroup>
      {items.map((item) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedItems.indexOf(item) !== -1}
              onClick={() => handleChecked(item)}
            />
          }
          label={item}
          key={item}
        />
      ))}
    </FormGroup>
  );
}
