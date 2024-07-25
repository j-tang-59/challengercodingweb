document.addEventListener('DOMContentLoaded', (event) => {
    const courseSelect = document.getElementById('courseSelect');

    courseSelect.addEventListener('change', function() {
        const selectedCourse = courseSelect.value;
        if (selectedCourse) {
            switch (selectedCourse) {
                case 'scratch':
                    window.location.href = 'scratch_tutorials.html';
                    break;
                case 'python':
                    window.location.href = 'python_tutorials.html';
                    break;
                case 'java':
                    window.location.href = 'java_tutorials.html';
                    break;
            }
        }
    });
});
