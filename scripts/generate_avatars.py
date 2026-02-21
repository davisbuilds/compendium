import os
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

PERSONAS = [
    ("daniel-gross", "Daniel Gross, young tech entrepreneur with dark hair and glasses"),
    ("elon-musk", "Elon Musk, distinctive sharp features and short hair"),
    ("marc-andreessen", "Marc Andreessen, tall bald man with a broad smile"),
    ("nat-friedman", "Nat Friedman, friendly face with short brown hair and beard"),
    ("naval-ravikant", "Naval Ravikant, Indian-American man with salt-and-pepper hair"),
    ("paul-graham", "Paul Graham, older man with receding reddish hair and thoughtful expression"),
    ("sam-altman", "Sam Altman, young man with light brown hair and clean-shaven face"),
    ("tim-ferriss", "Tim Ferriss, athletic build with short dark hair"),
]

BASE_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "content", "personas")

for slug, description in PERSONAS:
    print(f"Generating avatar for {slug}...")
    prompt = (
        f"Modern pixel art portrait of {description}. "
        "Bust shot, clean solid-color background, Stardew Valley / Celeste style "
        "with expressive shading and warm colors. No text, no watermarks."
    )
    response = client.models.generate_content(
        model="gemini-3-pro-image-preview",
        contents=[prompt],
        config=types.GenerateContentConfig(
            response_modalities=["TEXT", "IMAGE"],
            image_config=types.ImageConfig(
                aspect_ratio="1:1",
                image_size="1K",
            ),
        ),
    )
    out_dir = os.path.join(BASE_DIR, slug)
    os.makedirs(out_dir, exist_ok=True)
    for part in response.parts:
        if part.inline_data:
            img = part.as_image()
            img.save(os.path.join(out_dir, "avatar.png"))
            print(f"  Saved {slug}/avatar.png")
            break
    else:
        print(f"  WARNING: No image generated for {slug}")
