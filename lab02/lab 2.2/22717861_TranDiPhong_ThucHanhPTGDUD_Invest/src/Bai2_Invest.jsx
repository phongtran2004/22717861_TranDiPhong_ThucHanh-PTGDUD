import React, { useState } from "react";

export default function InvestmentCalculator() {
  const [initialAmount, setInitialAmount] = useState(""); // Tiền đầu tư
  const [interestRate, setInterestRate] = useState(""); // Lãi suất
  const [targetAmount, setTargetAmount] = useState(""); // Mục tiêu
  const [calculationResult, setCalculationResult] = useState(null); // Kết quả tính toán theo từng năm

  function handleInitialAmountChange(e) {
    setInitialAmount(e.target.value);
  }

  function handleInterestRateChange(e) {
    setInterestRate(e.target.value);
  }

  function handleTargetAmountChange(e) {
    setTargetAmount(e.target.value);
  }

  function handleCalculate() {
    const money = parseInt(initialAmount); 
    const rate = parseInt(interestRate) / 100; 
    const goal = parseInt(targetAmount); 

    // Kiểm tra nếu nhập liệu không hợp lệ
    if (isNaN(money) || isNaN(rate) || isNaN(goal)) {
      alert("Vui lòng nhập đúng số cho tất cả các trường.");
      return;
    }

    let year = 2024; 
    let currentAmount = money; 
    const resultData = [];

    // Tính toán theo từng năm cho đến khi đạt mục tiêu
    while (currentAmount < goal) {
      let endYearAmount = currentAmount + (currentAmount * rate); // Tính số tiền cuối năm (bao gồm lãi)

      // Kiểm tra nếu số tiền cuối năm đã đạt hoặc vượt qua mục tiêu
      if (endYearAmount >= goal) {
        break; 
      }

      year++;
      resultData.push({
        year: year,
        money: currentAmount.toFixed(0), 
        rate: (rate * 100).toFixed(0), 
        endYear: endYearAmount.toFixed(0), 
      });

      currentAmount = endYearAmount; 
    }

    setCalculationResult(resultData); 
  }

  return (
    <div>
        <img src="./src/assets/invest.jpg" alt="" />
      <h2>Tính Toán Đầu Tư</h2>
      <label htmlFor="amountInput">Nhập số tiền đầu tư</label>
      <input
        id="amountInput"
        value={initialAmount}
        onChange={handleInitialAmountChange}
        type="text"
        placeholder="Số tiền đầu tư"
      />
      <br />
      <label htmlFor="rateInput">Nhập lãi suất: </label>
      <input
        id="rateInput"
        value={interestRate}
        onChange={handleInterestRateChange}
        type="text"
        placeholder="Lãi suất theo %"
      />
      <br />
      <label htmlFor="targetInput">Nhập mục tiêu: </label>
      <input
        id="targetInput"
        value={targetAmount}
        onChange={handleTargetAmountChange}
        type="text"
        placeholder="Mục tiêu cần đạt"
      />
      <br />
      <br />
      <button onClick={handleCalculate}>Tính</button>
      <br />
      <br />
      {calculationResult && calculationResult.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {calculationResult.map((data, index) => (
              <tr key={index}>
                <td>{data.year}</td>
                <td>{data.money}</td>
                <td>{data.rate}</td>
                <td>{data.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
