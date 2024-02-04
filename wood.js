/*
chair-->3 cft
table---> 10 cft
bed -----> 50 cft

*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const ChairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const BedTotalWood = bedQuantity * perBedWood;

    const totalWood = ChairTotalWood + tableTotalWood + BedTotalWood;

    return totalWood;

}

const wood = woodQuantity(1, 2, 5);
console.log('wood needed', wood);


/* 
shirt price-500
pant price -1000
shoe price-1500

*/