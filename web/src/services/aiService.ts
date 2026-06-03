export const AI_SERVICE_URL = process.env.NEXT_PUBLIC_AI_SERVICE_URL || "http://localhost:8000";

export interface StudentProfile {
    user_id: string;
    subjects_needed: string[];
    preferred_location: string;
    max_price: number;
}

export interface Recommendation {
    centre_id: string;
    match_score: number;
    match_reason: string;
}

export interface SentimentAnalysis {
    score: 'positive' | 'neutral' | 'negative';
    polarity: number;
}

export const aiService = {
    getRecommendations: async (profile: StudentProfile): Promise<Recommendation[]> => {
        try {
            const res = await fetch(`${AI_SERVICE_URL}/recommend/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(profile),
            });
            if (!res.ok) throw new Error("Failed to fetch recommendations");
            return await res.json();
        } catch (error) {
            console.error("AI Service Error (getRecommendations):", error);
            return [];
        }
    },

    analyzeSentiment: async (text: string): Promise<SentimentAnalysis | null> => {
        try {
            const res = await fetch(`${AI_SERVICE_URL}/analyze/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            if (!res.ok) throw new Error("Failed to analyze sentiment");
            return await res.json();
        } catch (error) {
            console.error("AI Service Error (analyzeSentiment):", error);
            return null;
        }
    }
};
