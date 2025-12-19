class PeerMatcher {
    constructor(data) {
        this.allProfiles = data;
    }

    findMatches(criteria) {
        const { level, skills, projectType } = criteria;
        if (!level && skills.length === 0 && !projectType) return [];

        return this.allProfiles
            .map(profile => {
                const score = this.calculateMatchScore(profile, criteria);
                return { ...profile, matchScore: score };
            })
            .filter(profile => profile.matchScore > 0)
            .sort((a, b) => b.matchScore - a.matchScore);
    }

    calculateMatchScore(profile, criteria) {
        let score = 0;
        const { level, skills, projectType } = criteria;

        if (level) {
            if (profile.level !== level) return 0; // HARD FILTER
            score += 30;
        }

        if (skills.length > 0) {
            const shared = this.getSharedSkills(skills, profile.skills);
            const complementary = this.getComplementarySkills(skills, profile.skills);
            score += shared * 4;
            score += complementary * 6;
        } else score += 10;

        if (projectType) {
            if (profile.projectInterest === projectType) score += 20;
        } else score += 5;

        return Math.min(score, 100);
    }

    getSharedSkills(userSkills, profileSkills) {
        return profileSkills.filter(skill => userSkills.includes(skill)).length;
    }

    getComplementarySkills(userSkills, profileSkills) {
        return profileSkills.filter(skill => !userSkills.includes(skill)).length;
    }
}

window.PeerMatcher = PeerMatcher;
