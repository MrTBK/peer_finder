function createCard(student) {
    const skillsHTML = student.skills.map(skill => 
        `<span class="skill">${skill}</span>`
    ).join('');

    return `
        <div class="card">
            <div class="card-header">
                <div class="avatar">${student.initials}</div>
                <div class="card-info">
                    <h3>${student.name}</h3>
                    <span class="level">${student.level}</span>
                </div>
            </div>
            
            <div class="card-section">
                <div class="label">Skills</div>
                <div class="skills">${skillsHTML}</div>
            </div>
            
            <div class="card-section">
                <div class="label">Project Interest</div>
                <div class="project">${student.projectInterest}</div>
            </div>
            
            <div class="score">
                <div class="score-header">
                    <span class="score-label">Match Score</span>
                    <span class="score-value">${student.score}%</span>
                </div>
                <div class="score-bar">
                    <div class="score-fill" style="width: ${student.score}%"></div>
                </div>
            </div>

            <div class="contact">
                <a href="mailto:${student.email}" title="Send Email">
                    <img src="icons/mail.png" alt="Email" onerror="this.parentElement.innerHTML='📧'">
                </a>
                <a href="${student.facebook}" target="_blank" title="Facebook">
                    <img src="icons/facebook.png" alt="Facebook" onerror="this.parentElement.innerHTML='👥'">
                </a>
            </div>
        </div>
    `;
}

function displayResults(matches, profilesDiv, countText) {
    if (matches.length === 0) {
        countText.textContent = 'No matches found. Try different criteria.';
        profilesDiv.innerHTML = `
            <div class="no-results">
                <h3>No Matches Found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }

    countText.textContent = matches.length === 1 
        ? '1 match found' 
        : `${matches.length} matches found`;

    profilesDiv.innerHTML = matches.map(student => createCard(student)).join('');
}

function showEmptyState(profilesDiv, countText) {
    countText.textContent = 'Select your criteria to see matches';
    profilesDiv.innerHTML = `
        <div class="empty">
            <p>👈 Use the filters to find partners</p>
        </div>
    `;
}