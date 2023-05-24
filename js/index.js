const endDate = "29 May 2023 01:37:50 AM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0) {
        return;
    }

    // Convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // Hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // Minute
    inputs[2].value = Math.floor(diff / 60) % 60;
    // second
    inputs[3].value = Math.floor(diff) % 60;
    

};

// Initial call
// clock();

setInterval( () => {
    clock()
},
1000
)