const ctx = document.getElementById('employeeChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ],
        datasets: [{
            label: 'Employees',
            data: [
                120,
                135,
                150,
                180,
                210,
                245
            ],
            borderWidth: 3,
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true
    }
});
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function () {
        sidebar.classList.add("show");
    });
}

if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });
}