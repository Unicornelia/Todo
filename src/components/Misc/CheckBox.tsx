import { useState } from 'react';

const CheckBox = () => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <input
        id="box"
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked((checked) => !checked);
        }}
      />
      <label htmlFor="box" />
      <span>{checked ? 'Checked' : 'Not Checked'}</span>
    </div>
  );
};

export default CheckBox;
