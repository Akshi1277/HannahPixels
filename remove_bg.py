import os
import shutil
from rembg import remove
from PIL import Image

def process_image(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Saved {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

base_dir = r"C:\Users\Akshat Gupta\.gemini\antigravity-ide\brain\ba102b79-d359-4f8b-9c4b-10a8e9882ffb"
public_dir = r"c:\Users\Akshat Gupta\Desktop\printfix\public\images\transform"

# Ensure output directory exists
os.makedirs(public_dir, exist_ok=True)

images = {
    "dieline_cutout_src_1789740194651.jpg": "dieline.png",
    "folding_cutout_src_1789740311525.jpg": "folding.png",
    "rigid_box_src_1789740434427.jpg": "rigid-box.png",
    "luxury_box_src_1789740460459.jpg": "luxury-box.png",
    "portal_machine_arch_1789740138193.jpg": "portal-fg.png"
}

for src_name, dst_name in images.items():
    src_path = os.path.join(base_dir, src_name)
    dst_path = os.path.join(public_dir, dst_name)
    process_image(src_path, dst_path)

# Copy the background image
bg_src = os.path.join(base_dir, "factory_warehouse_bg_1789740101855.jpg")
bg_dst = os.path.join(public_dir, "factory-bg.jpg")
shutil.copy2(bg_src, bg_dst)
print(f"Copied {bg_dst}")
