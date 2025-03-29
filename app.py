from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import requests
import logging
import os
from dotenv import load_dotenv

load_dotenv()
BOT_TOKEN = os.getenv("BOT_TOKEN")
GROUP_ID = os.getenv("GROUP_ID")
TOPIC_ID = os.getenv("TOPIC_ID")

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(title="Telegram Bot API", version="1.0", description="API for sending messages to a Telegram group topic")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessageRequest(BaseModel):
    name: str = Field(..., example="John Doe", min_length=1, max_length=100)
    phone: str = Field(..., example="+123456789", min_length=10, max_length=20)

def send_message(name: str, phone: str):
    """
    Sends a formatted message to the specified Telegram group topic.
    """
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    message = f"<b>Name:</b> {name}\n<b>Phone:</b> {phone}"
    
    payload = {
        "chat_id": GROUP_ID,
        "message_thread_id": TOPIC_ID,
        "text": message,
        "parse_mode": "HTML"
    }

    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()  # Raise an error for HTTP errors
        data = response.json()

        if not data.get("ok"):
            raise Exception(f"Telegram API Error: {data}")

        return {"success": True, "message": "Message sent successfully", "telegram_response": data}

    except requests.exceptions.RequestException as e:
        logger.error(f"Failed to send message: {e}")
        return {"success": False, "message": "Failed to send message to Telegram", "error": str(e)}


@app.post("/receive-data", response_model=dict)
async def receive_data(request: MessageRequest):
    """
    API endpoint that receives 'name' and 'phone', validates input, and sends the message to Telegram.
    """
    logger.info(f"Received data: {request.model_dump()}")
    
    response = send_message(request.name, request.phone)

    if response["success"]:
        logger.info("Message sent successfully")
        return {"status": "success", "detail": response["message"]}
    else:
        logger.error(f"Error: {response['message']}")
        raise HTTPException(status_code=500, detail=response["message"])