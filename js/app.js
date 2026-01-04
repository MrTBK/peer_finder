document.addEventListener('DOMContentLoaded', function() {

    const levelSelect = document.getElementById('level');
    const skillCheckboxes = document.querySelectorAll('#skills input[type="checkbox"]');
    const projectSelect = document.getElementById('project');
    const findBtn = document.getElementById('find-btn');
    const resetBtn = document.getElementById('reset-btn');
    const profilesDiv = document.getElementById('profiles');
    const countText = document.getElementById('count');


    findBtn.addEventListener('click', handleFindMatches);
    resetBtn.addEventListener('click', handleReset);
    levelSelect.addEventListener('change', handleFindMatches);
    projectSelect.addEventListener('change', handleFindMatches);
    
    skillCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFindMatches);
    });


    profilesDiv.addEventListener('click', handleCardClick);

    function handleFindMatches() {
        const selectedLevel = levelSelect.value;
        const selectedSkills = getSelectedSkills();
        const selectedProject = projectSelect.value;

        if (!selectedLevel && selectedSkills.length === 0 && !selectedProject) {
            showEmptyState(profilesDiv, countText);
            return;
        }

        const matches = findMatches(selectedLevel, selectedSkills, selectedProject);
        
        displayResults(matches, profilesDiv, countText);
    }

    function handleReset() {
        levelSelect.value = '';
        projectSelect.value = '';
        skillCheckboxes.forEach(checkbox => checkbox.checked = false);
        showEmptyState(profilesDiv, countText);
    }

    function handleCardClick(e) {
        const card = e.target.closest('.card');
        if (!card) return;

        const overlay = card.querySelector('.contact');
        if (!overlay) return;

        document.querySelectorAll('.contact.active').forEach(other => {
            if (other !== overlay) {
                other.classList.remove('active');
                other.closest('.card').classList.remove('active');
            }
        });

        overlay.classList.toggle('active');
        card.classList.toggle('active');
    }

    function getSelectedSkills() {
        const skills = [];
        skillCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                skills.push(checkbox.value);
            }
        });
        return skills;
    }

});
