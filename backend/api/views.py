from ninja import Router
from pydantic import BaseModel

router = Router()

class PlanInput(BaseModel):
    goal: str

@router.post("/generate-plan/")
def generate_plan(request, payload: PlanInput):
    return {"plan": f"Here's your custom plan for {payload.goal}"}
