const partyHost = "Nguyen Minh Duc";
const venueCost = 2000000;
const foodCostPerGuest = 150000;
const guestCount = 20;
const drinkCost = 1000000;
const decorCost = 1500000;
const targetBudget = 8000000;

const foodTotal = foodCostPerGuest * guestCount;
const totalPartyCost = venueCost + foodTotal + drinkCost + decorCost;
const costPerGuest = totalPartyCost / guestCount;
const budgetVariance = targetBudget - totalPartyCost;

console.log(`
========== DỰ TOÁN TIỆC SINH NHẬT ==========
Chủ tiệc: ${partyHost}
Số khách: ${guestCount} người
Phí thuê địa điểm:       ${venueCost} VNĐ
Tiền đồ ăn:              ${foodTotal} VNĐ
Tiền đồ uống:            ${drinkCost} VNĐ
Trang trí & bánh kem:    ${decorCost} VNĐ
--------------------------------------------
Tổng chi phí:            ${totalPartyCost} VNĐ
Chi phí / khách:         ${costPerGuest} VNĐ
Ngân sách dự kiến:       ${targetBudget} VNĐ
Chênh lệch ngân sách:    ${budgetVariance} VNĐ
============================================
`);