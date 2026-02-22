import os
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])

PERSONAS = [
    ("daniel-gross", "Daniel Gross, fair-skinned, slim build, short dark hair, sharp features, composed expression"),
    ("elon-musk", "Elon Musk, distinctive sharp features and short hair"),
    ("marc-andreessen", "Marc Andreessen, tall bald man with a broad smile"),
    ("nat-friedman", "Nat Friedman, slim build, fair complexion, short light-brown hair, broad smile, clean shaven"),
    ("naval-ravikant", "Naval Ravikant, Indian-American, medium build, salt-and-pepper curly hair, warm smile, expressive eyes"),
    ("paul-graham", "Paul Graham, fair-skinned, round-faced, short light-brown hair, thoughtful expression, approachable appearance"),
    ("sam-altman", "Sam Altman, slim build, short brown hair, light eyes, calm expression, understated demeanor"),
    ("tim-ferriss", "Tim Ferriss, bald head, athletic build, clean-shaven"),
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
