document.addEventListener('DOMContentLoaded', function() {
    var roles = ['Developer.', 'Coder.'];
    var roleDisplay = document.getElementById('roleDisplay');
    var currentRoleIndex = 0;

    function typeWriter(text, index) {
        if (index < text.length) {
            roleDisplay.textContent = 'a ' + text.substring(0, index + 1);
            setTimeout(function() {
                typeWriter(text, index + 1);
            }, 200); // Adjust typing speed here (milliseconds)
        } else {
            setTimeout(function() {
                eraseText(text);
            }, 1000); // Delay before erasing text
        }
    }

    function eraseText(text) {
        var length = text.length;
        setTimeout(function() {
            eraseHelper(length);
        }, 1000); // Delay before starting erase

        function eraseHelper(index) {
            if (index >= 0) {
                roleDisplay.textContent = 'a ' + text.substring(0, index);
                setTimeout(function() {
                    eraseHelper(index - 1);
                }, 50); // Adjust erasing speed here (milliseconds)
            } else {
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                setTimeout(function() {
                    typeWriter(roles[currentRoleIndex], 0);
                }, 500); // Delay before typing new text
            }
        }
    }

    // Initial typing animation
    typeWriter(roles[currentRoleIndex], 0);
});