// ========================================
//  MATCHING LOGIC
//  Score calculation algorithm
// ========================================

/**
 * Calculate match score between user and student
 * 
 * @param {Object} student - Student profile to score
 * @param {string} level - User's education level
 * @param {Array} userSkills - User's selected skills
 * @param {string} project - User's project interest
 * @returns {number} Match score (0-100)
 */
function calculateScore(student, level, userSkills, project) {
    let score = 0;

    if (level && student.level !== level) {
        return 0; // No match if level doesn't match
    }
    if (level) score += 30;

    // 2. Skills scoring
    if (userSkills.length > 0) {
        // Shared skills (same as user)
        const sharedSkills = student.skills.filter(skill => 
            userSkills.includes(skill)
        ).length;
        
        // Complementary skills (different from user)
        const complementarySkills = student.skills.filter(skill => 
            !userSkills.includes(skill)
        ).length;
        
        // Design choice: complementary skills valued more than shared
        score += sharedSkills * 5;          // +5 per shared skill
        score += complementarySkills * 7;    // +7 per complementary skill
    } else {
        score += 10; // Small bonus if no skills selected
    }

    // 3. Project interest matching
    if (project && student.projectInterest === project) {
        score += 25;
    } else if (!project) {
        score += 5; // Small bonus if no project selected
    }

    // Keep score between 0-100
    return Math.min(score, 100);
}

/**
 * Find and score all matching students
 * 
 * @param {string} level - User's education level
 * @param {Array} userSkills - User's selected skills
 * @param {string} project - User's project interest
 * @returns {Array} Sorted array of students with scores
 */
function findMatches(level, userSkills, project) {
    // Calculate score for each student
    const matchedStudents = students.map(student => {
        const score = calculateScore(student, level, userSkills, project);
        return { ...student, score: score };
    })
    .filter(student => student.score > 0)  // Only show matches
    .sort((a, b) => b.score - a.score);     // Best matches first

    return matchedStudents;
}