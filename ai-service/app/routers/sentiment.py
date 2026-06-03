from fastapi import APIRouter
from pydantic import BaseModel
from textblob import TextBlob

router = APIRouter(
    prefix="/analyze",
    tags=["Sentiment Analysis"]
)

class ReviewRequest(BaseModel):
    text: str

class SentimentResponse(BaseModel):
    score: str # positive, neutral, negative
    polarity: float # numerical score between -1 and 1

@router.post("/", response_model=SentimentResponse)
def analyze_sentiment(request: ReviewRequest):
    """
    Analyzes the sentiment of a given review text using TextBlob.
    This serves as a baseline NLP model for the FYP prototype.
    """
    analysis = TextBlob(request.text)
    polarity = analysis.sentiment.polarity
    
    if polarity > 0.1:
        score = "positive"
    elif polarity < -0.1:
        score = "negative"
    else:
        score = "neutral"
        
    return SentimentResponse(score=score, polarity=polarity)
