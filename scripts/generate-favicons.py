from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SOURCE = PUBLIC / "mtseku-mark-color.png"


def render_icon(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), "#071426")
    mark = Image.open(SOURCE).convert("RGBA")

    target_width = round(size * 0.82)
    target_height = round(target_width * mark.height / mark.width)
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
