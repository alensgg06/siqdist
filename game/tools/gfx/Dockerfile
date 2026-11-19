# Pembuat tekstur (dijalankan sekali, bukan bagian dari server game). Butuh GPU NVIDIA.
FROM pytorch/pytorch:2.5.1-cuda12.4-cudnn9-runtime
RUN pip install --no-cache-dir "diffusers==0.31.0" "transformers==4.46.3" "huggingface_hub>=0.25,<0.30" "accelerate>=1.0,<2" safetensors pillow "numpy<2.3"
WORKDIR /gfx
COPY generate.py .
ENV HF_HOME=/cache OUT=/out PYTHONUNBUFFERED=1
CMD ["python", "generate.py"]
