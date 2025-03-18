// Smooth scroll effect for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleService(serviceId) {
    var serviceContent = document.getElementById(serviceId);
    if (serviceContent.style.display === 'block') {
        serviceContent.style.display = 'none';
    } else {
        serviceContent.style.display = 'block';
    }
}
