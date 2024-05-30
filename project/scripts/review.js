let resultCount = localStorage.getItem("resultCount");

if (!resultCount) {
    resultCount = 0;
} else {
    resultCount = parseInt(resultCount);
}

resultCount++;

localStorage.setItem("resultCount", resultCount);