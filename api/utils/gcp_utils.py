def synthesize_text(text,name,speakingRate,pitch,effectsProfileId,audio_encoding):
    """Synthesizes speech from the input string of text."""
    from google.cloud import texttospeech

    client = texttospeech.TextToSpeechClient()

    input_text = texttospeech.SynthesisInput(text=text)

    # Note: the voice can also be specified by name.
    # Names of voices can be retrieved with client.list_voices().
    voice = texttospeech.VoiceSelectionParams(
        language_code=name[:5],
        name=name,
        ssml_gender=texttospeech.SsmlVoiceGender.SSML_VOICE_GENDER_UNSPECIFIED
    )

    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3 if audio_encoding=='MP3' else texttospeech.AudioEncoding.OGG_OPUS,
        speaking_rate=speakingRate,
        pitch=pitch,
        effects_profile_id=[effectsProfileId]
    )

    response = client.synthesize_speech(
        request={"input": input_text, "voice": voice, "audio_config": audio_config}
    )

    # The response's audio_content is binary.
    with open("api/src/tmp/output.mp3" if audio_encoding=='MP3' else "output.ogg", "wb") as out:
        out.write(response.audio_content)
        print('Audio content written to file ' + '"api/src/tmp/output.mp3"' if audio_encoding=='MP3' else '"api/src/tmp/output.ogg"')