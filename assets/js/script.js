
// Tạo chức năng cuộc trang khi click vào push
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt lên đầu trang
    });
});


// Khi click vào button next step thì điều hướng sang trang mới

const btnNextStep = document.querySelector('#nextStepBtn');
if (btnNextStep) {
    btnNextStep.addEventListener("click", () => {
        window.location.href = "step2.html";
    })
}



// Dùng khi ở step 2 mà chọn 1 trong các option thì sẽ tự render ra giá tri được chọn
const selectOption = document.querySelector('#filter-select');
selectOption.addEventListener('change', function () {
    let selectedValue = this.value.toLowerCase();
    let listItems = document.querySelectorAll('#company-list li');
    listItems.forEach(function (item) {
        if (selectedValue === 'all' || item.getAttribute('data-company') === selectedValue) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});


// Khi click vào option ở step 2
document.querySelectorAll('#company-list li').forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        document.querySelectorAll('#company-list li').forEach(li => {
            li.classList.remove('active');
        });
        // Add active class to the clicked item
        item.classList.add('active');
    });
});




// trở lại trang chủ
const buttonToHome = document.querySelector(".back-to-1");
if (buttonToHome) {
    buttonToHome.addEventListener("click", () => {
        window.location.href = "index.html";
    })
}