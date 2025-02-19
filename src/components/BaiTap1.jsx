import { useState } from 'react'


const BaiTap1 = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState(null);

    const handleCal = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        if (isNaN(a) || isNaN(b)) {
            setResult("Vui lòng nhập số hợp lệ");
            return;
        }
        let res;
        switch (operation) {
            case "add":
                res = a + b;
                break;
            case "subtract":
                res = a - b;
                break;
            case "multiply":
                res = a * b;
                break;
            case "divide":
                res = b !== 0 ? a / b : "Không thể chia cho 0";
                break;
            default:
                res = "Phép toán không hợp lệ";
        }
        setResult(res);
    };

    return (
        <>
            <h1>Bài tập 1</h1>
            <input
                type="number"
                onChange={(e) => setNum1(parseFloat(e.target.value))}
            />
            <input
                type="number"
                onChange={(e) => setNum2(parseFloat(e.target.value))}
            />
            <label>
                <input
                    type="radio"
                    onChange={() => setOperation("add")}
                    checked={operation === "add"}
                />
                Cộng
            </label>
            <label>
                <input
                    type="radio"
                    onChange={() => setOperation("subtract")}
                    checked={operation === "subtract"}
                />
                Trừ
            </label>
            <label>
                <input
                    type="radio"
                    onChange={() => setOperation("multiply")}
                    checked={operation === "multiply"}
                />
                Nhân
            </label>
            <label>
                <input
                    type="radio"
                    onChange={() => setOperation("divide")}
                    checked={operation === "divide"}
                />
                Chia
            </label>
            <br />
            <button type="button" onClick={handleCal}>
                Thực hiện phép tính
            </button>
            <br />
            {result !== null && <span>KẾT QUẢ = {result}</span>}
        </>
    );
};

export default BaiTap1;
