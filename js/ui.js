document.addEventListener('DOMContentLoaded', function() {
    // Initialize matcher with data
    const matcher = new PeerMatcher(window.studentsData);
    
    // Get DOM elements
    const levelSelect = document.getElementById('level-select');
    const skillCheckboxes = document.querySelectorAll('.skill-checkbox');
    const projectTypeSelect = document.getElementById('project-type');
    const findMatchesBtn = document.getElementById('find-matches');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const profilesContainer = document.getElementById('profiles-container');
    const resultsCount = document.getElementById('results-count');

    // Event listeners
    findMatchesBtn.addEventListener('click', performSearch);
    resetFiltersBtn.addEventListener('click', resetFilters);

    levelSelect.addEventListener('change', performSearch);
    projectTypeSelect.addEventListener('change', performSearch);
    skillCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', performSearch);
    });

    // Show overlay on card click
    profilesContainer.addEventListener('click', function(e) {
        const card = e.target.closest('.profile-card');
        if (!card) return;

        const overlay = card.querySelector('.contact-overlay');
        if (!overlay) return;

        // Close other overlays
        document.querySelectorAll('.contact-overlay.active').forEach(o => {
            if (o !== overlay) {
                o.classList.remove('active');
                o.closest('.profile-card').classList.remove('active');
            }
        });

        // Toggle current overlay
        overlay.classList.toggle('active');
        card.classList.toggle('active');
    });

    /**
     * Perform the matching search
     */
    function performSearch() {
        const criteria = {
            level: levelSelect.value,
            skills: getSelectedSkills(),
            projectType: projectTypeSelect.value
        };

        const matches = matcher.findMatches(criteria);
        displayResults(matches);
    }

    /**
     * Get selected skills from checkboxes
     */
    function getSelectedSkills() {
        const selected = [];
        skillCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selected.push(checkbox.value);
            }
        });
        return selected;
    }

    /**
     * Reset all filters
     */
    function resetFilters() {
        levelSelect.value = '';
        projectTypeSelect.value = '';
        skillCheckboxes.forEach(checkbox => checkbox.checked = false);

        profilesContainer.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <p>Use the filters on the left to find your perfect project partner</p>
            </div>
        `;
        resultsCount.textContent = 'Select your criteria to see matches';
    }

    /**
     * Display search results
     */
    function displayResults(matches) {
        if (matches.length === 0) {
            resultsCount.textContent = 'No matches found. Try adjusting your criteria.';
            profilesContainer.innerHTML = `
                <div class="no-results">
                    <div class="no-results-icon">😔</div>
                    <h3>No Matches Found</h3>
                    <p>Try selecting different criteria or broadening your search</p>
                </div>
            `;
            return;
        }

        resultsCount.textContent = matches.length === 1 ? '1 match found' : `${matches.length} matches found`;
        profilesContainer.innerHTML = matches.map(profile => createProfileCard(profile)).join('');
    }

    /**
     * Create HTML for a profile card
     */
    function createProfileCard(profile) {
        const skillTags = profile.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        const scorePercentage = profile.matchScore || 0;

        // Make sure every profile has email & Facebook link (fallback)
        profile.email = profile.email || 'example@mail.com';
        profile.facebook = profile.facebook || 'https://facebook.com';

        return `
            <div class="profile-card" data-id="${profile.id}">
                <div class="profile-header">
                    <div class="profile-avatar">${profile.initials}</div>
                    <div class="profile-info">
                        <div class="profile-name">${profile.name}</div>
                        <span class="profile-level">${profile.level}</span>
                    </div>
                </div>
                <div class="profile-body">
                    <div class="profile-section">
                        <div class="section-label">Skills</div>
                        <div class="skills-list">${skillTags}</div>
                    </div>
                    <div class="profile-section">
                        <div class="section-label">Project Interest</div>
                        <div class="project-interest">${profile.projectInterest}</div>
                    </div>
                </div>
                <div class="match-score">
                    <span class="score-label">Match Score</span>
                    <div class="score-value">
                        <div class="score-bar">
                            <div class="score-fill" style="width: ${scorePercentage}%"></div>
                        </div>
                        <span class="score-number">${scorePercentage}%</span>
                    </div>
                </div>

                <div class="contact-overlay">
                    <a href="mailto:${profile.email}" class="contact-icon">
                        <img src="icons/mail.png" alt="Mail Icon">
                    </a>
                    <a href="${profile.facebook}" target="_blank" class="contact-icon">
                        <img src="icons/facebook.png" alt="Facebook Icon">
                    </a>
                </div>
            </div>
        `;
    }
});
