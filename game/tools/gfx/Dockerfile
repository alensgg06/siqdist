# Pembuat tekstur (dijalankan sekali, bukan bagian dari server game). Butuh GPU NVIDIA.
FROM pytorch/pytorch:2.5.1-cuda12.4-cudnn9-runtime
# PyTorch dan torchvision bawaan image harus tetap berpasangan: pip dilarang menggantinya.
RUN python -c "import torch, torchvision; v = lambda m: m.__version__.split('+')[0]; print(f'torch=={v(torch)}\ntorchvision=={v(torchvision)}')" > /constraints.txt && cat /constraints.txt
RUN pip install --no-cache-dir -c /constraints.txt "diffusers==0.31.0" "transformers==4.46.3" "huggingface_hub>=0.25,<0.30" "accelerate>=1.0,<2" safetensors pillow "numpy<2.3"
# gagal saat membangun, bukan saat dijalankan, bila pustaka tidak cocok satu sama lain
RUN python -c "import torch, torchvision; from diffusers import AutoencoderKL, StableDiffusionXLPipeline; print('pustaka cocok: torch', torch.__version__, 'torchvision', torchvision.__version__)"
WORKDIR /gfx
COPY generate.py .
ENV HF_HOME=/cache OUT=/out PYTHONUNBUFFERED=1
CMD ["python", "generate.py"]
