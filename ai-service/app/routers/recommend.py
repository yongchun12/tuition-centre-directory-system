from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter(
    prefix="/recommend",
    tags=["Recommendations"]
)

class StudentProfile(BaseModel):
    user_id: str
    subjects_needed: List[str]
    preferred_location: str
    max_price: int

class RecommendationResponse(BaseModel):
    centre_id: str
    match_score: float
    match_reason: str

@router.post("/", response_model=List[RecommendationResponse])
def get_recommendations(profile: StudentProfile):
    """
    Generates personalized tuition centre recommendations using a dummy
    content-based filtering approach for the prototype.
    """
    
    # In a real FYP model, we would load `model.pkl` and run Matrix Factorization
    # or Cosine Similarity here against the MongoDB data.
    
    # For now, return mock recommendations based on the input
    mock_results = [
        RecommendationResponse(
            centre_id="dummy_id_1",
            match_score=0.98,
            match_reason=f"Matches your need for {profile.subjects_needed[0] if profile.subjects_needed else 'STEM'} in {profile.preferred_location}."
        ),
        RecommendationResponse(
            centre_id="dummy_id_2",
            match_score=0.85,
            match_reason="Highly rated by students with similar academic goals."
        )
    ]
    
    return mock_results
