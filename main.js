document.getElementById('imageToReflect').addEventListener('mouseover', function() {
this.style.transform = 'scaleY(-1) rotate(5deg)';
this.style.opacity = '0.8';
});
document.getElementById('imageToReflect').addEventListener('mouseout', function() {
this.style.transform = 'scaleY(1) rotate(0deg)';
this.style.opacity = '1';
});

