import "./App.css";

const data = [
  { Gender: "Male", HeightCm: 171, WeightKg: 96 },
  { Gender: "Male", HeightCm: 175, WeightKg: 85 },
  { Gender: "Male", HeightCm: 180, WeightKg: 77 },
  { Gender: "Female", HeightCm: 166, WeightKg: 62 },
  { Gender: "Female", HeightCm: 150, WeightKg: 70 },
  { Gender: "Female", HeightCm: 167, WeightKg: 82 },
];

function bmiCalculate(weight, height) {
  let bmi = (weight / (height * height)).toFixed(2);
  return bmi; 
}

function Invoice(){
  const tableBody = data.map((row, index) => {
    const bmi = bmiCalculate(row.WeightKg, row.HeightCm / 100);
    let category = "", healthRisk = "";
    if (bmi < 18.5) {
      category = "Underweight";
      healthRisk = "Malnutrition risk";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
      healthRisk = "Low risk";
    }
    else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
      healthRisk = "Enhanced risk";
    }
    else if (bmi >= 30 && bmi < 34.9) {
      category = "Moderately obese";
      healthRisk = "Medium risk";
    }
    else if (bmi >= 35 && bmi < 39.9) {
      category = "Severely obese";
      healthRisk = "High risk";
    }
    else if (bmi >= 40) {
      category = "Very severely obese";
      healthRisk = "Very high risk";
    }
    return (
      <tr key={index}>
        <td>{row.Gender}</td>
        <td>{row.HeightCm}</td>
        <td>{row.WeightKg}</td>
        <td>{bmi}</td>
        <td>{category}</td>
        <td>{healthRisk}</td>
      </tr>);
  });

  return (
    <div className="App">
      <table>
        <tr>
          <th>Gender</th>
          <th>HeightCm</th>
          <th>WeightKg</th>
          <th>BMI (Body Mass Index)</th>
          <th>BMI Category</th>
          <th> Health risk</th>
        </tr>
        {tableBody}
      </table>
    </div>
  );
}

export default Invoice;
