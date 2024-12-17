// JavaScript to handle the Buy Now button
document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buy-btn');

    buyBtn.addEventListener('click', () => {
        alert('Thank you for your interest in the Halo Mini Projector! Visit our store to complete your purchase.');
        window.location.href = "https://example.com/store"; // Replace with actual store link
    });
});
