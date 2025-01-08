
// Tạo chức năng cuộc trang khi click vào push
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt lên đầu trang
    });
});