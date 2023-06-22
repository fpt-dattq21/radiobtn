import { useState } from "react";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Radio } from "./Radio";

function CheckedIcon() {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: "100%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#1976d2",
        backgroundColor: "white",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          borderRadius: "100%",
          position: "absolute",
          marginLeft: "auto",
          width: 12,
          height: 12,
          backgroundColor: "#1976d2",
        }}
      ></div>
    </div>
  );
}

function UncheckedIcon() {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: "100%",
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "grey",
      }}
    ></div>
  );
}

function App() {
  const [value, setValue] = useState();
  const [customIcValue, setCustomIcValue] = useState();

  return (
    <div style={{ padding: 24 }}>
      <div>
        <h4>Default radio buttons</h4>
        <input type="radio" id="html" name="fav_language" value="HTML" />{" "}
        <label htmlFor="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />{" "}
        <label htmlFor="css">CSS</label>
        <br />{" "}
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
          <label htmlFor="javascript">JavaScript</label>
      </div>

      <div>
        <h4>Custom radio buttons</h4>
        {["Javascript", "PHP", "Ruby", "Perl"].map((item) => (
          <div key={item}>
            <Radio
              label={item}
              value={item}
              checked={value === item}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        ))}
      </div>

      <div>
        <h4>Custom icons</h4>
        {["Javascript", "PHP", "Ruby", "Perl"].map((item) => (
          <div key={item}>
            <Radio
              label={item}
              value={item}
              checked={customIcValue === item}
              onChange={(e) => setCustomIcValue(e.target.value)}
              checkedIcon={<CheckedIcon />}
              icon={<UncheckedIcon />}
            />
          </div>
        ))}
      </div>

      <div>
        <h4>Invalid state</h4>
        {["Javascript", "PHP", "Ruby", "Perl"].map((item) => (
          <div key={item}>
            <Radio
              label={item}
              value={item}
              icon={<RadioButtonUncheckedIcon color="error" />}
              checkedIcon={<RadioButtonCheckedIcon color="error" />}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
