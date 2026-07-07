from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SOURCE = PUBLIC / "logo.png"


def trim_whitespace(image: Image.Image, threshold: int = 245) -> Image.Image:
    rgb = image.convert("RGB")
    pixels = rgb.load()
    width, height = rgb.size
    xs = []
    ys = []

    for y in range(height):
        for x in range(width):
            red, green, blue = pixels[x, y]
            if min(red, green, blue) < threshold:
                xs.append(x)
                ys.append(y)

    if not xs:
        return image.convert("RGBA")

    left = max(min(xs) - 24, 0)
    top = max(min(ys) - 24, 0)
    right = min(max(xs) + 25, width)
    bottom = min(max(ys) + 25, height)
    return image.crop((left, top, right, bottom)).convert("RGBA")


def render_icon(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), "#ffffff")
    logo = trim_whitespace(Image.open(SOURCE))

    mark_bottom = round(logo.height * 0.66)
    mark = logo.crop((0, 0, logo.width, mark_bottom))

    target_width = round(size * 0.82)
    target_height = round(target_width * mark.height / mark.width)

    if target_height > round(size * 0.82):
        target_height = round(size * 0.82)
        target_width = round(target_height * mark.width / mark.height)

    mark = mark.resize((target_width, target_height), Image.Resampling.LANCZOS)

    x = (size - target_width) // 2
    y = (size - target_height) // 2
    canvas.alpha_composite(mark, (x, y))
    return canvas


render_icon(32).save(PUBLIC / "favicon-32x32.png", optimize=True)
render_icon(180).save(PUBLIC / "apple-touch-icon.png", optimize=True)
render_icon(192).save(PUBLIC / "icon-192.png", optimize=True)
render_icon(512).save(PUBLIC / "icon-512.png", optimize=True)
render_icon(256).save(
    PUBLIC / "favicon.ico",
    sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)],
)
