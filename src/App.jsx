import { useState } from "react";
import Return_money from "./jsx_files/return_money.jsx"
function App() {
  let [chg_page, set_chg] = useState(0)
  let [b1, setb1] = useState(0)
  let [b2, setb2] = useState(0)
  let [b3, setb3] = useState(0)
  let [stk, set_stk] = useState(Math.floor((Math.random() * 10 + 0)))
  var stcl
  var res
  var output_text
  var add = 0
  console.log(set_chg)
  res = Number(b1) + Number(b2) + Number(b3)
  output_text = "Kết quả của bạn"
  if (res > 0) {
    if (res >= 13) {
      output_text = "Tài"
      add = Math.floor(Math.random() * 10 + 1) / 10
    }
    else if (res < 13) {
      output_text = "Xỉu"
      add = 0 - Math.floor(Math.random() * 10 + 1) / 10
    }
  }
  else {
    output_text = "Kết quả của bạn"
  }
  var click_event = () => {
    setb1(Math.floor(Math.random() * 6 + 1))
    setb2(Math.floor(Math.random() * 6 + 1))
    setb3(Math.floor(Math.random() * 6 + 1))
    stcl = Number((stk - 0.1 + add).toFixed(1))
    if (stcl > 0) {
      set_stk(stcl)
    }
    else {
      set_stk(0)
      output_text = "Kết quả của bạn"
      setb1(0)
      setb2(0)
      setb3(0)
      alert("Vui lòng nạp thêm tiền để chơi tiếp!")
    }
  }
  if (chg_page > 0) {
    if (stk == 0) {
      return (
        <>
          <Return_money />
        </>
      )
    }
  }

  return (
    <>
      <div className="box_start">
        <button className="title">
          <b>
            Tài xỉu 36
          </b>
        </button>
      </div>
      <div className="boxs1">
        <button className="box">
          {b1}
        </button>
        <button className="box">
          {b2}
        </button>
        <button className="box">
          {b3}
        </button>
      </div>
      <div className="boxs2">
        <button className="text_out">
          {output_text}
        </button>
      </div>
      <div className="boxs3">
        <button className="clk_evt" onClick={() => { click_event() }}>
          Quay
        </button>
        <button className="stk">
          {stk} triệu
        </button>
        <button className="add_mny" onClick={() => { set_chg(chg_page + 1) }}>
          +
        </button>
      </div>
    </>
  )
}
export default App;