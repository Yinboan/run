"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 基本类型
let a = "hello world";
// 元组
const tuple1 = [1, '2', false];
const tuple2 = [['1', 111], ['hi', 2]];
// 枚举
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 0] = "SUCCESS";
    StatusCode[StatusCode["FAIL"] = -1] = "FAIL";
})(StatusCode || (StatusCode = {}));
// 联合类型 union
let union1;
union1 = 1;
union1 = '1';
let book = {
    id: 1,
    price: '99999'
};
// function
function add(a, b) {
    return Number(a + (b || '0'));
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = yield res.json();
    });
}
getData();
// class
class Live {
    constructor(id) {
        this.id = id;
    }
}
// 泛型
function print(data) {
    console.log(data);
}
print(123);
print('123');
print(false);
// 工具 
// 1.Record（指定kv对类型）
const cats = {
    1: {
        name: 'jack',
        sex: 0
    },
    2: {
        name: 'lucy',
        sex: 1
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU87QUFDUCxJQUFJLENBQUMsR0FBVyxhQUFhLENBQUE7QUFFN0IsS0FBSztBQUNMLE1BQU0sTUFBTSxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7QUFDekQsTUFBTSxNQUFNLEdBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUUxRCxLQUFLO0FBQ0wsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ1gsaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7QUFDYixDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQUVELGFBQWE7QUFDYixJQUFJLE1BQXVCLENBQUE7QUFDM0IsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUNWLE1BQU0sR0FBRyxHQUFHLENBQUE7QUFxQlosSUFBSSxJQUFJLEdBQVM7SUFDYixFQUFFLEVBQUUsQ0FBQztJQUNMLEtBQUssRUFBRSxPQUFPO0NBQ2pCLENBQUE7QUFFRCxXQUFXO0FBQ1gsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVU7SUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakMsQ0FBQztBQVNELFNBQWUsT0FBTzs7UUFDbEIsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUNyRSxJQUFJLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQVUsQ0FBQTtJQUN2QyxDQUFDO0NBQUE7QUFDRCxPQUFPLEVBQUUsQ0FBQTtBQUdULFFBQVE7QUFDUixNQUFNLElBQUk7SUFFTixZQUFZLEVBQVM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUE7SUFDaEIsQ0FBQztDQUNKO0FBRUQsS0FBSztBQUNMLFNBQVMsS0FBSyxDQUFJLElBQU07SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixDQUFDO0FBQ0QsS0FBSyxDQUFTLEdBQUcsQ0FBQyxDQUFBO0FBQ2xCLEtBQUssQ0FBaUIsS0FBSyxDQUFDLENBQUE7QUFDNUIsS0FBSyxDQUFpQixLQUFLLENBQUMsQ0FBQTtBQUU1QixNQUFNO0FBRU4sb0JBQW9CO0FBQ3BCLE1BQU0sSUFBSSxHQUE0QztJQUNsRCxDQUFDLEVBQUM7UUFDRSxJQUFJLEVBQUMsTUFBTTtRQUNYLEdBQUcsRUFBQyxDQUFDO0tBQ1I7SUFDRCxDQUFDLEVBQUM7UUFDRSxJQUFJLEVBQUMsTUFBTTtRQUNYLEdBQUcsRUFBQyxDQUFDO0tBQ1I7Q0FDSixDQUFBIn0=