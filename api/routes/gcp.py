from dataclasses import dataclass
from typing import List, Optional

from fastapi import APIRouter
from fastapi.responses import FileResponse
from fastapi.params import Form

from api.utils import gcp_utils

gcp_api_router = APIRouter(prefix="/gcp/v1", tags=["get_text_from_speech"])

@gcp_api_router.post("/get_text_from_speech")
def get_text_from_speech(
    text: str = Form(...),
    effectsProfileId: Optional[str] = Form("headphone-class-device"),
    audio_encoding: Optional[str] = Form("MP3"),
    pitch: Optional[int] = Form(0),
    speaking_rate: Optional[float] = Form(1.0),
    language_code: Optional[str] = Form("en-US"),
    name: Optional[str] = Form("en-US-Wavenet-F")
):
    gcp_utils.synthesize_text(text=text, name=name, speakingRate=speaking_rate, pitch=pitch, effectsProfileId=effectsProfileId, audio_encoding=audio_encoding)

    return FileResponse("api/src/tmp/output.mp3", media_type="audio/mpeg")