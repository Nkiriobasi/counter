let count = 0;

changeCount = (num) => {
    count += num;

    document.querySelector('#count').innerHTML = count;
}