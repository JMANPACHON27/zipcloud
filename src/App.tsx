import React, { useState } from "react";
import "./App.css";

type AddressResult = {
  address1: string;
  address2: string;
  address3: string;
};

const ZIPCODE_REGEX = /^(\d{7}|\d{3}-\d{4})$/;

function App() {
  const [zipcode, setZipcode] = useState("");
  const [result, setResult] = useState<AddressResult | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setResult(null);
    setError("");

    // Validate zipcode
    if (!ZIPCODE_REGEX.test(zipcode)) {
      setError(
        "Zipcode không đúng định dạng. Ví dụ hợp lệ: 7830060, 1500012, 272-0141"
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode.replace(
          "-",
          ""
        )}`
      );
      const data = await response.json();

      if (data.status !== 200 || !data.results || data.results.length === 0) {
        setError("Không tìm thấy địa chỉ cho zipcode này.");
        setLoading(false);
        return;
      }

      const { address1, address2, address3 } = data.results[0];
      setResult({ address1, address2, address3 });
    } catch (err) {
      setError("Đã có lỗi xảy ra khi gọi API.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Tìm kiếm địa chỉ theo Zipcode (Japan)</h2>
      <div className="form-group">
        <input
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          placeholder="Nhập zipcode (VD: 7830060, 1500012, 272-0141)"
          className="input"
        />
        <button onClick={handleSearch} className="btn">
          Search
        </button>
      </div>
      {loading && <div>Đang tải...</div>}
      {error && <div className="error">{error}</div>}
      {result && (
        <div className="result">
          <div>
            <b>address1:</b> {result.address1}
          </div>
          <div>
            <b>address2:</b> {result.address2}
          </div>
          <div>
            <b>address3:</b> {result.address3}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;