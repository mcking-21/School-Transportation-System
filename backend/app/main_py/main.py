from fastapi import FastAPI

app = FastAPI(title="School Transportation System API")

@app.get("/")
async def root():
    return {"message": "Backend is running!"}