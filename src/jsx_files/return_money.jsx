import App from "../App";
import { useState } from "react";
function return_money() {
    let [value1, get_value1] = useState()
    let [value2, get_value2] = useState()
    let [value3a, get_value3a] = useState()
    let [value3b, get_value3b] = useState()
    String(value1)
    Number(value2)
    Number(value3a)
    Number(value3b)
    if(value1 == "4,4" || value1 == "4.4" && value2 == 6 && value3a == 10000 && value3b == 5000)
    {
        return(
            <>
                <App />
            </>
        )
    }
    return (
            <>
                <div className="box1_rm">
                    <p className="de_bai">
                        Câu 1: Cho đường tròn (O; 5 cm). Kẻ hai tiếp tuyến AC và BC cắt nhau tại C (A, B là hai tiếp điểm). Gọi H là giao điểm giữa AB và OC. Biết BC = 10 cm, tính độ dài cạnh CH (làm tròn đến hàng phần mười).
                    </p>
                </div>
                <div className="box2_rm">
                    <input type="text"
                        placeholder="Nhập đáp án của bạn"
                        value={value1}
                        onChange={(e) => { get_value1(e.target.value) }}
                    /> (cm)
                </div>
                <div className="box1_rm">
                    <p className="de_bai">
                        Câu 2: Anh Hiếu và chị Phương Anh có một vườn rau má hình vuông có diện tích 36km<sup>2</sup>. Hãy giúp hai anh chị tìm độ dài cạnh của vườn rau đó.
                    </p>
                </div>
                <div className="box2_rm">
                    <input type="text"
                        placeholder="Nhập đáp án của bạn"
                        value={value2}
                        onChange={(e) => { get_value2(e.target.value) }}
                    />(km)
                </div>
                <div className="box1_rm">
                    <p className="de_bai">
                        Câu 3: Anh Phước kinh doanh bao cao su trong 2 tháng. Trong tháng thứ nhất anh bạnbán 10 nghìn 1 cái. Nhưng vì kinh tế khó khăn nên trong tháng sau anh phải nâng lên 20 nghìn 1 cái. Sau 2 tháng tổng số bao cao su mà anh Phước bán được là 15 nghìn cái và thu được 200 triệu. Hãy giúp anh Phước tính số bao cao su mà anh bán được trong từng tháng.
                    </p>
                </div>
                <div className="box2_rm">
                    <input type="text"
                        placeholder="Nhập đáp án trong tháng thứ nhất của bạn"
                        value={value3a}
                        onChange={(e) => { get_value3a(e.target.value) }}
                    /> (cái)

                </div>
                <div className="box3_rm">
                    <input type="text"
                        placeholder="Nhập đáp án trong tháng thứ hai của bạn"
                        value={value3b}
                        onChange={(e) => { get_value3b(e.target.value) }}
                    /> (cái)
                </div>
            </>
        )
}
export default return_money;
