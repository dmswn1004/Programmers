function solution(price, money, count) {
    for (var i = 1; i <= count; i++)
        money -= price * i;
    return money > 0 ? 0 : Math.abs(money);
}
